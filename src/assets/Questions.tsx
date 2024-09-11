import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Questions = () => {
  const questionLeft = [
    {
      title: 'Non consectetur a erat nam at lectus urna duis?',
      content:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      title: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
      content:
        'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
    },
    {
      title: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
      content:
        'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
    },
  ];

  const questionRight = [
    {
      title: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
      content:
        'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
    },
    {
      title: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
      content:
        'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in',
    },
    {
      title: 'Perspiciatis quod quo quos nulla quo illum ullam?',
      content:
        'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.',
    },
  ];

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
          Frequently Asked Questions
        </span>
        <span>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </span>
      </motion.section>
      <section className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 mt-10 gap-3">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          {questionLeft.map((item, index, array) => (
            <section
              className={`w-full bg-white border-[1px] border-black/12 p-4 rounded-md ${
                array.length - 1 === index ? '' : 'mb-3'
              }`}
              key={index}
            >
              <label className="peer flex justify-between items-center text-fontText">
                <input type="checkbox" className="scale-0 hidden peer"></input>
                <span className="peer-checked:text-orange-500 font-semibold">
                  {item.title}
                </span>
                <FontAwesomeIcon
                  icon={'angle-right'}
                  className="peer-checked:hidden"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={'chevron-down'}
                  className="peer-checked:text-orange-500 peer-checked:block hidden"
                ></FontAwesomeIcon>
              </label>
              <motion.label
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                className="peer-has-[:checked]:block peer-has-[:checked]:mt-3 hidden"
              >
                {item.content}
              </motion.label>
            </section>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {questionRight.map((item, index, array) => (
            <section
              className={`w-full bg-white border-[1px] border-black/12 p-4 rounded-md ${
                array.length - 1 === index ? '' : 'mb-3'
              }`}
              key={index}
            >
              <label className="peer flex justify-between items-center text-fontText">
                <input type="checkbox" className="scale-0 hidden peer"></input>
                <span className="peer-checked:text-orange-500 font-semibold">
                  {item.title}
                </span>
                <FontAwesomeIcon
                  icon={'angle-right'}
                  className="peer-checked:hidden"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={'chevron-down'}
                  className="peer-checked:text-orange-500 peer-checked:block hidden"
                ></FontAwesomeIcon>
              </label>
              <motion.label
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                className="peer-has-[:checked]:block peer-has-[:checked]:mt-3 hidden"
              >
                {item.content}
              </motion.label>
            </section>
          ))}
        </motion.section>
      </section>
    </div>
  );
};

export default Questions;
