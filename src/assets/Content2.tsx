import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImg from '/images/about-img.svg';
import { motion } from 'framer-motion';

const Content2 = () => {
  return (
    <div className="navbarfont:grid block grid-rows-2 grid-cols-1 navbarfont:grid-cols-2 navbarfont:grid-rows-1 px-12  py-3 navbarfont:py-12 gap-4">
      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="inline-block w-full navbarfont:h-full h-[50%]"
      >
        <img
          src={aboutImg}
          className="h-full w-full inline-block align-middle"
        ></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="flex flex-col justify-center gap-3 lg:gap-4 xl:gap-7"
      >
        <section className="flex flex-col">
          <span className="text-2xl xl:text-3xl font-bold text-fontText pb-2">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </span>
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </section>
        <section className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={'network-wired'}
            className=" bg-orange-600 text-white text-xl lg:text-2xl p-2 lg:p-4 rounded-lg"
          ></FontAwesomeIcon>
          <div className="flex flex-col lg:gap-2">
            <span className="text-lg font-semibold text-fontText">
              Ullamco laboris nisi ut aliquip consequat
            </span>
            <span className="">
              Magni facilis facilis repellendus cum excepturi quaerat
              praesentium libre trade
            </span>
          </div>
        </section>
        <section className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={'heart'}
            className=" bg-orange-600 text-white text-xl lg:text-2xl p-2.5 lg:p-[1.1rem] rounded-lg"
          ></FontAwesomeIcon>
          <div className="flex flex-col lg:gap-2">
            <span className="text-lg font-semibold text-fontText">
              Magnam soluta odio exercitationem reprehenderi
            </span>
            <span className="">
              Quo totam dolorum at pariatur aut distinctio dolorum laudantium
              illo direna pasata redi
            </span>
          </div>
        </section>
        <section>
          <span className="lg:text-[16px] text-sm">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </span>
        </section>
      </motion.div>
    </div>
  );
};

export default Content2;
