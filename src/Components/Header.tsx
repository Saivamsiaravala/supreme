import sup from "./../assets/supreme-logo.svg";

const Header = () => {
  return (
    <nav className=" bg-white">
      <img src={sup} alt="supreme-logo" className="h-[50px] w-[146px]" />
    </nav>
  );
};

export default Header;
