import projectsData from "./projectsData";
import { motion } from 'framer-motion';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <>
      <span class='xl:text-2xl xl:text-2xl sm:text-sm xs:text-sm md:text-sm font-normal w-full object-left text-pink-200 indent-5'>Projects and Some Developer Experiments </span>
        <div class='flex flex-col items-center justify-center'>
          <div 
            class='2xl:!grid 2xl:!grid-cols-2 lg:!grid lg:!grid-cols-2 md:!flex md:flex-col md:!gap-48
                   xs:flex xs:flex-col xs:gap-36 place-items-center w-auto h-auto bg-black !gap-36 m-10'
          > 
             {projectsData.map((project, i) =>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: i * 0.4 }}
                  key={i} class='!flex lg:!flex lg:flex-col h-fit w-fit justify-center items-center'
                >
                <img
                  src={project.image}
                  alt={project.name}
                  class="w-auto h-auto object-cover flex flex-cols-2 rounded-lg"
                />
                    <motion.div
                      initial={{ opacity: 0 }}x
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      class='flex absolute z-50 justify-center items-center 2xl:h-64 lg:h-28 xl:h-72 2xl:w-[500px]
                             bg-blue text-white bg-black bg-opacity-70 rounded-2xl xl:w-[480px]'
                    >
                      <div class="flex flex-col justify-center items-center gap-4 text-white">
                        <h3 class="text-xl font-medium">{project.name}</h3>
                        <p class="text-base font-medium text-center w-56">{project.description}</p>
                        <div class="flex gap-3">
                          <button
                            class='text-sm text-center p-2 bg-black text-red rounded-lg hover:bg-blue
                                  hover:text-blue-500 transition duration-100 cursor-pointer'
                            onClick={() => window.open(project.projectLink)}
                          >
                            <AiOutlineLink size={20} />
                          </button>
                          <button
                            class='text-sm text-center p-2 bg-black text-red rounded-lg hover:bg-blue
                                  hover:text-blue-500 transition duration-100 cursor-pointer'
                                  onClick={() => window.open(project.link)}
                          >
                            <AiFillGithub size={20} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                </motion.div>
              )}
          </div>
          <div><Divider /></div>
        </div>
    </>
  )
}

const Divider = () => <hr class='flex 2xl:w-full lg:w-auto border border-pink-200 rounded-full mx-2' />;

export default Projects;
