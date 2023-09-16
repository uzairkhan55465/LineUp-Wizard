import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <div className="container mx-auto">

        <div className="pt-8 md:pt-16  pb-6 px-6 lg:px-0">
          <div>
            <p className="font_1 pt-6 text-white flex items-center font-extrabold justify-center  text-center mb-0 text-[50px] lg:text-[66px]  font-epilogue">
              Get In Touch With

              <br /> The Team</p>
              <p className="font_2 pt-10 text-white flex items-center font-extrabold justify-center  text-center mb-0 text-[42px] lg:text-[66px]  font-epilogue ">
              Get In Touch 

              <br />With The Team</p>
            <p className=" flex items-center justify-center text-[15px] font-inter lg:text-[18px] font-[400] text-space pb-0 md:pb-8 lg-pb-16 pt-2 lg:pt-4  text-center leading-6 text-[#D2D0DD]">We want to help you. Let us know how we can help.</p>
          </div>
          <div className="flex justify-center items-center border-gray-700">
            <div class=" w-[92%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%]">
              <form class="rounded ps-2 pe-8  sm:ps-16 sm:pe-6 md:ps-16 md:pe-6 lg:ps-8 lg:pe-8 pt-4 md:pt-6  lg:pt-14  pb-0 mb-0">
                <div class="mb-6">
                  <div>
                    <label class="block   font-[500] text-[14px] lg:text-[16px]  font-inter mb-1 ps-1 text-[#B2B2C1]" for="password">
                      Email Address
                    </label>
                    <input
                      class="input_border border rounded w-full sm:w-[80%] md:w-[80%] lg:w-[95%] font-inter
                      h-[40px] lg:h-[49px]   px-3 text-[#81818E] text-[16px] lg:text-[16px] xl:text-[18px] border-[#81818E] bg-[#131416] placeholder:text-[#81818E]"
                      id="username"
                      type="text"
                      placeholder="e.g mail@domain.com"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label class="block   font-[500] text-[14pxpx] lg:text-[16px]  font-inter mb-1 ps-1 text-[#B2B2C1]" for="password">
                    Phone Number
                  </label>
                  <input
                    class="input_border border rounded w-full sm:w-[80%] md:w-[80%] lg:w-[95%]
                       h-[40px] lg:h-[49px]   px-3 font-inter text-[#81818E] text-[16px] lg:text-[16px] xl:text-[18px] bg-[#131416] placeholder:text-[#81818E]"
                    id="username"
                    type="text"
                    placeholder="e.g +44 6353 34141"
                  />
                </div>
                <div class="mb-6">
                  <label class="block   font-[500] text-[14px] lg:text-[16px]  font-inter mb-1 ps-1 text-[#B2B2C1]" for="password">
                    Full Name
                  </label>
                  <input
                    class=" input_border border rounded w-full sm:w-[80%] md:w-[80%] lg:w-[95%] font-inter
                       h-[40px] lg:h-[49px]   px-3 text-[#81818E] text-[16px] lg:text-[16px] xl:text-[18px]  bg-[#131416] placeholder:text-[#81818E]"
                    id="username"
                    type="text"
                    placeholder="e.g John Doe"
                  />
                </div>
                <div className="mb-6">
                  <label class="block   font-[500] text-[14px] lg:text-[16px]  font-inter mb-1 ps-1 text-[#B2B2C1]" for="password">
                    Your Message
                  </label>
                  <textarea id="message" rows="4" class=" lg:text-[16px] xl:text-[18px] textarea bg-[#131416] input_border border border-[#81818E] block p-2.5 
                w-full sm:w-[80%] md:w-[80%] lg:w-[95%] text-sm text-gray-900  text-[#81818E] text-[16px]  bg-[#131416] placeholder:text-[#81818E]
                rounded-lg border border-gray-300  focus:border-blue-500 h-[163px] ; font-inter
               
                dark:focus:border-blue-500" placeholder="e.g I would like a demo of your DFS"></textarea>
                </div>
              
              </form>
              <div className="mb-6 ps-2 pe-2 ms-0 me-0 md:ms-0 md:me-5 sm:ps-16 sm:pe-16 md:ps-16  md:pe-16 lg:ps-7 lg:pe-4">
                  <button className="text-[#15141D] w-[100%] cursor-pointer text-[16px] lg:text-[18px] font-[500 ] font-inter bg-[#41AFFF] rounded-[12px] border-[#41AFFF] border pt-3  pb-3 mt-1 lg:mt-3">
                    Send your message
                  </button>
                </div>
            </div>
          </div>
        </div>
        {/* second Section */}
        <div className="hidden  md:block lg:block">
        <div className="flex flex-column justify-center items-center pt-12 mt-14 pb-7 ">
          <div className="bg-img w-[72%] height-[100%] pt-[113px] pb-[113px]  pb-8 ps-4 pe-4 border border-solid border-[#42413e] rounded-[11px]">
            <div>
            <p className="controlText text-white flex items-center font-[700] justify-center sm:text-[32px] md:text-[40px] font-epilogue text-center mb-0 text-lg-[56px]  ">
            Take Control Of Your Destiny 

            </p>
              
              <p className=" text-[#D2D0DD] font-inter flex justify-center items-center text-[15px] lg:text-[15px] py-0 lg:py-1 font-[400] text-center leading-6">Get started with LineupWizards and stay on top of your DFS journey in no time!
              </p>
            </div>
            <div className="flex justify-center ">
              <div class=" p-3 rounded-lg border border-gray-300 inline-flex space-x-4">
                <div class="relative flex-grow">
                  <input type="text" class="bg-[#1E1E1E] text-[#848484] border border-[#42413e] pt-[9px] pb-[9px] pe-16 ps-6 text-[16px] font-inter font-[400] border-solid rounded-[30px] focus:outline-none focus:border-blue-500" placeholder="Enter something" />
                  <button class="absolute inset-y-0 right-0 py-[6px] px-[14px] bg-[#3596FF] m-[2px] rounded-[40px] font-[500] border-[#41AFFF] font-inter text-[10.7px] lg:text-[14px] border text-black cursor-pointer">Try demo</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-opacity pt-2 text-center text-[11px] lg:text-[14px] font-[900] font-inter mt-[5px]">No credit card required · 5-days free trial</p>
            </div>
          </div>
        </div>
        </div>
       
        {/* Section-3 */}
        <div>

        </div>
      </div >



    </>
  );
};

export default ContactUsPage;
