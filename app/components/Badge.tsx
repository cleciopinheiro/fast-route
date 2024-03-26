import { IoClose } from "react-icons/io5";

interface BadgeProps {
    onClick?: () => void;
    open?: boolean;
}

function Badge({ onClick, open }: BadgeProps) {
    return (
        <div className={
            open
            ? 'w-screen h-screen bg-[rgba(0,0,0,0.5)] z-[70] fixed top-0 bottom-0'
            : 'w-screen h-screen bg-[rgba(0,0,0,0)] z-[70] fixed top-0 bottom-[-100%]'
        }>
            <div className={
                open
                ? 'fixed bottom-0 w-full h-[93vh] bg-white ease-in duration-300 flex flex-col'
                : 'fixed bottom-[-100%] w-full h-[93vh] bg-white ease-in duration-500 flex flex-col'
            }>
                <IoClose onClick={ onClick } size={28} className="text-black m-4 absolute" />
            </div>
        </div>
    );
}

export default Badge;