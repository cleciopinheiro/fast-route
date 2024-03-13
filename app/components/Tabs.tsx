'use client';
import { useState } from "react";
import ListSection from "./ListSection";
import MapSection from "./MapSection";
import SummarySection from "./SummarySection";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section>
      <div className="flex justify-evenly text-sm h-[5vh]">
          <a 
            className={"w-full text-center py-1 items-center" + (openTab === 1 && " active")}
            data-toggle="tab" 
            role="tablist" 
            href="#list" 
            onClick={(e) => { e.preventDefault(); setOpenTab(1); }}>LIST</a>
        
          <a 
            className={"w-full text-center py-1 items-center" + (openTab === 2 && " active")}
            data-toggle="tab" 
            role="tablist" 
            href="#map" 
            onClick={(e) => { e.preventDefault(); setOpenTab(2); }}>MAP</a>
        
          <a 
            className={"w-full text-center py-1 items-center" + (openTab === 3 && " active")}
            data-toggle="tab" 
            role="tablist" 
            href="#summary" 
            onClick={(e) => { e.preventDefault(); setOpenTab(3); }}>SUMMARY</a>
      </div>
      <div>
        { openTab === 1 && <ListSection id="list" /> }
        { openTab === 2 && <MapSection id="map" /> }
        { openTab === 3 && <SummarySection id="summary" /> }
      </div>

    </section>
  );
};

export default Tabs;