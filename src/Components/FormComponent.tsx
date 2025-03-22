import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Invalid email address"),
  subject: yup.string().required("Subject is required"),
});
const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
    <div>
      <form
        className="flex flex-col"
        onSubmit={(event) => handleSubmit(() => formHandler(event))}
      >
        <input
          type="text"
          {...register("name")}
          placeholder="Full name"
          className="border-b-2 w-100 text-xl border-white/40  text-white placeholder-white font-sans font-normal focus:outline-none focus:border-b-2 focus:border-white  "
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <br />
        <br />{" "}
        <input
          type="text"
          {...register("email")}
          placeholder="E-mail"
          className="border-b-2 w-100 border-white/40  text-xl text-white placeholder-white font-sans font-normal focus:outline-none focus:border-b-2 focus:border-white   "
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <br />
        <br />
        <input
          type="email"
          placeholder="Subject"
          {...register("subject")}
          className="border-b-2 w-100 border-white/40 text-xl text-white  font-sans font-normal   placeholder-white focus:outline-none focus:border-b-2 focus:border-white   "
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
        {/* <br /> */}
        <br />
        <input
          type="text"
          placeholder="Message"
          className="border-b-2 w-100 text-xl border-white/40  text-white placeholder-white font-sans font-normal  h-[100px] pb-10 align-top focus:outline-none focus:border-b-2 focus:border-white   "
        />
        <br />
        <br />
        <div className="h-12">
          <button
            type="submit"
            className="h-full text-lg font-semibold border-2 w-[130px] rounded-4xl focus:bg-white focus:text-black transition-colors duration-500 "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
