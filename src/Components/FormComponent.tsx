import { toast } from "react-toastify";

const FormComponent = () => {
  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    toast.success("Form submitted succesfully", {
      icon: false,
      className: "toast",
      progressClassName: "custom-progress-bar",
      style: {
        height: "50px",
        backgroundColor: "#0067B1 ",
        fontWeight: 100,
        fontSize: "12px",
        color: "white",
        textDecoration: "underline white !important",
      },
    });
  };
  return (
    <div className="w-full  sm:flex sm:justify-center ">
      <form
        className="flex flex-col sm:relative sm:right-15 sm:w-[35vw] sm:pt-0 pt-2 pr-7  "
        onSubmit={(event) => formHandler(event)}
      >
        <input
          type="text"
          placeholder="Full name"
          className="border-b-2 w-full text-xl border-white/40  text-white placeholder-white sm:placeholder:text-xl sm:placeholder:tracking-tight  font-sans font-normal focus:outline-none  placeholder:text-[17px] placeholder:font-thin  focus:border-b-2 focus:border-white  "
        />
        <br />{" "}
        <input
          type="text"
          placeholder="E-mail"
          className="border-b-2 w-full border-white/40  text-xl text-white placeholder-white sm:placeholder:text-xl sm:placeholder:tracking-tight font-sans font-normal focus:outline-none placeholder:text-[17px] placeholder:font-thin focus:border-b-2 focus:border-white   "
        />
        <br />
        <input
          type="email"
          placeholder="Subject"
          className="border-b-2 w-full border-white/40 text-xl text-white  font-sans font-normal   placeholder-white sm:placeholder:text-xl sm:placeholder:tracking-tight focus:outline-none focus:border-b-2 placeholder:text-[17px] placeholder:font-thin focus:border-white   "
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          className="border-b-2 w-full  text-xl border-white/40  text-white placeholder-white sm:placeholder:text-xl sm:placeholder:tracking-tight font-sans font-normal  h-[100px] pb-10  align-top placeholder:text-[17px] placeholder:font-thin focus:outline-none focus:border-b-2 focus:border-white   "
        />
        <br />
        <button
          type="submit"
          className="h-[45px] w-full sm:w-35 text-white text-[15px] font-semibold border-white border-2  rounded-4xl focus:bg-white focus:text-black transition-colors duration-500 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
