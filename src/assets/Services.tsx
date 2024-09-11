import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -70 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10,
      },
    },
  };

  return (
    <div className="inline-block bg-bgColor w-full h-full p-12">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 70,
          damping: 10,
        }}
        className="flex flex-col items-center relative gap-10"
      >
        <span className='text-fontText text-4xl font-bold after:content-[""] after:bg-orange-500 after:w-[70px] after:h-[5px] after:block after:mx-auto after:absolute after:left-0 after:right-0 after:top-14'>
          Services
        </span>
        <span>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </span>
      </motion.section>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView={'show'}
        className="grid lg:grid-flow-row lg:grid-cols-4 sm:grid-row-2 sm:grid-cols-2 grid-row-4 grid-cols-1 gap-5 mt-5"
      >
        <motion.div
          variants={cardVariants}
          className=" bg-white px-10 py-5 rounded-md w-full "
        >
          <section className="flex justify-center items-start flex-col gap-6 h-full">
            <FontAwesomeIcon
              icon="wave-square"
              className="text-orange-500 text-3xl"
            ></FontAwesomeIcon>
            <span className="font-bold text-fontText text-xl">Lorem Ipsum</span>
            <span>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </span>
          </section>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className=" bg-white px-10 py-5 rounded-md w-full"
        >
          <section className="flex justify-center items-start flex-col gap-6 h-full">
            <FontAwesomeIcon
              icon="users-rectangle"
              className="text-orange-500 text-3xl"
            ></FontAwesomeIcon>
            <span className="font-bold text-fontText text-xl">
              Sed ut perspici
            </span>
            <span>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </span>
          </section>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-white px-10 py-5 rounded-md w-full"
        >
          <section className="flex justify-center items-start flex-col gap-6 h-full">
            <FontAwesomeIcon
              icon="calendar"
              className="text-orange-500 text-3xl"
            ></FontAwesomeIcon>
            <span className="font-bold text-fontText text-xl">
              Magni Dolores
            </span>
            <span>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </span>
          </section>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className=" bg-white px-10 py-5 rounded-md w-full"
        >
          <section className="flex justify-center items-start flex-col gap-6 h-full">
            <FontAwesomeIcon
              icon="globe"
              className="text-orange-500 text-3xl"
            ></FontAwesomeIcon>
            <span className="font-bold text-fontText text-xl">Nemo Enim</span>
            <span>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </span>
          </section>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Services;
