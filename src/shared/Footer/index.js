import HeaderLogo from "../../assets/images/footer/footerLogo.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    const iconStyle = {
        color: 'white',
        fontSize: '16px',
    };
    return (
        <>
            <div className="flex justify-center items-center mt-12 lg:mt-16 pt-0 lg:pt-16 ">
                <div className=" w-[390px] border-t border-gradient-top mt-0 lg:mt-5" >  </div>
            </div>
            <div className="w-100 bg-[#151618]   border-transparent py-[68px] flex justify-center border-gradient  inset-0 border-2" >
                <div className="container mx-auto w-3/4 ps-[0px] lg:ps-[76px]">
                    <div className="flex items-center">
                        <img src={HeaderLogo} alt="HeaderLogo" className="h-[36px] w-[150px]" />


                    </div>
                    <div>
                        <p className="text-[14px] lg:text-[15px] font-inter text-[400] text-white font-normal leading-6 pb-2">Experience the new era of <br />
                            fantasy sports.</p>
                    </div>
                    <div>
                        <button ghost className="rounded-full w-[100%] font-inter lg:w-[24%] md:w-[27.5%] sm:w-[35.5%] border text-[16px] sm:text-[12px] lg:text-[15px] font-[500] md:text-[12px] px-4 lg:px-0 md:px-2 sm:px-0 border-slate-50 bg-transparent text-white py-[10px] cursor-pointer"> Unlimited trial for 5 days</button>

                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center ">
                <div className=" w-[900px] border-b border-gradient-top" >  </div>
            </div>
            <div className="flex justify-center py-16">
                <div className="flex justify-between ps-[0px]  w-3/4 md:ps-[76px] lg:ps-[76px] ">
                    <p className="text-[#D2D0DD] text-[10px] lg:text-[13px] font-inter font-[400]">©2023 LineupWizards</p>
                    <div className="flex space-x-3 pe-4 pt-2 lg:pt-5 lg:pe-16 lg:me-15">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <FaLinkedin className="icon-style" />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <FaFacebook className="icon-style" />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <FaInstagram className="icon-style" />
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-container"
                        >
                            <FaTwitter className="icon-style" />
                        </a>
                    </div>
                </div>
            </div>

        </>




    )
}
export default Footer;