import React from 'react'
import OptimizerImage from "../../../assets/images/Optimizer/optimizer.png"
const LineUpOptimizerSectionTwo = () => {
    return (
        <div className=' mx-auto pt-0 md:pt-16 lg:pt-16 mt-12 lg:mt-12 md:mt-12 pb-6 '>
            <div className='flex justify-center items-center  pt-6  ps-1 pe-1 pt-1 pb-1  '>
            <p className="text-[#D2D0DD] font-inter text-center text-[12px] lg:text-[13px] font-[500] grey-btn uppercase">algorithms for profit</p>
            </div>
            <div className='flex justify-center items-center ps-1 pe-1 pt-0 pb-2 '>
                <p className= 'price para-lg font-[700] text-[40px] lg:text-[48px] font-epilogue text-white text-center mt-2 lg:mt-8'>
                    The Best Algorithms For The
                    <br />   Best Returns
                </p>
                <p className='price para-sm font-[700] text-[40px] lg:text-[48px] font-epilogue text-white text-center mt-2 lg:mt-8 '>
                    The Best Algorithms For The
                     Best Returns
                </p>
            </div>
            <div className=' md:pe-0 md:ps-0 lg:ps-12 lg:pe-12 hidden sm:hidden md:block md:flex lg:flex justify-center items-center pt-16 mt-5'>
                {/* Left */}
                <div className='flex justify-center'>
                <div className='md:w-[60%] lg:w-[45%] items-center flex'>
                    <div>
                        <p className='font-epilogue text-white font-[700] 
                        text-[30px] spacing-[0.57px] px-10'>The Best Projections</p>
                        <p className='font-inter text-white text-[18px] font-[400]
                         leading-[39px] text-start tracking-[0.57 px] px-10'>By leveraging a wealth of historical data,
                            statistical models, and advanced machine learning techniques, our
                            optimizer is able to analyze player performance with exceptional
                            precision.</p>
                    </div>
                </div>
                <div className='w-[80%] md:w-[70%] lg:w-[45%] ps-8'>
                    <div>
                        <img src={OptimizerImage} alt='OptimizerImage' className='w-[321.57px]  md:w-[410.19px] md:h-[382px] h-[194px] lg:w-[450.19px] lg:h-[362px] xl:w-[610.19px] xl:h-[362px]' />
                    </div>
                </div>
                </div>
               
            </div>

            {/* Responsive Module */}
            <div className='ps-2 pe-2 flex flex-col sm:flex sm:flex-col justify-center items-center  block  md:hidden lg:hidden '>
                {/* Right */}
                <div className='lg:w-[50%]'>
                    <div>
                        <img src={OptimizerImage} alt='OptimizerImage' className='w-[321.57px] h-[194px] sm:h-[194px] sm:w-[321.57px] md:w-[633.19px] lg:w-[633.19px] h-[382px]' />
                    </div>
                </div>
                {/* Left */}
                <div className='lg:w-[50%]'>
                    <div className='pt-3 pb-3 ps-4 pe-4'>
                        <p className='font-epilogue text-white font-[700] 
                        text-[18px] spacing-[0.57px]'>The Best Projections</p>
                        <p className='font-inter w-[100%] text-white text-[12px] font-[400]
                         leading-[16.5px] text-start tracking-[0.57 px]'>By leveraging a wealth of historical data,
                            statistical models, and advanced machine learning techniques, our
                            optimizer is able to analyze player performance with exceptional
                            precision.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineUpOptimizerSectionTwo