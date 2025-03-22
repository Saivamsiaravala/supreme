import { Link } from "react-router-dom";
import sup from "./../assets/supreme-logo.svg";
const Hero4 = () => {
  return (
    <div
      className="bg-white px-[20px] pt-5 pl-3 text-black sm:h-screen py-[48px]  sm:px-10   flex
    flex-col "
    >
      <div className="logo pb-[10px] ">
        <img src={sup} alt="logo" className="h-[50px] w-[140px]" />
      </div>
      <div className="pages grid grid-cols-2 gap-6 h-60 pt-[10px] sm:flex sm:gap-4 justify-between  ">
        <div className="applications  ">
          <div className="font-semibold uppercase pb-2">Applications</div>
          <div className="flex flex-col gap-2 font-thin">
            <Link to="apparel" className="page">
              Apparel
            </Link>
            <Link to="automotive" className="page">
              Automotive
            </Link>
            <Link to="filtration" className="page">
              Filtration
            </Link>
            <Link to="nonwoven" className="page">
              Customized Nonwoven
            </Link>
          </div>
        </div>
        <div className="company ">
          <div className="font-semibold uppercase pb-2">Company</div>
          <div className="flex flex-col gap-2 font-thin">
            <Link to="who-we-are" className="page">
              Who we are
            </Link>
            <Link to="global-competency" className="page">
              Global Competency
            </Link>
            <Link to="innovation" className="page">
              Innovation
            </Link>
            <Link to="esg-impact" className="page">
              ESG Impact
            </Link>
          </div>
        </div>
        <div className="more   ">
          <div className="font-semibold uppercase pb-2">More</div>

          <div className="flex flex-col gap-2 font-thin">
            <Link to="contact-us" className="page">
              Contact us
            </Link>
            <Link to="careers" className="page">
              Careers
            </Link>
          </div>
        </div>
        <div className="follow-us  ">
          <div className="font-semibold uppercase pb-2">Follow us</div>

          <div className="flex flex-col gap-2 font-thin">
            <a
              href="https://www.linkedin.com/company/supreme-group-company/"
              target="_blank"
              className="page"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className=" text-center mt-30 tracking-tight w-full font-thin">
        <span className="sm:flex sm:justify-self-start">
          ©2025. All Rights Reserved.
        </span>
        <span className="hidden sm:flex sm:justify-self-center sm:relative sm:left-40">
          Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
        </span>
      </div>
    </div>
  );
};

export default Hero4;

// ©2025. All Rights Reserved.
// Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
