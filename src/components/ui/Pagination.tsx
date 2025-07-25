interface PaginationProps {
  currentPage?: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  maxVisiblePages?: number
  className?: string
  disabled?: boolean
}

type PageItem = number | 'ellipsis-start' | 'ellipsis-end'

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  className = '',
  disabled = false,
}) => {
  const getVisiblePages = (): PageItem[] => {
    const pages: PageItem[] = []
    const halfVisible: number = Math.floor(maxVisiblePages / 2)

    let startPage: number = Math.max(1, currentPage - halfVisible)
    let endPage: number = Math.min(totalPages, currentPage + halfVisible)

    console.log('maxVisiblePages', maxVisiblePages)
    console.log('halfVisible', halfVisible)

    console.log('startPage', startPage)
    console.log('endPage', endPage)

    // Adjust if we're near the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
      } else {
        startPage = currentPage - 1
        endPage = currentPage + 1
      }
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) {
        pages.push('ellipsis-start')
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end')
      }
      pages.push(totalPages)
    }

    return pages
  }

  const handlePageClick = (page: number): void => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const isPageNumber = (page: PageItem): page is number => {
    return typeof page === 'number'
  }

  const visiblePages: PageItem[] = getVisiblePages()

  console.log('visiblePages', visiblePages)

  return (
    <nav
      className={`relative flex items-center justify-center space-x-1 ${className} ${disabled ? 'pointer-events-none opacity-50' : ''}`}
      aria-label='Pagination'
    >
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        className='flex items-center rounded-md border bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-soft-200 hover:text-soft-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-sub-300'
        aria-label='Previous page'
        type='button'
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className='relative flex items-center space-x-1'>
        {visiblePages.map((page: PageItem, index: number) => {
          if (!isPageNumber(page)) {
            return (
              <span
                key={`ellipsis-${index}`}
                className='relative flex h-10 w-10 items-center justify-center'
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
              className={`h-10 w-10 rounded-md text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-primary-base text-white'
                  : 'bg-white text-soft-400 disabled:cursor-not-allowed'
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
        className='flex items-center rounded-md border bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-soft-200 hover:text-soft-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-sub-300'
        aria-label='Next page'
        type='button'
      >
        Next
      </button>
    </nav>
  )
}
export default Pagination
