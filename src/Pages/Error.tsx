import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-[85vh] flex flex-col place-items-center">
      <div className="text-blue-700 text-[130px] font-serif ">404</div>
      <div className="pb-[35px] font-thin">
        The page you have requested doesn't exist.
      </div>
      <div className="border-2 h-[12vh] rounded-2xl bg-sky-300 flex place-items-center w-[17vw] justify-center">
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default Error;
