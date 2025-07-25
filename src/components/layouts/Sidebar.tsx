import logoImage from '@/assets/images/logo-brand-small.webp'

const Sidebar = () => {
  return (
    <div className='h-dvh w-62 bg-weak-50'>
      <div className='border-b border-soft-100 p-5'>
        <img src={logoImage} alt='Logo' width={63} height={24} fetchPriority='high' />
      </div>
    </div>
  )
}

export default Sidebar
