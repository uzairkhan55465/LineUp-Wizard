import lineSmall from "../../../assets/images/Optimizer/line-Small.png"
import linemedium from "../../../assets/images/Optimizer/linemedium.png"


const LineUpWizardOptimizerCards = () => {
    return (
        <div className="flex justify-center items-center  flex-col pt-14 md:pt-16 mt-0 md:mt-2 lg:mt-2">
            <p className="text-[#D2D0DD] font-inter text-center text-[12px] lg:text-[13px] font-[500] grey-btn uppercase">algorithms for profit</p>
            <h1 className='para-lg pt-4 lg:pt-0 px-6 lg:px-0 lg:text-[54px] text-[32px] font-[700] text-center text-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] font-epilogue'>
                Save Thousands Of Hours <br/>
                And Dollars</h1>
                <h1 className='para-sm pt-1 lg:pt-0 px-6 lg:px-0 lg:text-[54px] text-[32px] font-[700] text-center text-gradient text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.58)] font-epilogue'>
                Save Thousands Of Hours
                And Dollars</h1>
            <div className=" w-[74%] h-32 md:w-96 md:h-32 lg:w-96 lg:h-32 mt-16 rounded-lg mx-16 border border-[rgba(255, 255, 255, 0.36)] border-lg bg-[#1A1C1D] p-4 ps-6">
                <p className="text-[12px] font-[400] font-inter text-[#fff] mt-1">Time spent on DFS per month <span className="text-[#3596FF]">- Required</span> </p>
                <div className="w-[96%] h-[61.753px] rounded-[3px] border border-[#3C3E3F] text-center  bg-[#1D1E20] ">
                    <h1 className="text-white text-[36px] font-[700]  font-epilogue pt-4">53 hours</h1>
                </div>
            </div>
            <div>
                <img src={lineSmall} alt="line" />
            </div>
            <div className="w-[204.19px] h-[61.14px] text-center rounded-lg border border-[rgba(255, 255, 255, 0.36)] border-lg bg-[#1A1C1D] p-4 ps-6">
                <h1 className="text-white text-[17px] font-[700]  font-epilogue pt-3 pb-3">Lineup Wizards</h1>
            </div>
            <div>
                <img src={linemedium} alt="linemedium" />
            </div>
            <div className=" w-[74%] h-32 md:w-96 md:h-32 lg:w-96 lg:h-32  rounded-lg border border-[rgba(255, 255, 255, 0.36)] border-lg bg-[#1A1C1D] p-4 ps-6">
                <p className="text-[12px] font-[400] font-inter text-[#fff] mt-1">Average Time Saved Compared To Others </p>
                <div className="w-[96%] h-[61.753px] rounded-[3px] border border-[#3C3E3F] text-center  bg-[#1D1E20] ">
                    <h1 className="text-white text-[36px] font-[700]  font-epilogue pt-4">12 hours</h1>
                </div>
            </div>
            <div>
                <img src={linemedium} alt="linemedium" />
            </div>
            <div className=" w-[74%] h-32 md:w-96 md:h-32 lg:w-96 lg:h-32  rounded-lg border border-[rgba(255, 255, 255, 0.36)] border-lg bg-[#1A1C1D] p-4 ps-6">
                <p className="text-[12px] font-[400] font-inter text-[#fff] mt-1">Average $$$ saved </p>
                <div className="w-[96%] h-[61.753px] rounded-[3px] border border-[#3C3E3F] text-center  bg-[#1D1E20] ">
                    <h1 className="text-white text-[36px] font-[700]  font-epilogue pt-4">$423.64</h1>
                </div>
            </div>
        </div>
    )
}
export default LineUpWizardOptimizerCards