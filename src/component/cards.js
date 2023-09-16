import Football from "../assets/images/ourOptimizer/National_Football_League_logo.png"
const Cards = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white p-16">
            <div className="back-Card w-[239px] h-[182px] flex justify-center items-center">
                <img src={Football} alt="" className="w-[90.992px] h-[125px]"/>
            </div>
        </div>
    )
}
export default Cards