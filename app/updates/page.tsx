'use client';
import { useState } from "react";
import FooterMenu from "../components/FooterMenu";
import Updates from "../components/Notifications";
import TopMenu from "../components/TopMenu";
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
        <main className="w-screen bg-gray-300">
            {
                openBadge && <Badge onClick={ handleBadge } open={openBadge} />
            }
            <OpenMenu onClick={ handleMenu } open={openMenu} />
            <TopMenu onClick={ handleMenu } />
            <Updates />
            <FooterMenu />
        </main>
    );
}

export default page;