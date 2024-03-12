'use client';
import { useState } from 'react';
import submenu from '../constants/SubMenu';
import SearchBar from './SearchBar';

function SubMenu() {

    const handleSubmenuChangeStyle = (index: number) => {
        const submenuItems = document.querySelectorAll('.inactive');
        submenuItems.forEach((item) => {
            item.classList.remove('active');
            item.classList.add('inactive');
        });
        submenuItems[index].classList.add('active');
    };
    
    return (
        <div>
            <div className="flex justify-between h-[7vh] py-2">
                {submenu.map((item, index) => (
                    <div id={item.id} onClick={() => handleSubmenuChangeStyle(index)} key={index} className='inactive'>
                        {item.title}
                    </div>
                ))}
            </div>
            <SearchBar />
        </div>
    );
}

export default SubMenu;