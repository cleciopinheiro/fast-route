import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Progress } from 'antd';

interface SummarySectionProps {
    id: string;
}

function SummarySection({ id }: SummarySectionProps) {
    return (
        <div id={id} className="w-screen bg-gray-400 flex flex-col text-[#141618] gap-2">
            <div className="flex flex-col gap-4 bg-white py-4">
                <div className="flex justify-between px-4 items-center">
                    <h1 className="text-2xl font-bold">Work remaining</h1>
                    <IoIosInformationCircleOutline size={28} className="text-2xl" />
                </div>
                <div className="flex flex-col px-4">
                    <h1 className="text-2xl font-bold">26 Stops</h1>
                    <p className="text-xl">There is 1 multi-location stop.</p>
                    <Progress strokeColor='#FF893A' percent={95} showInfo={false} />
                </div>
                <div className="flex flex-col px-4">
                    <h1 className="text-2xl font-bold">27 locations</h1>
                    <Progress strokeColor='#FF893A' percent={95} showInfo={false} />
                </div>
                <div className="flex flex-col px-4">
                    <h1 className="text-2xl font-bold">27 packages</h1>
                    <Progress strokeColor='#FF893A' percent={100} showInfo={false} />
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-white py-4">
                <h1 className="text-2xl font-bold px-4">Stops</h1>
                <hr className="w-full border-gray-400" />
                <div className="flex justify-between items-center px-4">
                    <p className="text-xl w-full">To Do</p>
                    <div className="flex gap-1 items-center">
                        26
                        <RiArrowDropRightLine size={24} className="text-2xl" />
                    </div>
                </div>
                <hr className="w-full border-gray-400" />
                <div className="flex justify-between items-center px-4">
                    <p className="text-xl w-full">Successfull</p>
                    <div className="flex gap-1 items-center">
                        1
                        <RiArrowDropRightLine size={24} className="text-2xl" />
                    </div>
                </div>
                <hr className="w-full border-gray-400" />
                <div className="flex justify-between items-center px-4">
                    <p className="text-xl w-full">Problems</p>
                    <div className="flex gap-1 items-center">
                        0
                        <RiArrowDropRightLine size={24} className="text-2xl text-white" />
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col gap-4 bg-white py-4">
                <h1 className="text-2xl font-bold px-4">Packages and Equipment</h1>
                <hr className="w-full border-gray-400" />
                <div className="flex justify-between items-center px-4">
                    <p className="text-xl w-full">To delivery or drop off</p>
                    <div className="flex gap-1 items-center">
                        27
                        <RiArrowDropRightLine size={24} className="text-2xl text-white" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SummarySection;