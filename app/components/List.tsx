import Location from "../icons/Location";

function List() {
    const hourAndMinutes = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
    return (
        <div className="w-full h-[100px] bg-gray-100 relative flex">
            <div className="relative ml-2 py-4">
                <span className="z-[100] absolute order-2 left-[0.6rem] top-[1.2rem] text-[12px]">1</span>
                <Location w={26} h={26} fill="#464747" />
                <div className="absolute left-3 top-0 border-l-2 border-[#464747] h-full"></div>
            </div>
            <div className="relative text-[#464747] w-full font-semibold ml-4 flex flex-col justify-center">
                <p>Picked up at <span>{hourAndMinutes}</span></p>
                <p>6885 Commercial Dr.</p>
                <p>SPRINGFIELD</p>
                <hr className="absolute bottom-0 border border-[#464747] w-full" />
            </div>
        </div>
    );
}

export default List;