import Img from '../../../../assets/images/homepage/icons8-shortlist 1.png'
import CubeImg from '../../../../assets/images/homepage/cube.png'
import ToolsImg from '../../../../assets/images/homepage/icons8-custom 1.png'
import Chart from '../../../../assets/images/homepage/icons8-area-chart 1.png'
import Progress from '../../../../assets/images/homepage/icons8-sliders 1.png'
import Database from '../../../../assets/images/homepage/icons8-database-export 1.png'
const SecondSection = () => {
    return (
        <>
            <div className="main">
                <div className="second-section pt-7 lg:pt-16 pb-16">
                    <div className='flex justify-center'>
                    <p className=" lg:w-[20%] text-[#D2D0DD] font-inter text-center text-[12px] lg:text-[13px] font-[500] grey-btn mx-10 lg:mx-0">MAGIC HAPPENS BY DATA SCIENCE</p>
                    </div>
                 
                    <div className="flex justify-center text-center">
                        <div>
                            <h1 className='lg:text-[54px] text-[32px] font-[700] text-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] px-3 lg:px-0 font-epilogue'>
                                Gain Every Advantage. With Data Driven Decisions.</h1>
                            <div className='flex justify-center'>
                                <p className='text-[#D2D0DD] font-inter leading-6 lg:leading-7 px-4 md:px-0 text-center  text-[14px] font-[400] lg:text-[18px] md:w-[850px] w-full mt-0 lg:mt-2'>
                                    Say goodbye to guesswork. Our advanced algorithms generate optimal lineups based on extensive player projections,
                                    historical data, and customized rules..</p>
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mt-12 md:px-16 mx-0 md:mx-8 px-8 text-[#D2D0DD]">
                                <div 
                                className="text-[white] p-4 sides">
                                    <div className='flex justify-center'>
                                    <img src={CubeImg} alt="icon" />
                                    </div>
                                    <p className='text-start mt-10 card-text-color font-inter text-[17px]  font-[500] mb-0'>Unique Builds</p>
                                    <p className='text-start card-text-color text-[#D2D0DD] font-inter text-[12px] lg:text-[15px] font-[400] leading-6'>Our optimizer offers a variety of unique  lineup combinations.</p>
                                </div>

                                <div
                                className="text-[white] p-6 sides">
                                    <div className='flex justify-center'>
                                    <img src={Img} alt="icon" />
                                    </div>
                                    <p className='text-start mt-10 card-text-color font-inter text-[17px] font-[500] mb-0'>Optimal Lineups</p>
                                    <p className='text-start card-text-color text-[#D2D0DD] font-inter text-[12px] lg:text-[15px]  font-[400] leading-6'>Our advanced algorithms generate optimal  lineups based on extensive player projections.</p>
                                </div>
                                <div  
                                className="text-[white] p-6 sides">
                                    <div className='flex justify-center'>
                                    <img src={ToolsImg} alt="icon" />
                                    </div>
                                    <p className='text-start mt-10 card-text-color font-inter text-[17px] font-[500] mb-0'>Custom Rules Option</p>
                                    <p className='text-start card-text-color text-[#D2D0DD] font-inter text-[12px] lg:text-[15px]  font-[400] leading-6'>Take control of your lineup construction. Set custom rules to enforce specific constraints</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mt-14 md:px-16 mx-0 md:mx-8 px-8 text-[#D2D0DD] ">
                                <div 
                                className="text-[white] p-4 sides">
                                    <div className='flex justify-center'>
                                    <img src={Chart} alt="icon" />
                                    </div>
                                    <p className='text-start mt-10 card-text-color font-inter text-[17px] font-[500] mb-0'>Advanced Projections</p>
                                    <p className='text-start card-text-color text-[#D2D0DD] font-inter text-[12px] lg:text-[15px] font-[400] leading-6'>Incorporates accurate projections, providing  accurate player performance forecasts.</p>
                                </div>

                                <div 
                                className="text-[white] p-6 sides">
                                    <div className='flex justify-center'>
                                    <img src={Progress} alt="icon" />
                                    </div>
                                    <p className='text-start mt-10 card-text-color font-inter text-[17px] font-[500] mb-0'>Team Adjustments</p>
                                    <p className='text-start card-text-color text-[#D2D0DD] font-inter text-[12px] lg:text-[15px]  font-[400] leading-6'>Evaluate the impact of team dynamics on  player performance.</p>
                                </div>
                                <div 
                                className="text-[white] p-6 sides">
                                    <div className='flex justify-center'>
                                    <img src={Database} alt="icon" />
                                    </div>
                                    <p className='text-start mt-10 card-text-color font-inter text-[17px] font-[500] mb-0'>Export Filter</p>
                                    <p className='text-start card-text-color text-[#D2D0DD] font-inter text-[12px] lg:text-[15px]  font-[400] leading-6'>Get your lineups ready to enter contests in  just a few clicks.</p>
                                </div>
                            </div>
                            <p className="text-[#D2D0DD] font-inter text-center font-[400] pt-4 text-[16px] lg:text-[24px] mt-16">and many more features...</p>
                        </div>
                      
                    </div>

                </div>
            </div>
        </>
    )
}
export default SecondSection;