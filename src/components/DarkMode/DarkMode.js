import React, { useEffect } from 'react';
import { ReactComponent as Moon } from './Moon.svg';
import { ReactComponent as Dark } from './Dark.svg';
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    useEffect(() => {
        // Varsayılan tema 'light' olarak ayarlanıyor
        setLightMode();
    }, []);

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode_toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode_toggle'>
                <Moon />
                <Dark />
            </label>
        </div>
    );
};

export default DarkMode;
