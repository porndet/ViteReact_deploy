import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroImage from '/images/hero-img.svg';
import { motion } from 'framer-motion';

const Content1 = () => {
  return (
    <div className="w-full h-[30rem] bg-bgColor grid grid-rows-2 grid-cols-1 navbarhidden:grid-rows-1 navbarhidden:grid-cols-2 px-12 gap-4 navbarhidden:py-12 py-2 shadow-sm shadow-orange-300 mt-0.5">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="flex justify-center flex-col"
      >
        <span className="text-fontText text-3xl sm:text-4xl font-bold pb-3 md:tex-5xl">
          Bettter digital experience with Ninestars
        </span>
        <span className="text-md md:text-xl pb-3">
          We are team of talented designers making websites with Bootstrap
        </span>
        <div className="flex items-center gap-4 justify-center navbarhidden:justify-start">
          <button className="bg-orange-600 md:px-5 md:py-2 rounded-full text-white md:text-lg px-3 py-2 text-md">
            Get Started
          </button>
          <button className="flex items-center gap-2 hover:text-orange-600 font-medium text-sm md:text-xl transition-all hover:scale-110">
            <FontAwesomeIcon
              icon="circle-play"
              className="text-2xl md:text-3xl text-orange-600"
            />
            Watch Video 1
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="inline-block w-full align-middle items-center"
      >
        <img
          src={heroImage}
          className=" animate-updown hover:scale-110 inline-block h-full w-full xl:w-[35rem]"
        ></img>
      </motion.div>
    </div>
  );
};

export default Content1;
