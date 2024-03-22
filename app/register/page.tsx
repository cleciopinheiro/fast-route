'use client';
import { useState } from 'react';
import Image from 'next/image';
import { UploadButton } from "../utils/uploadthings";

interface Data {
  name: string;
  email: string;
  password: string;
  image: string;
}

function Page() {
  const [data, setData] = useState<Data>({
    name: '',
    email: '',
    password: '',
    image: ''
  });
  
  return (
    <main className='bg-[var(--secondary)] w-screen h-screen flex items-center justify-center p-12'>
      <form className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-10 mb-6'>
        <label className='flex flex-col'>
            <input 
              className='h-10 bg-[var(--thirth)] px-4 rounded-md outline-none' 
              type="email" 
              placeholder="Full Name"
            />
          </label>
          <label className='flex flex-col'>
            <input 
              className='h-10 bg-[var(--thirth)] px-4 rounded-md outline-none' 
              type="email" 
              placeholder="Email"
            />
          </label>
          <label className='flex flex-col'>
            <input
              className='h-10 bg-[var(--thirth)] px-4 rounded-md outline-none'
              type="password" 
              placeholder="Password"
            />
          </label>
          <div className="flex justify-between items-center">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setData({ ...data, image: res[0].url });
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            {data.image ? <Image src={data.image} width={80} height={80} alt='Image' className='rounded-full'/> : <div className='flex justify-center items-center text-[var(--thirth)] w-20 h-20 border-2 border-[var(--thirth)] border-dashed rounded-full'>Preview</div>}
          </div>
        </div>
        <button 
          className='w-full h-10 bg-[var(--primary)] rounded-md font-semibold' 
          type="button"
        >
          Register
        </button>
        <p className='text-center'>Already have an account? <a className='text-[var(--primary)] no-underline' href="/">Log in now.</a></p>
      </form>
    </main>
  );
}

export default Page;
