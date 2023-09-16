import React from 'react'
import { Switch } from 'antd';
import { useState } from 'react';
import Thick_icon from "../../assets/images/contactUs/Thick_icon.png"

const Pricing = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleChange = () => {
        setIsToggled((prevState) => !prevState);
    };
    return (


        <div className=' mx-auto'>
            <div className='flex justify-center items-center pt-11 md:pt-16 lg:pt-16 '>
                <p className='pt-5 md:pt-6 lg:pt-6 font-head font-[700] text-white flex items-center font-extrabold justify-center  text-center mb-0 text-[40px] lg:text-[66px]  font-epilogue'>
                    The Best Investment You
                    <br /> Will Ever Make
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <p className='flex para-lg items-center justify-center text-[14px] font-inter lg:text-[18px] font-[400] text-space pb-0 md:pb-8 lg-pb-16 pt-4 lg:pt-2  text-center leading-6 text-[#D2D0DD] px-3 lg:px-0 '>hether you're a casual DFS enthusiast or a seasoned professional, our single plan offers
                    comprehensive access to <br /> all the features and benefits of our optimizer.</p>
                <p className='flex para-sm items-center justify-center text-[14px] font-inter lg:text-[18px] font-[400] text-space pb-0 md:pb-8 lg-pb-16 pt-4 lg:pt-2  text-center leading-6 text-[#D2D0DD] px-3 lg:px-0 '>hether you're a casual DFS enthusiast or a seasoned professional, our single plan offers
                    comprehensive access to all the features and benefits of our optimizer.</p>
            </div>
            <div>
                <div className='flex justify-center items-center mt-1 mb-7 lg:mb-11'>
                    <div className='ps-1 pe-1'>
                        <p className=' text-[14px] lg:text-[18px] text-[#D2D0DD] font-inter font-[400] text-space leading-6 text-gray-500'>Monthly</p>
                    </div>
                    <div className='ps-1 pe-1'>
                        <Switch className='bg-[#545454] px-3' checked={isToggled}
                            onChange={handleToggleChange} />
                    </div>
                    <div className='ps-1 pe-1'>
                        <p className=' text-[14px] lg:text-[18px] text-[#D2D0DD] font-inter font-[400] text-space leading-6 text-gray-500'>Yearly</p>
                    </div>
                </div>
            </div>

            {isToggled ? (<div>
                <div className='flex justify-center pt-4 pb-4 px-8 '>
                    {/* <img src={Card_pricing} alt="Card_pricing" width={450} /> */}
                    <div className="relative rounded-2xl bg-gray w-[570px]  overflow-hidden px-4 pt-6 pb-9 lg:pb-11">
                        <div className="absolute top-[250px] left-[214px] rounded-[50%] bg-dodgerblue [filter:blur(561px)] w-[451px] h-[480px]" />
                        <div className='flex justify-center pt-6'>
                            <p className='text-[#fff] text-[28px] lg:text-[30px] font-[700] lg:font-[800] m-0 font-inter'>Standard</p>
                        </div>
                        <div className='flex justify-center pt-3 text-[18px]'>
                        <s className='text-white text-center font-inter font-[500] text-[16px]'>$ 300</s>
                        <span className='text-[#1677ff] ps-5 text-[16px] font-inter font-[500]'>Save 20%</span>
                        </div>
                        <div className='flex pt-6 justify-center text-gray-500 text-[38px] font-bold'>
                            <p className='m-0 font-epilogue price font-[700] text-[58px]'><span className='font-epilogue font-[700] text-[50px] lg:text-[48px] '>$</span>
                            240</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='m-0 text-[#D2D0DD] text-[13px] font-inter font-[400] pt-2'>Per User Per yearly</p>
                        </div>
                        <div className='flex justify-center pt-4 lg:pt-6 pb-1'>
                            <p className='text-center para-lg text-[14px] lg:text-[15px] text-gray-500 font-inter leading-7 font-[300]'>
                                Unlock the full power of our DFS optimizer,<br /> including all the advanced features,
                                customizable<br /> functions, and cutting-edge algorithms.
                            </p>
                            <p className='text-center para-sm text-[14px] lg:text-[15px] text-gray-500 font-inter leading-7 font-[300]'>
                                Unlock the full power of our DFS optimizer, including all the advanced features,
                                customizable functions, and cutting-edge algorithms.
                            </p>
                        </div>
                        <div className='flex justify-center para-lg'>

                            <div className='flex justify-center items-center mb-2'>
                                <div className='ps-0 pe-2 pt-2 lg:pt-3 '>
                                    <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px]  ' />
                                </div>
                                <p className=' ps-2 text-[14px] lg:text-[15px] mb-0 text-[#FFF] leading-6 lg:leading-7 font-inter font-[400]'>Advanced algorithms and customizable <br /> features</p>
                            </div>
                            <div className='flex justify-center items-center mb-2'>
                                <div className='ps-2 pe-1 pt-2 lg:pt-3'>
                                    <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                </div>
                                <p className=' ps-2 text-[14px]  lg:text-[15px] mb-0 text-[#FFF] font-inter leading-6 lg:leading-7 font-[400]'>Unlimited lineup optimizations for various <br /> game  formats</p>
                            </div>
                            <div className='flex justify-center items-center mb-3 ms-0 sm:ms-4 md:ms-5 lg:ms-5'>
                                <div className='ps-2 pe-2 pt-2 lg:pt-3'>
                                    <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                </div>
                                <p className=' ps-2 text-[14px]  pt-0 md:pt-2 lg:pt-2 lg:text-[15px] text-[#FFF] font-inter leading-6 lg:leading-7  font-[400]'>Real-time updates and live data  integration</p>
                            </div>

                        </div>
                        <div className='flex justify-center para-sm'>
                            <div >
                                <div className='flex justify-start items-center mb-2'>
                                    <div className='ps-2 pe-2 pt-2 lg:pt-3 '>
                                        <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px]  ' />
                                    </div>
                                    <p className=' ps-2 text-[14px] lg:text-[16px] mb-0 text-[#FFF] leading-6 lg:leading-7 font-inter font-[400]'>Advanced algorithms and customizable features</p>
                                </div>
                                <div className='flex justify-start items-center mb-2'>
                                    <div className='ps-2 pe-1 pt-2 lg:pt-3'>
                                        <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                    </div>
                                    <p className=' ps-2 text-[14px]  lg:text-[16px] mb-0 text-[#FFF] font-inter leading-6 lg:leading-7 font-[400]'>Unlimited lineup optimizations for various game  formats</p>
                                </div>
                                <div className='flex justify-start items-center mb-3 ms-0 sm:ms-4 md:ms-4 lg:ms-4'>
                                    <div className='ps-2 pe-2 pt-2 lg:pt-3'>
                                        <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                    </div>
                                    <p className=' ps-2 text-[14px]  lg:text-[16px] text-[#FFF] font-inter leading-6 lg:leading-7   font-[400]'>Real-time updates and live data integration</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex justify-center pt-3 hover:opacity-[0.8]   ps-0 sm:ps-8 md:ps-7 lg:ps-7">
                                <button className="text-[#15141D]  w-[95%]  sm:w-[65%]  md:w-[56%] lg:w-[62%]  cursor-pointer hover:opacity-[0.8] font-inter font-[500]  text-[14px] lg:text-[15px] bg-[#41AFFF] rounded-[50px] border-[#41AFFF] border pt-3 pb-3 mt-1 ">
                                    Start your 5-day FREE trial
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='pt-2 ps-2 text-[10px] lg:text-[14px] text-gray-500 font-inter font-[400]'>No credit card required · 5-days free trial</p>
                        </div>
                    </div>
                    {/* <Card className='card_pricing border-gradient ' bordered={false} style={{ width: 450 }}>


                </Card> */}
                </div>
            </div>) : (<div>
                <div className='flex justify-center pt-4 pb-4 px-8 '>
                    {/* <img src={Card_pricing} alt="Card_pricing" width={450} /> */}
                    <div className="relative rounded-2xl bg-gray w-[570px]  overflow-hidden px-4 pt-6 pb-9 lg:pb-11">
                        <div className="absolute top-[250px] left-[214px] rounded-[50%] bg-dodgerblue [filter:blur(561px)] w-[451px] h-[480px]" />
                        <div className='flex justify-center pt-6'>
                            <p className='text-[#fff] text-[28px] lg:text-[30px] font-[700] lg:font-[800] m-0 font-inter'>Standard</p>
                        </div>
                        <div className='flex pt-8  justify-center text-gray-500 text-[38px] font-bold'>

                            <p className='m-0 font-epilogue price font-[700] text-[58px]'><span className='font-epilogue font-[700] text-[50px] lg:text-[48px] '>$</span>
                                25</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='m-0 text-[#D2D0DD] text-[13px] font-inter font-[400] pt-2'>Per User Per month</p>
                        </div>
                        <div className='flex justify-center pt-4 lg:pt-6 pb-1'>
                            <p className='text-center para-lg text-[14px] lg:text-[15px] text-gray-500 font-inter leading-7 font-[300]'>
                                Unlock the full power of our DFS optimizer,<br /> including all the advanced features,
                                customizable<br /> functions, and cutting-edge algorithms.
                            </p>
                            <p className='text-center para-sm text-[14px] lg:text-[15px] text-gray-500 font-inter leading-7 font-[300]'>
                                Unlock the full power of our DFS optimizer, including all the advanced features,
                                customizable functions, and cutting-edge algorithms.
                            </p>
                        </div>
                        <div className='flex justify-center para-lg'>

                            <div className='flex justify-center items-center mb-2'>
                                <div className='ps-0 pe-2 pt-2 lg:pt-3 '>
                                    <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px]  ' />
                                </div>
                                <p className=' ps-2 text-[14px] lg:text-[15px] mb-0 text-[#FFF] leading-6 lg:leading-7 font-inter font-[400]'>Advanced algorithms and customizable <br /> features</p>
                            </div>
                            <div className='flex justify-center items-center mb-2'>
                                <div className='ps-2 pe-1 pt-2 lg:pt-3'>
                                    <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                </div>
                                <p className=' ps-2 text-[14px]  lg:text-[15px] mb-0 text-[#FFF] font-inter leading-6 lg:leading-7 font-[400]'>Unlimited lineup optimizations for various <br /> game  formats</p>
                            </div>
                            <div className='flex justify-center items-center mb-3 ms-0 sm:ms-4 md:ms-5 lg:ms-5'>
                                <div className='ps-2 pe-2 pt-2 lg:pt-3'>
                                    <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                </div>
                                <p className=' ps-2 text-[14px]  pt-0 md:pt-2 lg:pt-2 lg:text-[15px] text-[#FFF] font-inter leading-6 lg:leading-7  font-[400]'>Real-time updates and live data  integration</p>
                            </div>

                        </div>
                        <div className='flex justify-center para-sm'>
                            <div >
                                <div className='flex justify-start items-center mb-2'>
                                    <div className='ps-2 pe-2 pt-2 lg:pt-3 '>
                                        <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px]  ' />
                                    </div>
                                    <p className=' ps-2 text-[14px] lg:text-[16px] mb-0 text-[#FFF] leading-6 lg:leading-7 font-inter font-[400]'>Advanced algorithms and customizable features</p>
                                </div>
                                <div className='flex justify-start items-center mb-2'>
                                    <div className='ps-2 pe-1 pt-2 lg:pt-3'>
                                        <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                    </div>
                                    <p className=' ps-2 text-[14px]  lg:text-[16px] mb-0 text-[#FFF] font-inter leading-6 lg:leading-7 font-[400]'>Unlimited lineup optimizations for various game  formats</p>
                                </div>
                                <div className='flex justify-start items-center mb-3 ms-0 sm:ms-4 md:ms-4 lg:ms-4'>
                                    <div className='ps-2 pe-2 pt-2 lg:pt-3'>
                                        <img src={Thick_icon} alt='thick' className='w-[21px] h-[21px] lg:w-[34px] lg:h-[34px] ' />
                                    </div>
                                    <p className=' ps-2 text-[14px]  lg:text-[16px] text-[#FFF] font-inter leading-6 lg:leading-7   font-[400]'>Real-time updates and live data integration</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex justify-center pt-3 hover:opacity-[0.8]   ps-0 sm:ps-8 md:ps-7 lg:ps-7">
                                <button className="text-[#15141D]  w-[95%]  sm:w-[65%]  md:w-[56%] lg:w-[62%]  cursor-pointer hover:opacity-[0.8] font-inter font-[500]  text-[14px] lg:text-[15px] bg-[#41AFFF] rounded-[50px] border-[#41AFFF] border pt-3 pb-3 mt-1 ">
                                    Start your 5-day FREE trial
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='pt-2 ps-2 text-[10px] lg:text-[14px] text-gray-500 font-inter font-[400]'>No credit card required · 5-days free trial</p>
                        </div>
                    </div>
                    {/* <Card className='card_pricing border-gradient ' bordered={false} style={{ width: 450 }}>


                </Card> */}
                </div>
            </div>)
            
            }

          
        </div>
    )
}

export default Pricing