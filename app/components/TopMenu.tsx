import { GiHamburgerMenu } from 'react-icons/gi';
import { RiChat4Line } from 'react-icons/ri';

function TopMenu() {
    return (
        <nav className="bg-[var(--input-color)] h-[8vh] p-4 flex justify-between items-center">
        <GiHamburgerMenu size={24} className="text-white" />
        <div className="flex gap-6">
          <RiChat4Line size={24} className="text-white" />
        </div>
      </nav>
    );
}

export default TopMenu;