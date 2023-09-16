import React from 'react'
import { SportsData } from '../../../constant/jsonData'
const LineUpOptimizerthirdSection = () => {
    return (
        <div className='container mx-auto pt-0 md:pt-16 lg:pt-16  mt-8 pb-6 '>
            <div className=' hidden sm:hidden md:flex lg:flex justify-center items-center '>
                {/* Left Side */}
                <div className='flex flex-wrap'>
                    {SportsData?.map((item, index) => {
                        return (
                            // <div className='w-[40%]' key={item?.id}>
                            //     <div className='bg-[#131416] w-[239px] h-[182px] flex justify-center items-center'>
                            //         <img src={item.Image} alt='SportsImage' />
                            //     </div>
                            // </div>
                            <div className="flex justify-center items-center w-[37%] pt-2 pb-5 " key={item?.id}>
                                <div className="back-Card w-[229px] h-[182px] flex justify-center items-center borderCards">
                                    <img src={item.Image} alt="" className={`${item?.id === 1
                                        ? "w-[87.992px] h-[118px]"
                                        : item?.id === 2
                                            ? "w-[81px] h-[76px]"
                                            : item?.id === 3
                                                ? "w-[131px] h-[132px]"
                                                : item?.id === 4
                                                    ? "w-[145px] h-[48.157px]"
                                                    : ""}`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* Right Side */}
                <div className='w-[59%]'>
                    <div>
                        <p className='font-epilogue text-white font-[700] 
                        text-[30px] spacing-[0.57px]'>Win With Every Sport</p>
                        <p className='font-inter text-white text-[18px] font-[400]
                         leading-[39px] text-start tracking-[0.57 px]'>By leveraging a wealth of historical data,
                            statistical models, and advanced machine learning techniques, our
                            optimizer is able to analyze player performance with exceptional
                            precision.</p>
                    </div>
                </div>
            </div>
            {/* ResponsiveModule */}
            <div className='block sm:block md:hidden lg:hidden  '>
                {/* Left Side */}
                <div className='flex flex-wrap justify-center items-center'>
                    {SportsData?.map((item, index) => {
                        return (
                            // <div className='w-[40%]' key={item?.id}>
                            //     <div className='bg-[#131416] flex justify-center items-center pt-2 pb-2 ps-2 pe-2'>
                            //         <img src={item.Image} className='w-[55px] h-[76px]' alt='SportsImage' />
                            //     </div>
                            // </div>
                            <div className="flex justify-center items-center ">
                                <div className="back-Card w-[138px] h-[138px] flex justify-center items-center borderCards mx-4 my-4">
                                    <img src={item.Image} alt="" className={`${item?.id === 1
                                        ? "w-[55px] h-[76px]"
                                        : item?.id === 2
                                            ? "w-[94px] h-[51px]"
                                            : item?.id === 3
                                                ? "w-[121px] h-[91px]"
                                                : item?.id === 4
                                                    ? "w-[98px] h-[33px]"
                                                    : ""}`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* Right Side */}
                <div className='lg:w-[50%]'>
                    <div className='pt-3 pb-3 ps-4 pe-4'>
                        <p className='font-epilogue text-white font-[700] 
                        text-[18px] spacing-[0.57px]'>Win With Every Sport</p>
                        <p className='font-inter w-[100%] text-white text-[12px] font-[400]
                         leading-[16.5px] text-start tracking-[0.57 px]'>By leveraging a wealth of historical data,
                            statistical models, and advanced machine learning techniques, our
                            optimizer is able to analyze player performance with exceptional
                            precision.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-column justify-center items-center  pt-0 md:pt-16 lg:pt-16 mt-12   md:mt-16 lg:mt-16 pb-16 lg:pb-7 ">
                <div className="bg-img w-[80%] lg:w-[72%] height-[100%] pt-[120px] pb-[120px]  pb-8 ps-4 pe-4 border border-solid border-[#42413e] rounded-[18px] mt-0 md:mt-12 lg:mt-12">
                    <div>
                        <p className="controlText text-white flex items-center font-[700] justify-center text-[32px] md:text-[40px] font-epilogue text-center mb-0 text-lg-[56px]  ">
                            Take Control Of Your Destiny

                        </p>

                        <p className=" text-[#D2D0DD] font-inter flex justify-center items-center text-[12px] lg:text-[15px] py-0 lg:py-1 font-[400] text-center leading-6">Get started with LineupWizards and stay on top of your DFS journey in no time!
                        </p>
                    </div>
                    <div className="flex justify-center ">
                        <div class=" p-3 rounded-lg border border-gray-300 inline-flex space-x-4">
                            <div class="relative flex-grow">
                                <input type="text" class="bg-[#1E1E1E] text-[#848484] border border-[#42413e] pt-[9px] pb-[9px] pe-16 ps-6 text-[12px] lg:text-[16px] font-inter font-[400] border-solid rounded-[30px] focus:outline-none focus:border-blue-500" placeholder="Enter something" />
                                <button class="absolute inset-y-0 right-0 py-[6px] px-[14px] bg-[#3596FF] m-[2px] rounded-[40px] font-[500] border-[#41AFFF] font-inter text-[10.7px] lg:text-[14px] border cursor-pointer text-black">Try demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-opacity pt-2 text-center text-[10px] lg:text-[14px] font-[900] font-inter mt-[5px]">No credit card required · 5-days free trial</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineUpOptimizerthirdSection