import React from 'react'

type PageItem = number | 'ellipsis'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  maxVisiblePages?: number
  className?: string
  disabled?: boolean
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  className = '',
  disabled = false,
}) => {
  const isPageNumber = (page: PageItem): page is number => {
    return typeof page === 'number'
  }

  const handlePageClick = (page: number) => {
    if (page < 1 || page > totalPages) return
    onPageChange(page)
  }

  const getVisiblePages = (): PageItem[] => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const visiblePages: PageItem[] = []
    const halfVisible = Math.floor(maxVisiblePages / 2)
    let startPage = Math.max(currentPage - halfVisible, 1)
    let endPage = Math.min(currentPage + halfVisible, totalPages)

    if (currentPage <= halfVisible) {
      endPage = maxVisiblePages
    } else if (currentPage >= totalPages - halfVisible) {
      startPage = totalPages - maxVisiblePages + 1
    }

    // Always show first page
    if (startPage > 1) {
      visiblePages.push(1)
      if (startPage > 2) {
        visiblePages.push('ellipsis')
      }
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i)
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        visiblePages.push('ellipsis')
      }
      visiblePages.push(totalPages)
    }

    return visiblePages
  }

  const visiblePages = getVisiblePages()

  return (
    <nav
      className={`relative flex items-center justify-center space-x-1 ${className} ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
      aria-label='Pagination'
    >
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        className='flex h-8 cursor-pointer items-center text-xs font-medium text-surface-800 transition-all hover:text-strong-950 disabled:cursor-not-allowed disabled:text-sub-300 md:text-sm'
        aria-label='Previous page'
        type='button'
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className='relative flex items-center gap-[5px] px-[5px]'>
        {visiblePages.map((page: PageItem, index: number) => {
          if (!isPageNumber(page)) {
            return (
              <span
                key={`ellipsis-${index}`}
                className='relative flex size-8 items-center justify-center rounded-lg'
                aria-hidden='true'
              >
                ...
              </span>
            )
          }
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              disabled={disabled}
              className={`relative flex size-8 items-center justify-center rounded-lg border border-soft-100 text-xs font-medium transition-all hover:border-soft-400 md:text-sm ${
                page === currentPage
                  ? 'bg-primary-base text-white'
                  : 'bg-white text-surface-800 hover:text-strong-950 disabled:cursor-not-allowed'
              }`}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
              type='button'
            >
              {page}
            </button>
          )
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        className='flex h-8 cursor-pointer items-center text-xs font-medium text-surface-800 transition-all hover:text-strong-950 disabled:cursor-not-allowed disabled:text-sub-300 md:text-sm'
        aria-label='Next page'
        type='button'
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
