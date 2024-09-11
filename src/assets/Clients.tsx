import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperstyle.css';
import { motion } from 'framer-motion';

const Clients = () => {
  const imageBrands = [
    'images/client-1.png',
    'images/client-2.png',
    'images/client-3.png',
    'images/client-4.png',
    'images/client-5.png',
    'images/client-6.png',
    'images/client-7.png',
    'images/client-8.png',
  ];
  // const [indexPage, setIndexPage] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (indexPage === 4) setIndexPage(0);
  //     else setIndexPage((t) => t + 1);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // });

  return (
    <div className="inline-block w-full h-full p-12 bg-bgColor">
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
        className="flex flex-col items-center relative gap-10"
      >
        <span className='text-fontText text-4xl font-bold after:content-[""] after:bg-orange-500 after:w-[70px] after:h-[5px] after:block after:mx-auto after:left-0 after:right-0 after:bottom-0 after:mt-3 text-center'>
          Clients
        </span>
        <span>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </span>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          type: 'spring',
          stiffness: 70,
          damping: 7,
        }}
      >
        <Swiper
          breakpoints={{
            1000: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            520: {
              slidesPerView: 3,
              spaceBetween: 13,
            },
            200: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mywswiper"
          pagination={{ clickable: true }}
        >
          {imageBrands.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="block xl:w-[220px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[95px] opacity-60 hover:opacity-100 hover:cursor-pointer hover:animate-scaleLogo"
                src={image}
                alt="Image Logo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </div>
  );
};

export default Clients;
