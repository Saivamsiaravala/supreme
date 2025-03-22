import sup from "./../assets/supreme-logo.svg";
const Hero4 = () => {
  return (
    <div
      className="bg-white text-black h-screen py-[48px]  px-[105px]   flex
    flex-col "
    >
      <div className="logo pb-[10px] ">
        <img src={sup} alt="logo" className="h-[56px] w-[160px]" />
      </div>
      <div className="pages   h-60 pt-[10px] flex gap-4 justify-between ">
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
      <div>
        <div className=" mt-[100px] h-10 font-thin">
          <div className="flex">
            <div className="w-1/2 flex justify-baseline">
              ©2025. All Rights Reserved.
            </div>
            <div className="w-1/2 flex justify-end   ">
              Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
