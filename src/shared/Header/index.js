import React, { useState } from "react";
// import images
import HeaderLogo from "../../assets/images/header/Logo.png";
import Logo from "../../assets/images/contactUs/logo.svg"
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabs, setActivetabs] = useState(0)

  const iconStyle = {
    color: 'white',
    fontSize: '25px',
  };

  return (
    // <div className="mx-0 lg:mx-10">
    //   {/* main */}
    //   <div className="flex justify-between py-2 items-center">
    //     {/* logo-text */}
    //     <div className="flex items-center">
    //       <img src={HeaderLogo} alt="HeaderLogo" />
    //       <p className="text-base text-white font-normal m-0 pl-[9px]">
    //         Lineup
    //         <span className="text-base text-[#41AFFF] font-extrabold">
    //           Wizards
    //         </span>
    //       </p>
    //     </div>
    //     {/* nav-div */}
    //     <div className="flex items-center space-x-6">
    //       <p className="text-[#F4F4F4] text-sm font-medium m-0">
    //         WINNERS CIRCLE
    //       </p>
    //       <p className="text-[#F4F4F4] text-sm font-medium m-0">
    //         our optimizer
    //       </p>
    //       <p className="text-[#F4F4F4] text-sm font-medium m-0">pricing</p>
    //       <p className="text-[#41AFFF] text-sm font-medium m-0 ">SUPPORT</p>
    //     </div>
    //     {/* button-div */}
    //     <div className="flex items-center">
    //       <p className="text-white text-base font-medium m-0 pr-[32px]">Log in</p>
    //       <button className="text-[#15141D] text-base font-medium bg-[#41AFFF] rounded-[38px] border-[#41AFFF] border py-2.5 px-[22px]">
    //         Get Started
    //       </button>
    //     </div>
    //     {/* humberger */}
    //     <MenuOutlined className="text-[#FFF]" />
    //   </div>
    // </div>
    <div className="mx-0 lg:mx-10">
      {/* main */}
      <div className="flex justify-between py-2  lg:items-center pt-4 md:pt-[9px] lg:pt-[9px] ps-8 pe-8  lg:ps-8 lg:pe-2">
        {/* logo-text */}
        <div className="hidden sm:hidden md:block lg:block">
          <div className="flex items-center ">
            <img src={HeaderLogo} alt="HeaderLogo" className="h-[3  5px] w-[150px] cursor-pointer" onClick={() => { navigate("/"); setActivetabs(0) }} />
            {/* <p className="text-[15px] md:text-[11px] lg:text-[11px]  text-white font-[300] m-0 pl-[7px] pt-1">
            Lineup
            <span className="text-[15px] lg:text-[11px] md:text-[11px] text-[#41AFFF] font-extrabold">
              Wizards
            </span>
          </p> */}
          </div>
        </div>

        <div className=" block sm:block md:hidden lg:hidden">
          <img src={Logo} alt="" onClick={() => { navigate("/"); setActivetabs(0) }} />
        </div>
        {/* nav-div */}
        <div className="hidden md:flex items-center space-x-5 pt-1 ps-4 font-inter font-[500] hidden-small ">
          <div onClick={() => setActivetabs(1)} className={`${activeTabs === 1 ? 'active-border' : ''}`}>
            <Link to={"/our-optimizer"} className="text-[#F4F4F4] hover:opacity-[0.8] no-underline text-[14px] font-[300] m-0 hover:border-blue-500 cursor-pointer active:border-blue-500" >
              OUR OPTIMIZER
            </Link>
          </div>
          <div onClick={() => setActivetabs(2)} className={`${activeTabs === 2 ? 'active-border' : ''}`}>
            <Link to={"/winner-wizard"} className="text-[#F4F4F4] hover:opacity-[0.8]  no-underline text-[14px] font-[300] m-0 cursor-pointer hover:border-blue-500 active:border-blue-500" >
              WINNERS CIRCLE
            </Link>
          </div>
          <div onClick={() => setActivetabs(3)} className={`${activeTabs === 3 ? 'active-border' : ''}`}>
            <Link to={"/pricing"} className="text-[#F4F4F4] hover:opacity-[0.8] text-[14px] no-underline font-[300] cursor-pointer m-0 hover:border-blue-500 active:border-blue-500" >PRICING</Link>
          </div>
          <div onClick={() => setActivetabs(4)} className={`${activeTabs === 4 ? 'active-border' : ''}`}>
            <Link to={"/contact-us"} className="text-[#F4F4F4] hover:opacity-[0.8] text-[14px] font-[300] no-underline cursor-pointer m-0 hover:border-blue-500 active:border-blue-500" >SUPPORT</Link>
          </div>
        </div>
        {/* button-div */}
        <div className="hidden md:flex items-center hidden-small">
          <p className="text-white text-[14px] font-[500] m-0 px-[18px] xl:px-[25px] font-inter cursor-pointer">Log in</p>
          <button className="text-[#15141D] text-[14px] font-bold font-inter bg-[#41AFFF] cursor-pointer rounded-[38px] border-[#41AFFF] border pt-[6px] hover:opacity-[0.8] pb-[7px] px-[13px]">
            Get Started
          </button>
        </div>
        {/* hamburger */}
        <div className="sm:block md:hidden lg:hidden show-small">
          {/* <MenuOutlined /> */}
          <div style={iconStyle} onClick={() => setIsOpen(!isOpen)} className={`menu ${isOpen ? 'menu-clicked' : ''}`} >
            <span className={`menu-global menu-top ${isOpen ? 'menu-top-click' : ''}`}></span>
            <span className={`menu-global menu-middle ${isOpen ? 'menu-middle-click' : ''}`}></span>
            <span className={`menu-global menu-bottom ${isOpen ? 'menu-bottom-click' : ''}`}></span>
          </div>
        </div>
        {
          isOpen === true &&
          <div
            style={{ maxHeight: isOpen ? '50%' : '0%' }}
            className={`top-0 right-0 bg-[#41afff] w-[80%]  ms-10 me-10 mt-16 text-center fixed  z-40  section ${isOpen ? 'open' : ''}`}>
            <h3 className="mt-5 text-4xl font-semibold text-white font-epilogue " onClick={() => { navigate("/winner-wizard"); setIsOpen(false) }}>WINNERS CIRCLE</h3>
            <h3 className="mt-5 text-4xl font-semibold text-white font-epilogue " onClick={() => { navigate("/our-optimizer"); setIsOpen(false) }}>OUR OPTIMIZER</h3>
            <h3 className="mt-5 text-4xl font-semibold text-white font-epilogue " onClick={() => { navigate("/pricing"); setIsOpen(false) }}>PRICING</h3>
            <h3 className="mt-5 text-4xl font-semibold text-white font-epilogue " onClick={() => { navigate("/contact-us"); setIsOpen(false) }}>Contact Us</h3>
          </div>
        }

      </div>
    </div>

  );
};

export default Header;