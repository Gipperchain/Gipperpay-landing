import React from "react";
import { CiTwitter } from "react-icons/ci";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import heroIllustration from "./assets//hero.png";

const HeroSection = () => {
    return (
        <section className="mt-[calc(100px+2rem)] lg:mt-[calc(140px+2rem)] 2xl:mt-[calc(130px+2rem)] md:flex md:w-full px-[4%] md:px-[40px] lg:px-[100px] lg:gap-[40px] xl:justify-center xl:gap-[60px] 2xl:gap-[80px] h-[calc(100vh-96px)]">
            <div className="w-full  flex flex-col gap-[24px]  max-w-[440px] xl:max-w-[540px] sm:ml-[40px] md:ml-0 xl:gap-[24px] 2xl:gap-[36px]">
                <div>
                    <h2 className="text-[30px] text-left font-semibold lg:text-[36px] xl:text-[48px] 2xl:text-[64px] leading-[120%] ">
                        Blockchains for regular people built for mass adoption
                    </h2>
                    <div className="mt-6 xl:mt-8 2xl:mt-10">
                        <p className="text-[18px] font-medium  text-left  lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[150%]">
                            Secure Layer 2 blockhain solution
                        </p>
                        <p className="text-[16px] leading-[150%] text-left mt-1  lg:text-[18px] xl:text-[24px] 2xl:text-[28px]">
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
                    className="inline-flex max-w-[130px] mb-[16px] items-center btn rounded-[12px] justify-center border-[2px] border-transparent h-[55px] px-2 font-medium tracking-wide text-white transition duration-200   hover:opacity-100 focus:shadow-outline focus:outline-none 2xl:max-w-[150px] 2xl:h-[50px]"
                >
                    Coming Soon
                </button>
                <div className="flex items-center gap-[16px]">
                    <FaTwitterSquare className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px]" />
                    <BsLinkedin className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px]" />
                </div>
            </div>
            <img
                src={heroIllustration}
                alt=""
                className="hidden md:block md:w-[300px] md:h-[200px] lg:w-[450px] lg:h-[350px] xl:w-[550px] xl:h-[400px] 2xl:w-[650px] 2xl:h-[500px]"
            />
        </section>
    );
};

export default HeroSection;
