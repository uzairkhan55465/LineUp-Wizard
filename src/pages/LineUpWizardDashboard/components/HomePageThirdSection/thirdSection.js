import Img from '../../../../assets/images/homepage/Use Case.png'

const ThirdSection = () => {
    return (
        <>
            <div className="main md:mt-10 mt-0">
                <div className="second-section pt-16 pb-16">
                    <div className='flex justify-center'>
                        <p className="text-[#D2D0DD] font-inter text-center text-[13px] font-[500] uppercase grey-btn mx-10 lg:mx-0 mb-10">intuitive experience</p>
                    </div>

                    <div className="flex justify-center text-center">
                        <div>
                            <h1 className='md:text-[56px] m-[0] mx-3 lg:mx-0 text-[32px] lg:text-[39px] font-[700] text-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] font-epilogue'>
                                Take Advantage of Easy<br class="hidden md:inline"></br> to Use Functions.</h1>
                            <div className='flex justify-center'>
                                <p className='text-[#D2D0DD] font-inter leading-7 mx-2 lg:mx-0 px-4 md:px-0 text-center  text-[14px] md:text-[18px] font-[400] md:w-[850px] w-full'>
                                    Our intuitive interface and streamlined features put you in control,<br class="hidden md:inline"></br> empowering you to build winning lineups with ease.</p>
                            </div>
                            <div className='flex justify-center'>
                                <div className='w-[90%]'>

                                    <div className='grid md:grid-cols-2 grid-cols-1 mt-10 lg:mt-32 gap-24 '>
                                        <div className='px-6 md:px-0 '>
                                            <img className='lg:h-[730px] lg:w-[378px] w-[217px] h-[452px] md:h-auto md:w-auto mobileSides' src={Img} alt="mobile" />
                                        </div>
                                        <div className='px-6 md:px-0'>
                                            <div className='px-4 text-start  border-gradient-top bg-[#151618] pt-8 lg:mb-2 mb-9 pb-6 rounded-[16px] card-LeftSide'>
                                                <p className='text-[50px] lg:text-[53px] font-[700] text-gradient text-transparent font-epilogue bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] mb-5 mt-0'>1</p>
                                                <p className='text-[#FFF] font-[700] font-inter text-[18px] lg:text-[26px] mt-0 mb-5'>Set Your Preferences and Customize</p>
                                                <p className='text-[#D2D0DD] text-[12px] lg:text-[15px] font-[400] font-inter leading-6 '>
                                                    Define your game format, select the sports you're interested in, and indicate your desired level of risk.</p>
                                            </div>
                                            <div className='px-4 text-start border-t border-gradient-top bg-[#151618] mb-9 lg:mb-2 pt-8 pb-6 rounded-[16px] card-rightSide'>
                                                <p className=' text-[50px] lg:text-[53px] font-[700] text-gradient text-transparent font-epilogue bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] mb-5 mt-0'>2</p>
                                                <p className='text-[#FFF] font-[700] font-inter text-[18px] lg:text-[26px] mt-0 mb-5'>Input Data and Generate Optimized Lineups</p>
                                                <p className='text-[#D2D0DD] text-[12px] lg:text-[15px] font-[400] font-inter leading-6 '>
                                                    This typically includes player information, game schedules, and any other relevant data points.</p>
                                            </div>
                                            <div className='px-4 text-start border-t border-gradient-top bg-[#151618] pt-8 pb-6 rounded-[16px] card-LeftSide'>
                                                <p className=' text-[50px] lg:text-[53px] font-[700] text-gradient text-transparent font-epilogue bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] mb-5 mt-0'>3</p>
                                                <p className='text-[#FFF] font-[700] font-inter text-[18px] lg:text-[26px] mt-0 mb-5'>Export and Execute</p>
                                                <p className='text-[#D2D0DD] text-[12px] lg:text-[15px] font-[400] font-inter leading-6 '>
                                                    Our export feature ensures a seamless transition, saving you time and effort. Make use of the build history and tracking features to evaluate your strategies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default ThirdSection;