'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

export default function Home() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <main className='bg-[var(--secondary)] w-screen h-screen flex items-center justify-center p-12'>
      <form className='flex flex-col gap-4 w-full'>
        <Image src='/logomarca.png' width={200} height={100} alt='logo' className='self-center mb-6' />
        <h1 className='text-2xl font-semibold text-center mb-6'>Sign In</h1>
        <div className='flex flex-col gap-10 mb-6'>
          <label className='flex flex-col'>
            <input 
              className={`h-10 bg-[var(--thirth)] px-4 rounded-md outline-none`} 
              name='email' 
              value={state.email} 
              type="email" 
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className='flex flex-col'>
            <input
              className={`h-10 bg-[var(--thirth)] px-4 rounded-md outline-none`}
              name='password' 
              value={state.password} 
              type="password" 
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <button 
          className='w-full h-12 bg-[var(--primary)] rounded-md font-semibold flex justify-center items-center' 
          type="button"
          onClick={ handleSubmit }
        >
          {loading ? <Loading/> : 'Sign in'}
        </button>
        <p className='text-center'>{`Don't have an account?`} <a className='text-[var(--primary)] no-underline' href="/register">Sign Up.</a></p>
      </form>
    </main>
  );
}
