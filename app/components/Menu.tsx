import { GiHamburgerMenu } from "react-icons/gi";
import { RiChat4Line } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";

function Menu() {
    return (
        <nav className="bg-black h-[10vh] p-4 flex justify-between items-center">
            <GiHamburgerMenu className="text-white text-3xl" />
            <div className="flex gap-6">
                <RiChat4Line className="text-white text-3xl" />
                <IoMdHelpCircleOutline className="text-white text-3xl" />
            </div>
        </nav>
    );
}

export default Menu;