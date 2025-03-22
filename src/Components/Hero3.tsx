import FormComponent from "./FormComponent";

const Hero3 = () => {
  return (
    <div
      className="h-screen   flex
  justify-center items-center text-white bg-[#0067B1] w-screen sm:flex-col  "
    >
      <div className=" flex pt-12 gap-0.5 ">
        <div className="get-in-touch md:w-[30vw]  ">
          <div className=" text-3xl h-[38px]">Get in touch</div>
          <br className="font-bold w-[15px]  " />
          <hr className="w-[30px] font-bold h-[2px]" />
          <br />
          <div className="text-xl font-light">For general enquires</div>
          <br />
          <div className="text-lg font-normal "> Address :</div>
          <div className="font-light">110, 16th Road, Chembur,</div>
          <div className="font-light">Mumbai - 400071</div>
          <br />
          <div className="text-lg font-normal">
            {" "}
            Phone :<div className="font-light">+91 22 25208822</div>
          </div>
          <br />
          <div className="text-lg font-normal"> Email :</div>
          <div className="font-light">info@supremegroup.co.in</div>
        </div>
        <div className="form w-95">
          {" "}
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
