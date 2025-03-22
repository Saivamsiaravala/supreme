import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Hero4 from "./Components/Hero4";
import Error from "./Pages/Error";
// import Hero1 from "./Components/Hero1";

const App = () => {
  return (
    <div className=" h-screen w-full  overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-black  [&::-webkit-scrollbar-track]:bg-white  ">
      {/* <section className="flex flex-col h-screen overflow-hidden w-full">
        <div className="h-[70px] pb-[10px] pt-[10px] pl-[107px] bg-white w-full ">
          <Header />
        </div>
        <div className=" flex-1 w-full flex justify-center items-center ">
          <Hero1 />
        </div>
      </section>
      <section className="h-screen w-full  overflow-auto   ">
        <DummyHero />
      </section>
      <section className="h-screen  overflow-hidden">
        <Hero3 />
      </section>
      <section className="h-screen  overflow-hidden">
        <Hero4 />
      </section> */}
      <section className="h-[15vh] overflow-hidden w-full shadow-xl">
        <div className=" pl-3 pt-3 sm:h-[70px] sm:pb-[10px] sm:pt-[10px] sm:pl-[107px] bg-white w-full ">
          <Header />
        </div>
      </section>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <section className="h-screen  overflow-hidden">
        <Hero4 />
      </section>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
