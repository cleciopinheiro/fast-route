'use client';
import { useState } from "react";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";
import OpenMenu from "../components/OpenMenu";
import Badge from "../components/Badge";

function page() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openBadge, setOpenBadge] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleBadge = () => {
        setOpenBadge(!openBadge);
    }

    return (
        <main className="flex flex-col">
            <Badge onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <Menu onClick={ handleMenu } open={openMenu} text='ITINERARY' />
            <Tabs />
        </main>
    );
}

export default page;