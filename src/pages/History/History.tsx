import DashboardLayout from '@/components/layouts/DashboardLayout'
import { historyData } from '@/data/historyData'
import { useState } from 'react'

import '@/styles/table.css'
import type { HistoryItem } from '@/types/history.type'
import TableControls from './components/TableControls'
import TableHeader from './components/TableHeader'
import TableRow from './components/TableRow'
import Pagination from '@/components/ui/Pagination'

type SortDirection = 'asc' | 'desc'
type SortKey = 'name' | 'dueDate' | 'label' | 'status' | ''

const ITEMS_PER_PAGE = 10 // Set the number of items per page

const History = () => {
  const [allData, setAllData] = useState<HistoryItem[]>(historyData)
  const [displayData, setDisplayData] = useState<HistoryItem[]>(historyData.slice(0, ITEMS_PER_PAGE)) // Data to display
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey
    direction: SortDirection
  }>({ key: '', direction: 'asc' })
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (query: string) => {
    const filtered = historyData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    setAllData(filtered)
    setCurrentPage(1)
    updateDisplayData(filtered, 1)
  }

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = 'asc'

    if (sortConfig.key === key) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc'
    }

    setSortConfig({ key, direction })

    const sorted = [...allData].sort((a, b) => {
      // Helper function to handle comparison based on direction
      const compare = (a: string | number, b: string | number) => {
        if (a < b) return direction === 'asc' ? -1 : 1
        if (a > b) return direction === 'asc' ? 1 : -1
        return 0
      }

      switch (key) {
        case 'name':
          return compare(a.name, b.name)
        case 'dueDate':
          return compare(new Date(a.dueDate).getTime(), new Date(b.dueDate).getTime())
        case 'label':
          return compare(a.label.text, b.label.text)
        case 'status':
          return compare(a.status.text, b.status.text)
        default:
          return 0
      }
    })

    setAllData(sorted)
    updateDisplayData(sorted, currentPage)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    updateDisplayData(allData, page)
  }

  const updateDisplayData = (data: HistoryItem[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    setDisplayData(data.slice(startIndex, endIndex))
  }

  const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE)

  return (
    <DashboardLayout>
      <div className='w-full px-8'>
        <h1 className='mb-1 text-h4-mobile text-strong-950 md:text-h4'>Project History</h1>
        <p className='text-md text-surface-800 md:text-lg'>Manage and track project milestones</p>
      </div>

      <div className='mb-6 flex flex-col gap-4 px-4 md:mb-8 md:gap-6 md:px-8'>
        <TableControls onSearch={handleSearch} />
        <div className='w-full overflow-hidden rounded-xl border border-soft-100 bg-white'>
          <div className='max-w-full overflow-x-scroll'>
            <table className='w-full border-collapse overflow-hidden rounded-xl border border-white'>
              <thead className='max-md:hidden'>
                <tr>
                  <TableHeader label='Task Name' onSort={() => handleSort('name')} />
                  <TableHeader label='Due Date' onSort={() => handleSort('dueDate')} />
                  <TableHeader label='Member' sortable={false} />
                  <TableHeader label='Label' onSort={() => handleSort('label')} />
                  <TableHeader label='Status' onSort={() => handleSort('status')} />
                  <TableHeader label='' sortable={false} />
                </tr>
              </thead>
              <tbody>
                {displayData.map((history) => (
                  <TableRow key={history.id} history={history} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          maxVisiblePages={3}
        />
      </div>
    </DashboardLayout>
  )
}

export default History
