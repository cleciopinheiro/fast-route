'use client';
import Image from "next/image";
import Amazon from "../icons/Amazon";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

interface BadgeProps {
    onBadge?: () => void;
    open?: boolean;
}

function Badge({ onBadge, open }: BadgeProps) {
    const date = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    const mounth = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric'});
    const year = new Date().getFullYear();

    const route = useRouter();

    const handleClick = () => {
        if (onBadge) {
            onBadge();
        }
        route.push('/current');
    }

    return (
        <div className={
            open
            ? 'w-screen h-screen bg-[rgba(0,0,0,0.5)] z-[75] fixed left-0 bottom-0'
            : 'w-screen h-screen bg-[rgba(0,0,0,0)] z-[75] fixed left-0 bottom-[-100%]'
        }>
            <div className={
                open
                ? 'fixed bottom-0 left-0 w-full h-[93vh] bg-white ease-in duration-300 flex flex-col rounded-t-xl bg-cover bg-no-repeat bg-center'
                : 'fixed bottom-[-150%] left-0 w-full h-[93vh] bg-white ease-in duration-300 flex flex-col bg-cover bg-no-repeat bg-center'
            } style={{backgroundImage: `url('/fundo.webp')`}}>
                <div className="relative flex w-full bg-[var(--fourth)] rounded-t-xl justify-center items-center px-4" onClick={ onBadge }>
                    <Amazon w={80} h={50} fill="#ffffff" />
                    <IoIosArrowDown size={32} className="absolute right-4" />
                </div>
                <div className="flex flex-col items-center mt-4 gap-2">
                    <Image src="/foto.png" width={300} height={300} alt="badge" className="rounded-full border-4 border-gray-300" />
                    <h1 className="text-3xl mt-4 text-black">John Doe</h1>
                    <p className="bg-[var(--fourth)] text-xl">ON DUTY</p>
                    <p className="text-black">{mounth} {year}, {date}</p>
                </div>
                <div onClick={ handleClick } className="flex bg-white border-2 border-gray-300 justify-between items-center w-full mt-4 px-4 p-4">
                    <h1 className="uppercase text-black">Today's Itinerary</h1>
                    <IoIosArrowForward size={20} className="text-black" />
                </div>
            </div>
        </div>
    );
}

export default Badge;