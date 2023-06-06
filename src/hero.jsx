import React from "react";
import { CiTwitter } from "react-icons/ci";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="w-full px-[4%] flex flex-col gap-[24px] mt-[calc(100px+2rem)] max-w-[420px]">
            <div>
                <h2 className="text-3xl text-left font-semibold">
                    Blockchains for regular people built for mass adoption
                </h2>
                <div className="mt-6">
                    <p className="text-lg font-medium  text-left ">Secure Layer 2 blockhain solution</p>
                    <p className="text-base leading-[30px] text-left mt-4">
                        Building the infrastructure for decentralized applications, products and smart contracts for
                        developers and users
                    </p>
                </div>
            </div>

            {/* <button className="inline-block w-[130px]  h-[55px] mb-[16px] py-4  bg-[#FF007A] text-white bg-opacity-90 px-2 hover:bg-opacity-100 rounded-[12px]">
                Coming Soon
            </button> */}

            <button
                href="#_"
                className="inline-flex max-w-[130px] mb-[16px] items-center btn rounded-[12px] justify-center border-[2px] border-transparent h-[55px] px-2 font-medium tracking-wide text-white transition duration-200   hover:opacity-100 focus:shadow-outline focus:outline-none"
            >
                Coming Soon
            </button>
            <div className="flex items-center gap-[16px]">
                <FaTwitterSquare className="w-[24px] h-[24px]" />
                <BsLinkedin className="w-[24px] h-[24px]" />
            </div>
        </section>
    );
};

export default HeroSection;
