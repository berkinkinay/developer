import techstackData from "./techstackData";
import  { motion } from 'framer-motion';

const Skills = () => {
    return ( 
      <>
        <h1 class='flex text-pink-200 text-2xl font-normal indent-5'>My Tech Stack and Skills </h1>
        <div 
          class='w-full h-auto grid grid-cols-4 place-items-center text-4xl
                 text-white divide-b-4 divide-white bg-gradient-to-r from-green-900
                 via-black to-black rounded-xl gap-10 p-[25px]'
        >
           {techstackData.frontend.map((skill, key) => {
            return (
              <motion.div
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: key * 0.03, duration: 0.02 }}
                key={key} 
                class='flex flex-col items-center hover:!scale-125 !duration-200 md:!duration-25 xs:!duration-25'
              >
                <img
                  key={key}
                  src={skill.icon}
                  alt={skill.name}
                  class="w-12 h-12 object-cover"
                />
                <div className='text-base'>{skill.name}</div>
              </motion.div>
            );
           })}
        </div>
        <h2 class='flex text-pink-200 text-2xl font-norma5 indent-5'> Tools I use</h2>
        <div class='w-full h-fit grid grid-cols-4 place-items-center text-center text-white'>
           {techstackData.tools.map((skill, key) => {
            return (
              <motion.div
                initial={{ opacity: 0.9 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: key * 0.03, duration: 0.2 }}
                key={key} 
                class='flex flex-col items-center hover:!scale-125 !duration-200 md:!duration-25 xs:!duration-25'
              >
                  <img
                    key={key}
                    src={skill.icon}
                    alt={skill.name}
                    class="w-12 h-12 object-cover"
                  />
                <div class='text-base'>{skill.name}</div>
              </motion.div>
            );
           })}
        </div>
      </>
    );
};
export default Skills;
