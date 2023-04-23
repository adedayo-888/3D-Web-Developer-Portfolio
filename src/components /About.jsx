import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles';

import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div variants={fadeIn('left', 'spring', 0.1, 1)} className='mt-8'>
        <img
          src='/dayo.jpg'
          alt='mypic'
          className='w-[300px] h-[300px] object-cover rounded-3xl flex justify-center items-center'
        />
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a Full Stack Web Developer, I have experience with both front-end and
        back-end development technologies, and I focus on building responsive
        and dynamic web apps. My expertise in back-end programming includes
        Node.js, Express.js, and database administration with MongoDB, while my
        expertise in front-end development includes HTML, CSS, JavaScript, and
        React. With the aid of programmes like Git, GitHub, and Heroku, I am
        also skilled in project management, version control, and deployment. I
        am passionate about developing high-quality online apps that are
        user-friendly, scalable, and maintainable and have experience working on
        projects of different complexity.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
