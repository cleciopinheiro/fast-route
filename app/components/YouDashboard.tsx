import { Progress, Slider } from 'antd';
import { RiRecordCircleFill } from 'react-icons/ri';

function YouDashboard() {
  return (
    <div className="w-screen bg-gray-200 flex flex-col text-[#141618] gap-3">
      <div className="mt-[8vh] flex w-full flex-col bg-gradient-to-t from-white via-white to-blue-100 text-black gap-4">
        <div className="flex flex-col gap-6 p-4">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <h2 className="text-xl font-bold">Standings</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold">Great</h1>
          <div className="w-[90vw] gap-2 flex flex-row">
            <div className="w-[20vw]">
              <Progress strokeColor="#0580f2" percent={100} showInfo={false} />
            </div>
            <div className="w-[20vw]">
              <Progress strokeColor="#0580f2" percent={100} showInfo={false} />
            </div>
            <div className="w-[50vw] flex items-center relative">
              <Progress strokeColor="#0580f2" trailColor="#cccccc" percent={80} showInfo={false} />
              <Slider defaultValue={0} className="absolute left-[80%]" />
            </div>
            <div className="w-[10vw]">
              <Progress trailColor="#cccccc" percent={0} showInfo={false} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <p>
            <span className="text-lg font-semibold">How can I improve to Fantastic?</span>
            <br />
            {`Focus on the areas listed below in you next deliveries. They're listed in order of importance and show where you've had issues in the past`}
          </p>
        </div>
        <div className="shadow-md rounded-sm w-[60vw] mx-8 p-2 h-16 border flex justify-center mb-4 gap-4">
          {/* imagem no lugar dessa div */}
          <div className="w-[48px] h-[48px] border rounded-full bg-slate-300" />
          {/*  */}
          <div>
            <h1>Delivery completion</h1>
            <p>Delivery quality</p>
          </div>
        </div>
        <button
          type="button"
          className="p-3 rounded-md border border-[#FF893A] w-80 self-center mb-4 text-[#FF893A] text-xl"
        >
          Standing details
        </button>
      </div>
      <div className="bg-white p-2">
        <h1 className="text-3xl font-bold mt-4">Challenges</h1>
      </div>
    </div>
  );
}

export default YouDashboard;
