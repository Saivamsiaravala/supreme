import passengerAlpha from "./../assets/Passenger Alpha 1.mp4";
import commercialAlpha from "./../assets/Commercial Alpha.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Hero2 = () => {
  const { scrollY } = useScroll(); // Track scroll position

  // Map scroll position to opacity (fades out as you scroll up)
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 2000);
  }, []);
  return (
    <div className="bg-black overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-black   text-white h-screen flex justify-center pt-10 text-3xl ">
      <div className="  flex flex-col items-center w-[500px] font-light  ">
        <div>
          <motion.div
            className="text-3xl font-thin text-center"
            initial={{ y: "30vh", opacity: 1 }} // Start position (below)
            animate={animate ? { y: 0, opacity: 1 } : {}} // Moves up to position
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition
          >
            Evolving the drive with{" "}
            <strong className="font-bold">360-degree</strong>
            <div>nonwoven solutions </div>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            className="text-3xl font-thin text-center"
            style={{ opacity }}
          >
            <div className="h-screen w-full max-w-3xl overflow-y-scroll p-4 [&::-webkit-scrollbar]:w-1 scrollbar-track-gray-700">
              {/* Scrollable Content */}
              <video
                typeof="video/mp4"
                autoPlay
                muted
                loop
                preload="auto"
                className="h-80  "
              >
                <source src={passengerAlpha} />
              </video>
            </div>
          </motion.div>
          <motion.div
            className="text-3xl font-thin text-center"
            style={{ opacity }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition
          >
            <div className="h-screen w-full max-w-3xl overflow-y-scroll p-4 [&::-webkit-scrollbar]:w-1 scrollbar-track-gray-700">
              <video typeof="video/mp4" autoPlay muted loop preload="auto">
                <source src={commercialAlpha} />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
