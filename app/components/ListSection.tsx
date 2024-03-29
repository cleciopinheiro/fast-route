'use client';
import Location from "../icons/Location";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import useProvider from "../provider/Provider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStorage } from "../utils/LocalStorage";

interface ListSectionProps {
    id: string;
}

interface Data {
    letter: string;
    city: string;
    packageNumber: string;
    packageQuantity: string;
}

function ListSection({ id }: ListSectionProps) {
    const hourAndMinutes = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    const router = useRouter();
    const [database, setDatabase] = useState<Data>({
        letter: '',
        city: '',
        packageNumber: '',
        packageQuantity: '',
    });

    const calculateScheduled = () => {
        const hour = new Date().getHours();

        switch (true) {
            case hour >= 0 && hour < 4:
                return '08:00 Today';
            case hour > 4 && hour < 7:
                return '11:00 Today';
            case hour > 7 && hour < 11:
                return '15:00 Today';
            case hour > 11 && hour < 13:
                return '18:00 Today';
            case hour > 13 && hour < 19:    
                return '22:00 Today';
            default:
                return '00:00 Tomorrow';
        }
    };

    useEffect(() => {
        const data = getStorage('routeData');
        if (!data) {
            router.push('/route');
        }
        setDatabase(data);
    }, []);
    

    const vencimento = calculateScheduled();

    function generateRandomNumber() {
        return Math.floor(1000 + Math.random() * 9000);
      }

    const arrayAddress = (address: string) => {
        const quantity = Number(database.packageQuantity);
        const array = [];
        for (let i = 0; i < quantity; i++) {
            array.push({
                id: i + 2,
                address: `${generateRandomNumber()} HEMING AVE`,
            });
        }
        return array;
    };
    
    return (
        <div id={id} className="flex flex-col w-full">
            <div className="w-full h-[100px] bg-gray-200 relative flex text-sm">
                <div className="relative ml-2 py-4">
                    <span className="z-30 absolute left-[0.6rem] top-[1.2rem] text-[12px]">1</span>
                    <FaCheckCircle size={10} className="absolute left-[1.2rem] text-[#07AB51]" />
                    <Location w={26} h={26} fill="#9ca3af" />
                    <div className="absolute left-3 top-0 border-l-2 border-[#9ca3af] h-full"></div>
                </div>
                <div className="relative text-gray-400 w-full font-semibold ml-4 flex flex-col justify-center">
                    <p>Picked up at <span>{hourAndMinutes}</span></p>
                    <p>6885 Commercial Dr.</p>
                    <p className="uppercase">{ Number(database.city.split(' ')[1]) <= 39 ? 'SPRINGFIELD' : 'ELKRIGDE' }</p>
                    <hr className="absolute bottom-0 border border-[#9ca3af] w-full" />
                </div>
            </div>
            {
                arrayAddress(database.city).map((item, index) => (
                    <div key={index} className="z-[-70] w-full h-[100px] bg-white relative flex text-sm">
                        <div className="relative ml-2 py-4">
                            <span className={ item.id > 9 ? "z-[100] absolute order-2 left-[0.4rem] top-[1.15rem] text-[12px]" : "z-[100] absolute order-2 left-[0.6rem] top-[1.15rem] text-[12px]"}>{item.id}</span>
                            <Location w={26} h={26} fill={ index === 0 ? "#07AB51" : "#464747" } />
                            <div className="absolute z-[-50] left-3 top-0 border-l-2 border-[#9ca3af] h-full"></div>
                        </div>
                        <div className="relative text-[#464747] w-full font-semibold ml-4 flex flex-col justify-center">
                            <div className="flex items-center gap-1">
                                <AiFillClockCircle className="text-[#42aaff]" />
                                <span className="ml-1"># {database.letter}.{database.packageNumber}.OV • Scheduled 0:01 - {vencimento}</span>
                            </div>
                            <p>{item.address}</p>
                            <p className="uppercase">{database.city.split(' ')[0]}</p>
                            <hr className="absolute bottom-0 border border-[#9ca3af] w-full" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ListSection;