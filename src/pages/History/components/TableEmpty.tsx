const TableEmpty = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center rounded-xl border border-soft-100 bg-white py-12'>
      <img
        src='https://images.icon-icons.com/2483/PNG/512/empty_data_icon_149938.png'
        alt='No data'
        className='mb-4 size-20 object-contain md:size-24'
      />
      <h3 className='text-md font-medium! text-strong-950 md:text-lg'>No History Found</h3>
      <p className='text-xs text-soft-400 md:text-sm'>
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>
  )
}

export default TableEmpty
