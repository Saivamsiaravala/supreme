import FormComponent from "./FormComponent";

const Hero3 = () => {
  return (
    <div className="bg-[#0067B1] pt-16 pl-5 h-full w-full sm:pt-20 sm:pl-45 ">
      <div className="  text-white font-semibold h-[38px] text-[25px] sm:text-3xl sm:mb-10 ">
        Get in touch
        <div className="border-2 font-thin border-white w-[50px] mt-2 sm:mt-6  "></div>
      </div>
      <div>
        <div className="sm:flex sm:flex-row-reverse">
          <div className="pb-4 pt-4 w-full sm:relative sm:bottom-22 ">
            <FormComponent />
          </div>
          <div className="text-white pb-10 pt-4 tracking-wider sm:w-[40vw] ">
            <div className="text-lg font-light sm:pb-2 ">
              For general enquires
            </div>
            <div className="text-xl pt-4">Address :</div>
            <div className="text-md font-light">
              110, 16th Road, Chembur,
              <br /> Mumbai - 400071
            </div>
            <div className="text-xl pt-3">Phone :</div>
            <div>+91 22 25208822</div>
            <div className="text-xl pt-3">Email :</div>
            <div>info@supremegroup.co.in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;

// {
//   /* <FormComponent /> */
// }
