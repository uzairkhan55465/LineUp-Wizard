import Img from '../../../../assets/images/homepage/Group 1687.png'
import Img1 from '../../../../assets/images/homepage/image 3.png'
import Img2 from '../../../../assets/images/homepage/image 6.png'
import Img3 from '../../../../assets/images/homepage/Group 6.png'
import Img4 from '../../../../assets/images/homepage/image 7.png'

export const MainSecondPage = () => {
    return (
        <>
            <div className="main background-blue">
                {/* header */}
                {/* /////////// */}
                <div className="home-page h-full  pt-11 lg:pt-16 pb-16">
                    <div className='flex justify-center text-center px-4 md:px-6'>
                        <div className='px-4 md:px-0'>
                            <div className='relative top-10'>
                                <h1 className='lg:text-[66px] text-[40px] font-[700] mb-3 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] font-epilogue px-0 '>
                                    Join The Winner’s Circle</h1>
                                <div className='flex justify-center'>
                                    <p className='text-[#D2D0DD] font-inter leading-7 px-4 md:px-0 text-center font-[400]  text-[14px] lg:text-[18px]
                             hidden md:block lg:block'>
                                        It's time to rewrite your DFS destiny and embark on a journey of consistent triumphs.<br></br> Join us today and let the victories begin!</p>
                                    <p className='block md:hidden lg:hidden mt-0  text-[#D2D0DD] font-inter leading-7 px-2 md:px-0 text-center font-[400]  text-[14px] lg:text-[18px] '>
                                        It's time to rewrite your DFS destiny and embark on a journey of consistent triumphs. Join us today and let the victories begin!</p>
                                </div>

                                <div>
                                    <img className='mt-6 lg:mt-16 lg:w-[360px] lg:h-[753px] w-[217px] h-[452px] md:w-auto md:h-auto ' src={Img} alt="home" />
                                </div>
                            </div>


                            <div className='flex mt-14 lg:mt-32 justify-between'>
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
export default MainSecondPage;