import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariables = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="inline-block w-full p-12 bg-bgColor">
      <motion.div
        variants={footerVariables}
        initial="hidden"
        whileInView="visible"
        className="grid lg:grid-cols-12 lg:grid-rows-1 lg:gap-0 sm:grid-cols-2 sm:grid-rows-2 gap-8"
      >
        <section className="lg:col-span-3 col-span-1">
          <div className="flex justify-between flex-col gap-5">
            <span className="text-xl font-semibold">Ninestars</span>
            <section className="flex flex-col">
              <span>A108 Adam Street</span>
              <span>New York, NY 535022</span>
            </section>
            <section className="flex flex-col">
              <span>
                <span className="font-bold">Phone:</span> +1 5589 55488 55
              </span>
              <span>
                <span className="font-bold">Email:</span> 999@ninestars.com
              </span>
            </section>
          </div>
        </section>
        <div className="lg:col-span-2 col-span-1">
          <span className="text-fontText font-bold">Useful Links</span>
          <ul className="flex flex-col gap-3 pl-2 mt-3">
            <li>
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Home
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              About us
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Services
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Terms of service
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 col-span-1">
          <span className="text-fontText font-bold">Our Services</span>
          <ul className="flex flex-col gap-3 pl-2 mt-3">
            <li>
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Web Design
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Web Development
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Product Management
            </li>
            <li>
              {' '}
              <FontAwesomeIcon
                icon={'chevron-right'}
                className="text-orange-500 mr-2"
              />
              Marketing
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <span className="text-fontText font-bold">Follow Us</span>
          <section className="flex flex-col gap-3 mt-3">
            <span>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </span>
            <div className="flex sm:gap-4 gap-3 items-center">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="p-3 outline-1 outline-gray-400 outline rounded-full "
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="p-3 outline-1 outline-gray-400 outline rounded-full "
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="p-3 outline-1 outline-gray-400 outline rounded-full "
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="p-3 outline-1 outline-gray-400 outline rounded-full "
              />
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
