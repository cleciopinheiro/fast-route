'use client';
import city from '../constants/City';
import letter from '../constants/Letter';
import packageNumber from '../constants/PackageNumber';
import PackageQuantity from '../constants/PackageQuantity';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPackageNumber, setSelectedPackageNumber] = useState('');
  const [selectedPackageQuantity, setSelectedPackageQuantity] = useState('');
  const [concatenatedValues, setConcatenatedValues] = useState('');
  const router = useRouter();

  useEffect(() => {
    setConcatenatedValues(selectedLetter + ' ' + selectedCity + ' ' + selectedPackageNumber + ' ');
  }, [selectedLetter, selectedCity, selectedPackageNumber]);
  
  const handleSubmit = () => {
    router.push('/current');
  };

  return (
    <div className="flex justify-center my-10">
      <form className="flex flex-col items-center justify-evenly p-12 w-[80vw] gap-14 bg-slate-600 rounded-lg">
        <select
          name="letter"
          id="letter"
          className="bg-black"
          value={selectedLetter}
          onChange={(e) => setSelectedLetter(e.target.value)}
        >
          <option value="" disabled hidden>
            Select Letter
          </option>
          {letter.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="city"
          id="city"
          className="bg-black"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" disabled hidden>
            Select City
          </option>
          {city.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          name="packageNumber"
          id="packageNumber"
          className="bg-black"
          value={selectedPackageNumber}
          onChange={(e) => setSelectedPackageNumber(e.target.value)}
        >
          <option value="" disabled hidden>
            Select Package Number
          </option>
          {packageNumber.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="packageQuantity"
          id="packageQuantity"
          className="bg-black"
          value={selectedPackageQuantity}
          onChange={(e) => setSelectedPackageQuantity(e.target.value)}
        >
          <option value="" disabled hidden>
            Select Package Quantity
          </option>
          {PackageQuantity.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <button type="button" className="text-white bg-green-500 p-2 rounded-lg" onClick={() => handleSubmit()}>
          Submit
        </button>
        <input
          type="text"
          className="bg-black border border-white rounded-md"
          readOnly
          value={concatenatedValues}
        />
      </form>
    </div>
  );
}

export default Page;
