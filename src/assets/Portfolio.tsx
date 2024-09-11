import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  itemData: any[];
};

const Portfolio = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemHoverTitle, setItemHoverTitle] = useState('');
  const [itemsPorfolio, setItemsPorfolio] = useState<any[]>(props.itemData);

  const handlerClickActive = (title: any, n: any) => {
    setActiveIndex(n);

    if (title !== 'All') {
      const findTitle = props.itemData.filter((item) =>
        item.Title.includes(title)
      );

      setItemsPorfolio(findTitle.map((item) => ({ ...item })));
    } else setItemsPorfolio(props.itemData.map((item) => ({ ...item })));
  };

  const handlerMouseEnterActive = (activeTitle: any) => {
    setItemHoverTitle(activeTitle);
  };

  const handlerMouseLeaveActive = () => {
    setItemHoverTitle('');
  };

  const porfolioTitle = ['All', 'App', 'Book', 'Branding', 'Product'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="inline-block w-full h-full p-12">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          type: 'spring',
          stiffness: 70,
          damping: 10,
        }}
        className="flex flex-col items-center relative gap-10"
      >
        <span className='text-fontText text-4xl font-bold after:content-[""] after:bg-orange-500 after:w-[70px] after:h-[5px] after:block after:mx-auto after:absolute after:left-0 after:right-0 after:top-14'>
          Portfolio
        </span>
        <span>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </span>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          type: 'spring',
          stiffness: 70,
          damping: 10,
        }}
        className="mt-10 mb-5"
      >
        <div className="flex justify-center gap-7 ResponsiveSM:text-xl text-md font-semibold">
          {porfolioTitle.map((item, index) => (
            <span
              key={index}
              onClick={() => handlerClickActive(item, index)}
              className={`cursor-pointer ${
                index === activeIndex ? 'text-orange-400' : 'cursor-pointer'
              }`}
            >
              {item}
              {index === activeIndex ? (
                <motion.div
                  className='after:content-[""] after:block after:p-[0.1rem] after:mt-1 after:bg-orange-500'
                  layoutId="underline"
                ></motion.div>
              ) : null}
            </span>
          ))}
        </div>
      </motion.section>
      <motion.section
        key={activeIndex}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3"
      >
        {itemsPorfolio.map((profolio, index) => (
          <AnimatePresence key={index}>
            <motion.section
              variants={cardVariants}
              className="w-full h-full relative"
              onMouseEnter={() => handlerMouseEnterActive(profolio.Title)}
              onMouseLeave={() => handlerMouseLeaveActive()}
              key={index}
            >
              <img src={profolio.ImageSource} className="rounded-md"></img>
              {profolio.Title === itemHoverTitle ? (
                <div className="*:absolute">
                  <div className="h-full w-full top-0">
                    <section className="flex flex-col justify-between h-full p-4 bg-black/50 rounded-md">
                      <section>
                        <span className="bg-orange-500 py-2 px-2.5 text-white font-bold rounded-md">
                          {profolio.Title}
                        </span>
                      </section>
                      <section className="flex justify-center gap-5 text-white text-2xl">
                        <FontAwesomeIcon
                          icon="magnifying-glass-plus"
                          className="cursor-pointer hover:text-orange-500"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          icon="link"
                          className="cursor-pointer hover:text-orange-500"
                        ></FontAwesomeIcon>
                      </section>
                      <span className="text-center text-white font-semibold">
                        {profolio.Content}
                      </span>
                    </section>
                  </div>
                </div>
              ) : (
                ''
              )}
            </motion.section>
          </AnimatePresence>
        ))}
      </motion.section>
      {/* <button className='text-white text-2xl p-3 bg-blue-600 transition-all ease-in-out duration-300 rounded-xl mt-5'>Hover me</button> */}
    </div>
  );
};

export default Portfolio;
