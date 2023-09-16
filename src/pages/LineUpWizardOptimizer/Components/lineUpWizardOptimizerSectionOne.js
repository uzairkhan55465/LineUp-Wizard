import React from 'react'
import Codebg from '../../../assets/images/Optimizer/CodeEditor.png'
import Img1 from '../../../assets/images/homepage/image 3.png'
import Img2 from '../../../assets/images/homepage/image 6.png'
import Img3 from '../../../assets/images/homepage/Group 6.png'
import Img4 from '../../../assets/images/homepage/image 7.png'
const LineUpWizardOptimizerSectionOne = () => {
    return (
        <>
            <div className="main background-blue-home">
                {/* header */}

                <div className="home-page h-full  pt-11 lg:pt-16 pb-16">
                    <div className='flex justify-center text-center px-4 md:px-6'>
                        <div className='px-4 md:px-0'>
                            <div className='relative top-10'>
                                <h1 className='lg:text-[66px] text-[40px] font-[700] mb-5 md:mb-2 lg:mb-2 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] font-epilogue px-0 '>
                                    The most advanced <br />
                                    optimizer out there</h1>
                                <div className='flex justify-center'>
                                    <p className='text-[#D2D0DD] font-inter leading-6 md:leading-7 lg:leading-7 px-4 md:px-0 text-center font-[400]  text-[14px] lg:text-[18px]
                             hidden md:block lg:block'>
                                        Take advantage of our customizable functions, unique builds, and advanced projections to <br />
                                        create winning lineups that defy expectations.</p>
                                    <p className='block md:hidden lg:hidden mt-0  text-[#D2D0DD] font-inter leading-7 px-2 md:px-0 text-center font-[400]  text-[14px] lg:text-[18px] '>
                                        Take advantage of our customizable functions, unique builds, and advanced projections to
                                        create winning lineups that defy expectations.</p>
                                </div>

                                <div>
                                    <img className='mt-6 lg:mt-16 lg:w-[796px] lg:h-[493px] w-[329.379px] h-[204px] md:w-auto md:h-auto ' src={Codebg} alt="home" />
                                </div>
                            </div>


                            <div className='flex mt-16 lg:mt-32 justify-between px-0 md:px-[40px] lg:px-[0px]'>
                                <div><img className='h-[27.669px] w-[36.892px] md:h-auto md:w-auto' src={Img1} alt="logo1" /></div>
                                <div><img className='h-[21px] w-[91px] md:h-auto md:w-auto' src={Img2} alt="logo2" /></div>
                                <div><img className='h-[15.811px] w-[48.75px] md:h-auto md:w-auto' src={Img3} alt="logo3" /></div>
                                <div><img className='h-[18.446px] w-[56.655px] md:h-auto md:w-auto' src={Img4} alt="logo4" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineUpWizardOptimizerSectionOne