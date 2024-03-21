'use client';
import city from '../constants/City';
import letter from '../constants/Letter';
import packageNumber from '../constants/PackageNumber';
import PackageQuantity from '../constants/PackageQuantity';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useProvider from '../provider/Provider';

function Page() {
  const [formData, setFormData] = useState({
    letter: '',
    city: '',
    packageNumber: '',
    packageQuantity: '',
  });
  const [concatenatedValues, setConcatenatedValues] = useState('');
  const { setData } = useProvider();
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { letter, city, packageNumber } = formData;
    setConcatenatedValues(letter + ' ' + city.split(' ')[0] + ' ' + packageNumber);
  }, [formData]);
  
  const handleSubmit = () => {
    setData(formData);
    router.push('/current');
  };

  return (
    <div className="bg-[var(--secondary)] flex w-screen h-screen justify-center items-center px-10">
      <form className="flex flex-col gap-6 w-full text-[16px]">
        <select
          name="letter"
          id="letter"
          className="bg-[var(--input-color)] h-10 rounded-md px-2 "
          value={formData.letter}
          onChange={(e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select Letter
          </option>
          {letter.map((item, index) => (
            <option className='text-[12px]' value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="city"
          id="city"
          className="bg-[var(--input-color)] h-10 rounded-md px-2"
          value={formData.city}
          onChange={ (e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select City
          </option>
          {city.map((item) => (
            <option className='text-[12px]' value={item.name + ' ' + item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          name="packageNumber"
          id="packageNumber"
          className="bg-[var(--input-color)] h-10 rounded-md px-2"
          value={formData.packageNumber}
          onChange={ (e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select Package Number
          </option>
          {packageNumber.map((item, index) => (
            <option className='text-[12px]' value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="packageQuantity"
          id="packageQuantity"
          className="bg-[var(--input-color)] h-10 rounded-md px-2"
          value={formData.packageQuantity}
          onChange={ (e) => handleChange(e) }
        >
          <option className='text-[12px]' value="" disabled hidden>
            Select Package Quantity
          </option>
          {PackageQuantity.map((item, index) => (
            <option className='text-[12px]' value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <div className='flex border-2 border-dashed border-gray-500 h-10 rounded-md px-2 justify-center items-center'>
          <p className='uppercase'>{concatenatedValues}</p>
        </div>

        <button type="button" className="text-[var(--secondary)] bg-[var(--primary)] font-bold p-2 rounded-lg" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page;
