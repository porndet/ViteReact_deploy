import Team1 from '/images/team-1.jpg';
import Team2 from '/images/team-2.jpg';
import Team3 from '/images/team-3.jpg';
import Team4 from '/images/team-4.jpg';
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Team = ({ refTeam }: any) => {
  const teamImage = [
    {
      name: 'Walter White',
      work: 'Chief Executive Officer',
      image: Team1,
    },
    {
      name: 'Sarah Jhonson',
      work: 'Product Manager',
      image: Team2,
    },
    {
      name: 'William Anderson',
      work: 'CTO',
      image: Team3,
    },
    {
      name: 'Amanda Jepson',
      work: 'Accountant',
      image: Team4,
    },
  ];

  const teamVariables = {
    visible: (i: any) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div ref={refTeam} className="inline-block w-full h-full p-12 bg-white">
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
        className="flex flex-col items-center relative gap-7"
      >
        <span className='text-fontText text-4xl font-bold after:content-[""] after:bg-orange-500 after:w-[70px] after:h-[5px] after:block after:mx-auto after:left-0 after:right-0 after:bottom-0 after:mt-3 text-center'>
          Teams
        </span>
        <span className="mb-8">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </span>
      </motion.section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-5">
        {teamImage.map((item, index) => (
          <motion.section
            custom={index}
            initial={'hidden'}
            variants={teamVariables}
            whileInView={'visible'}
            className="group relative"
            key={index}
          >
            <div className="group-hover:absolute group-hover:block hidden bg-black/20 h-full w-full rounded-md">
              <div className="bg-black/50 absolute h-full w-[40px] rounded-s-md">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                  }}
                  className="flex justify-center flex-col text-white gap-5 text-xl h-full"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="hover:text-orange-500 hover:cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover:text-orange-500 hover:cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-orange-500 hover:cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-orange-500 hover:cursor-pointer"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                className="flex justify-end items-center flex-col text-white absolute bottom-5 left-0 right-0"
              >
                <span className="font-bold text-lg max-[1140px]:text-sm max-lg:text-lg max-[816px]:text-sm max-md:text-lg">
                  {item.name}
                </span>
                <span className="text-lg max-[1140px]:text-sm max-lg:text-md">
                  {item.work}
                </span>
              </motion.div>
            </div>
            <img src={item.image} className="rounded-md"></img>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Team;
