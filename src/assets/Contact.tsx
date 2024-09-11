import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Contact = () => {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 70,
        damping: 10,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 70,
        damping: 10,
        delayChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardInputVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="inline-block w-full h-full p-12 bg-white">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="flex flex-col items-center relative gap-10"
      >
        <span className='text-fontText text-4xl font-bold after:content-[""] after:bg-orange-500 after:w-[70px] after:h-[5px] after:block after:mx-auto after:left-0 after:right-0 after:bottom-0 after:mt-3 text-center'>
          Contact
        </span>
        <span>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </span>
      </motion.section>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <motion.section
          initial={'hidden'}
          whileInView={'visible'}
          variants={cardVariantsLeft}
          className="border-y-4 border-y-orange-500 border-x-black shadow-boxContact mt-12 p-5 flex flex-col gap-12 justify-center"
        >
          <div className="flex sm:gap-5 sm:items-center group/item rounded-lg px-3 sm:flex-row flex-col gap-2">
            <motion.div
              variants={iconVariants}
              className="bg-iconColor rounded-full flex justify-center items-center group-hover/item:bg-orange-500 w-10 h-10"
            >
              <FontAwesomeIcon
                icon="location-dot"
                className="text-center text-orange-500 group-hover/item:text-white w-full"
              ></FontAwesomeIcon>
            </motion.div>
            <motion.section variants={textVariants} className="flex flex-col">
              <span className="text-fontText text-lg font-bold">Address</span>
              <span>A108 Adam Street, New York, NY 535022</span>
            </motion.section>
          </div>
          <div className="flex sm:gap-5 sm:items-center group/item rounded-lg px-3 sm:flex-row flex-col gap-2">
            <motion.div
              variants={iconVariants}
              className="bg-iconColor rounded-full flex justify-center items-center group-hover/item:bg-orange-500 w-10 h-10"
            >
              <FontAwesomeIcon
                icon="phone"
                className="text-center w-full text-orange-500 group-hover/item:text-white"
              ></FontAwesomeIcon>
            </motion.div>
            <motion.section variants={textVariants} className="flex flex-col">
              <span className="text-fontText text-lg font-bold">Call Us</span>
              <span>+1 5589 55488 55</span>
            </motion.section>
          </div>
          <div className="flex sm:gap-5 sm:items-center group/item rounded-lg px-3 sm:flex-row flex-col gap-2">
            <motion.div
              variants={iconVariants}
              className="bg-iconColor rounded-full flex justify-center items-center group-hover/item:bg-orange-500 w-10 h-10"
            >
              <FontAwesomeIcon
                icon="envelope"
                className="text-center w-full text-orange-500 group-hover/item:text-white"
              ></FontAwesomeIcon>
            </motion.div>
            <motion.section variants={textVariants} className="flex flex-col">
              <span className="text-fontText text-lg font-bold">Email Us</span>
              <span>info@example.com</span>
            </motion.section>
          </div>
        </motion.section>
        <motion.section
          initial={'hidden'}
          whileInView={'visible'}
          variants={cardVariantsRight}
          className="border-y-4 border-y-orange-500 border-x-black shadow-boxContact lg:mt-12 p-5 flex flex-col gap-12"
        >
          <motion.div
            variants={cardInputVariants}
            className="flex justify-between flex-col gap-6 text-lg"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <span className="">Your Name</span>
                <input className="w-full h-12 p-3  border-2 focus:outline-orange-500 rounded-md"></input>
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Your Email</span>
                <input className="w-full h-12 p-3 border-2 focus:outline-orange-500 rounded-md"></input>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="">Subject</span>
              <input className="w-full h-12 p-3  border-2 focus:outline-orange-500 rounded-md"></input>
            </div>
            <div className="flex flex-col gap-2">
              <span className="">Message</span>
              <textarea className="border-2 rounded-md p-3 focus:outline-orange-500"></textarea>
            </div>
            <motion.div variants={textVariants} className="flex justify-center">
              <button className="bg-orange-500 px-7 py-2 rounded-3xl text-white hover:bg-orange-500/70">
                Message
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
