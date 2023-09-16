
import Img from '../../../../assets/images/homepage/Main Hero.png'
import Img1 from '../../../../assets/images/homepage/image 3.png'
import Img2 from '../../../../assets/images/homepage/image 6.png'
import Img3 from '../../../../assets/images/homepage/Group 6.png'
import Img4 from '../../../../assets/images/homepage/image 7.png'

export const MainHomePage = () => {
    return (
        <>
            <div className="main background-blue-home">
                <div className="home-page h-full pt-11 lg:pt-16 pb-16">
                    <div className='flex justify-center text-center px-4 md:px-6'>
                        <div className='px-4 md:px-0 pt-11'>
                            <h1 className='font-head  text-white flex items-center font-extrabold justify-center  text-center mb-0 text-[40px] lg:text-[66px]  font-epilogue'>
                                A New Era of Fantasy Sports</h1>
                            <div className='flex justify-center'>
                                <p className='text-[#D2D0DD] font-inter leading-7 px-4   py-2 lg:py-0 md:px-4  text-center font-[400] text-[14px] lg:text-[18px] md:w-[850px] w-full'>
                                    Join the ranks of successful DFS players who have transformed their approach with our DFS optimizer.
                                    Start maximizing your winnings and dominating the competition.</p>
                            </div>
                            <div className="flex justify-center ">
                                <div class=" p-3 rounded-lg border border-gray-300 inline-flex space-x-4">
                                    <div class="relative flex-grow">
                                        <input type="text" class="bg-[#1E1E1E] text-[#848484] border border-[#42413e] pt-[9px] pb-[9px] pe-16 ps-6 text-[12px] lg:text-[16px] font-inter font-[400] border-solid rounded-[30px] focus:outline-none focus:border-blue-500" placeholder="Enter something" />
                                        <button class="absolute inset-y-0 right-0 py-[6px] px-[14px] bg-[#3596FF] m-[2px] rounded-[40px] font-[500] border-[#41AFFF] font-inter text-[10px] lg:text-[14px] border cursor-pointer text-black">Try demo</button>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[#D2D0DD] text-[10px] lg:text-[14px] font-[400] font-inter mt-4 lg:mt-8'>No credit card required · 5-days free trial</p>
                            <div className='flex justify-center '>
                                <img className=' mt-16 w-[97%] h-[178.803px] lg:w-[93%] lg:h-full' src={Img} alt="home" />
                            </div>
                            <div className='flex mt-12 justify-evenly'>
                                <div><img className='h-[27px] w-[36px] md:h-auto md:w-auto' src={Img1} alt="logo1" /></div>
                                <div><img className='h-[27px] w-[36px] md:h-auto md:w-auto' src={Img2} alt="logo2" /></div>
                                <div><img className='h-[27px] w-[36px] md:h-auto md:w-auto' src={Img3} alt="logo3" /></div>
                                <div><img className='h-[27px] w-[36px] md:h-auto md:w-auto' src={Img4} alt="logo4" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainHomePage;