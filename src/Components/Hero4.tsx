import sup from "./../assets/supreme-logo.svg";
const Hero4 = () => {
  return (
    <div
      className="bg-white px-[20px] text-black sm:h-screen py-[48px]  sm:px-[105px]   flex
    flex-col "
    >
      <div className="logo pb-[10px] ">
        <img src={sup} alt="logo" className="h-[56px] w-[160px]" />
      </div>
      <div className="pages grid grid-cols-2 gap-4 h-60 pt-[10px] sm:flex sm:gap-4 justify-between  ">
        <div className="applications  ">
          <div className="font-semibold uppercase">Applications</div>
          <br />
          <div className="flex flex-col gap-4 font-thin">
            <div className="page">Apparel</div>
            <div className="page">Automotive</div>
            <div className="page">Filtration</div>
            <div className="page">Customized Nonwoven</div>
          </div>
        </div>
        <div className="company ">
          <div className="font-semibold uppercase">Company</div>
          <br />
          <div className="flex flex-col gap-4 font-thin">
            <div className="page">Who we are</div>
            <div className="page">Global Competency</div>
            <div className="page">Innovation</div>
            <div className="page">ESG Impact</div>
          </div>
        </div>
        <div className="more   ">
          <div className="font-semibold uppercase">More</div>

          <br />
          <div className="flex flex-col gap-4 font-thin">
            <div className="page">Contact us</div>
            <div className="page">Careers</div>
          </div>
        </div>
        <div className="follow-us  ">
          <div className="font-semibold uppercase">Follow us</div>
          <br />

          <div className="flex flex-col gap-4 font-thin">
            <div className="page">LinkedIn</div>
          </div>
          <br />
        </div>
      </div>
      <div className="grid place-items-center mt-[120px] w-full sm:flex sm:flex-row border-2 text-center">
        <span>©2025. All Rights Reserved.</span>
        <span className="hidden sm:inline-flex ">
          Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
        </span>
      </div>
    </div>
  );
};

export default Hero4;

// ©2025. All Rights Reserved.
// Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
