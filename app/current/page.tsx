'use client'
import { useState } from "react";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";
import OpenMenu from "../components/OpenMenu";

function page() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <main className="flex flex-col">
            <OpenMenu onClick={ handleMenu } open={openMenu} />
            <Menu onClick={ handleMenu } open={openMenu} text='ITINERARY' />
            <Tabs />
        </main>
    );
}

export default page;