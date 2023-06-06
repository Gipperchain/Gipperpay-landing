import React, { useEffect } from "react";
import logo from "./assets/IMG-20230606-WA0107.jpg";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
    useEffect(() => {
        const OnScroll = () => {
            let headerDOM = document.querySelector("header");

            if (window.scrollY > headerDOM.getBoundingClientRect().height) {
                headerDOM.style.boxShadow = "0px 4px 5px -3px rgba(0,0,0,0.1)";

                // if (location.pathname === "/") headerDOM.style.boxShadow = "0px 4px 5px -3px rgba(0,0,0,0.4)";
            } else {
                headerDOM.style.boxShadow = "";
            }
        };
        window.addEventListener("scroll", OnScroll);

        return () => {
            window.removeEventListener("scroll", OnScroll);
        };
    }, []);

    return (
        <>
            <div className=" header px-[4%]  w-full  sm:px-[40px] lg:px-[100px] header md:z-[100] md:top-0  z-[100] top-0  fixed">
                <header className="flex justify-between w-full pt-[40px] pb-[20px] backdrop-blur-[4px]   items-center">
                    <img src={logo} alt="" className="w-[36px] h-[36px]" />
                    <RiMenu3Fill className="w-8 h-8  fill-[#FF007A]" />
                </header>
            </div>
        </>
    );
};

export default Header;