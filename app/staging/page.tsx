'use client';
import { useState } from "react";
import Menu from "../components/Menu";
import STG from "../components/STG";
import OpenMenu from "../components/OpenMenu";

function page() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <menu>
            <OpenMenu onClick={ handleMenu } open={openMenu} />
            <Menu onClick={ handleMenu } />
            <STG />
        </menu>
    );
}

export default page;