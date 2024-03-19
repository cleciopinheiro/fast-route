import { GiHamburgerMenu } from 'react-icons/gi';
import { RiChat4Line } from 'react-icons/ri';
import { IoMdHelpCircleOutline } from 'react-icons/io';

interface MenuProps {
  text?: string;
}

function Menu({ text }: MenuProps) {
  return (
    <nav className="bg-black h-[10vh] p-4 flex justify-between items-center">
      <GiHamburgerMenu className="text-white text-3xl" />
      <h1 className="text-white text-xl">{text}</h1>
      <div className="flex gap-6">
        <RiChat4Line className="text-white text-3xl" />
        <IoMdHelpCircleOutline className="text-white text-3xl" />
      </div>
    </nav>
  );
}

export default Menu;
