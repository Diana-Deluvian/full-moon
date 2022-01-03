import { Link, Outlet } from 'react-router-dom';
import AuthForm from './AuthForm';

export default function LandingPage() {
  return (
    <div className='flex w-full min-h-full justify-center items-center'>
      <div className='flex '>
        <section className='w-1/2 max-width-60ch min-h-full p-4 flex flex-col border-r-2 border-black'>
          <h1 className='text-center text-3xl my-2'>Welcome to my project!</h1>
          <p className=''>
            Welcome to my project. This is the big deal, the end of the line,
            the place you go. Full moon is intended to be the comprehensive life
            planning tool, from your day-to-day, to your entire life. Good luck
            in fulfilling your dreams!
          </p>
        </section>
        <section className='w-1/2 min-h-full max-width-60ch p-4 border-l-2 border-black'>
          <AuthForm />
        </section>
      </div>
    </div>
  );
}
