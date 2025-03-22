import passengerAlpha from "./../assets/Passenger Alpha 1.mp4";
import commercialAlpha from "./../assets/Commercial Alpha.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const DummyHero = () => {
  const { scrollY } = useScroll(); // Track scroll position

  // Map scroll position to opacity (fades out as you scroll up)
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 2000);
  }, []);
  return (
    <div className="bg-black text-white h-screen pt-20  tracking-wide w-full flex flex-col items-center justify-center text-3xl ">
      <motion.div
        className="text-3xl font-thin text-center flex items-center justify-center w-11/12   pb-3     "
        initial={{ y: "30vh", opacity: 1 }} // Start position (below)
        animate={animate ? { y: 0, opacity: 1 } : {}} // Moves up to position
        transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition
      >
        <div className="w-full">
          Evolving the drive with{" "}
          <strong className="font-bold">360-degree</strong>
          <div>nonwoven solutions </div>
        </div>
      </motion.div>
      <div
        style={{ maxHeight: "80vh" }}
        className="flex-1 w-11/12  pl-12 pt-4  h-2/3 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-track]:bg-gray-600 [&::-webkit-scrollbar-thumb]:max-h-[50px] "
      >
        <motion.div
          className=" font-thin w-full h-full  "
          style={{ direction: "rtl", opacity }}
          initial={{ y: "60vh", opacity: 0.5 }} // Start position (below)
          animate={animate ? { y: 0, opacity: 1 } : {}} // Moves up to position
          transition={{ duration: 3, ease: "easeInOut" }} // Smooth transition
        >
          <div className="  w-full flex  mx-auto overflow-y-scroll pt-4 [&::-webkit-scrollbar]:w-1 scrollbar-track-gray-700">
            <div className="h-3/4 w-full ">
              <video
                typeof="video/mp4"
                autoPlay
                muted
                loop
                preload="auto"
                className=" h-60 w-full"
              >
                <source src={passengerAlpha} />
              </video>
            </div>
            <div className=" w-full ">
              <div className="font-semibold text-2xl flex justify-self-end text-end">
                Passenger Vehicles
              </div>
              <div className="pt-4 flex font-thin text-sm  max-w-[200px] text-end place-self-end">
                Revving up innovation from interior to exterior
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" font-thin w-full  h-full"
          style={{ direction: "rtl", opacity }}
          initial={{ y: "60vh", opacity: 0.5 }} // Start position (below)
          animate={animate ? { y: 0, opacity: 1 } : {}} // Moves up to position
          transition={{ duration: 3, ease: "easeInOut" }} // Smooth transition
        >
          <div className=" w-full flex mx-auto overflow-y-scroll pt-4 [&::-webkit-scrollbar]:w-1 scrollbar-track-gray-700">
            <div className="w-full  ">
              <video
                typeof="video/mp4"
                autoPlay
                muted
                loop
                preload="auto"
                className=" h-60 w-full"
              >
                <source src={commercialAlpha} />
              </video>
            </div>
            <div className=" w-full ">
              <div className="font-semibold text-2xl flex justify-self-end text-end">
                Commercial Vehicles
              </div>
              <div className="pt-4 flex font-thin text-sm  max-w-[200px] text-end place-self-end">
                Advanced engineering for heavy-duty vehicles{" "}
              </div>
            </div>
          </div>
        </motion.div>
        {/* <motion.div
          className="text-3xl font-thin text-center"
          style={{ opacity }}
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition
        >
          <div className="h-1/2 w-full max-w-3xl overflow-y-scroll p-4 [&::-webkit-scrollbar]:w-1 scrollbar-track-gray-700">
            <video
              typeof="video/mp4"
              autoPlay
              muted
              loop
              preload="auto"
              className="h-full  w-86"
            >
              <source src={commercialAlpha} />
            </video>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default DummyHero;
