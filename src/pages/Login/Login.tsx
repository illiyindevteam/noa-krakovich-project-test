import previewImage from '@/assets/images/login-preview-img.webp'
import logoImage from '@/assets/images/logo-brand-small.webp'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import FormField from '@/components/ui/FormField'
import InputText from '@/components/ui/InputText'

const Login = () => {
  return (
    <section className='mx-auto grid w-full max-w-[1440px] grid-cols-1 px-4 py-12 md:p-8 lg:h-225 lg:grid-cols-2'>
      <div className='hidden h-full w-full p-3 lg:block'>
        <div className='h-full w-full'>
          <img
            src={previewImage}
            alt='Login Preview Image'
            width={696}
            height={876}
            className='h-full w-full rounded-3xl object-cover'
          />
        </div>
      </div>
      <div className='flex h-full w-full items-center justify-center md:px-4'>
        <div className='flex w-full max-w-[488px] flex-col gap-6 rounded-3xl border border-soft-100 px-4 py-8 text-center xs:gap-10 xs:p-10'>
          <div className='flex w-full flex-col items-center gap-2'>
            <img src={logoImage} alt='Logo' width={63} height={24} fetchPriority='high' />
            <h1 className='mt-4 text-h5-mobile text-strong-950 xs:mt-8 md:text-h5'>Welcome back!</h1>
            <p className='text-sm text-surface-800 md:text-md'>Manage your creative projects with clarity and ease.</p>
          </div>
          <form>
            <div className='mb-6 w-full text-start xs:mb-[32px]'>
              <FormField htmlFor='email' label='Email' isRequired className='mb-3 xs:mb-6'>
                <InputText type='email' placeholder='Enter your email' />
              </FormField>
              <FormField htmlFor='password' label='Password' isRequired className='mb-[6px]'>
                <InputText type='password' placeholder='Enter your password' />
              </FormField>
              <Checkbox label='Remember me' />
            </div>
            <div className='flex flex-col items-center gap-4 xs:gap-6'>
              <Button text='Login' />
              <div className='flex w-full max-w-60 items-center justify-center gap-4'>
                <hr className='w-full border-soft-100' />
                <span className='text-md text-sub-600'>or</span>
                <hr className='w-full border-soft-100' />
              </div>
              <Button text='Google' />
            </div>
          </form>
          <p className='text-xs text-surface-800 md:text-sm'>
            Don&apos;t have an account? <a className='text-primary-base'>Create an account</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
