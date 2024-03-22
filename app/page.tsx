'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [state, setState] = useState({
    email: "",
    password: "",
    style1: "",
    style2: "",
    errorEmail: "",
    errorPassword: "",
  });

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if ( state.email === "" || !validateEmail(state.email) ) {
      setState({ ...state, style1: "border-2 border-[var(--danger)]", errorEmail: "Invalid email" });
    }

    if ( state.password === "" || state.password.length < 6) {
      setState({ ...state, style2: "border-2 border-[var(--danger)]", errorPassword: "Invalid password" });
    }
  };

  return (
    <main className='bg-[var(--secondary)] w-screen h-screen flex items-center justify-center p-12'>
      <form className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-10 mb-6'>
          <label className='flex flex-col'>
            <input 
              className={`h-10 bg-[var(--thirth)] px-4 rounded-md outline-none ${state.style1}`} 
              name='email' 
              value={state.email} 
              type="email" 
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            { state.errorEmail && <p className='text-[var(--danger)] text-[12px]'>{state.errorEmail}</p> }
          </label>
          <label className='flex flex-col'>
            <input
              className={`h-10 bg-[var(--thirth)] px-4 rounded-md outline-none ${state.style2}`}
              name='password' 
              value={state.password} 
              type="password" 
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            { state.errorPassword && <p className='text-[var(--danger)] text-[12px]'>{state.errorPassword}</p> }
          </label>
        </div>
        <button 
          className='w-full h-10 bg-[var(--primary)] rounded-md font-semibold' 
          type="button"
          onClick={ handleSubmit }
        >
          Login
        </button>
        <p className='text-center'>{`Don't have an account?`} <a className='text-[var(--primary)] no-underline' href="/register">Register.</a></p>
      </form>
    </main>
  );
}
