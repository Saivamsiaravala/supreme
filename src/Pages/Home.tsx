import DummyHero from "../Components/DummyHero";
// import Header from "../Components/Header";
import Hero1 from "../Components/Hero1";
import Hero3 from "../Components/Hero3";
// import Hero4 from "../Components/Hero4";

const Home = () => {
  return (
    <div>
      <div className=" h-5/6  w-full flex justify-center items-center ">
        <Hero1 />
      </div>
      <section className="h-screen w-full  overflow-auto   ">
        <DummyHero />
      </section>
      <section className="h-screen w-screen overflow-hidden">
        <Hero3 />
      </section>
    </div>
  );
};

export default Home;
