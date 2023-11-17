import Me from '../assets/Me.png';
import { GrMail } from 'react-icons/gr';
import { TbFileDownload } from 'react-icons/tb';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
 
const sequences = [
  'Front-End Developer',
    1500,
  'Software Developer',
    2000,
  'Web Developer',
   1500,
];

const Developer = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'
    link.download = 'cv.pdf';
    link.dispatchEvent(new MouseEvent('click'));
}
  return (
    <>
     <motion.div
       initial={{ opacity: 1 }}
       whileInView={{ opacity: 1.1 }}
       transition={{ delay: 0.01, duration: 0.4 }}
       class='!grid 2xl:grid-cols-2 lg:grid lg:grid-rows w-full h-auto
               text-white xl:!duration-150 md:!duration-25 xs:!duration-25'
      >
          <div className='flex rounded-xl p-12 items-center justify-center'>
              <img
                class='2xl:h-[290px] md:h-[230px] sm:h-[190px] rounded-2xl
                       border-2 border-slate-200 hover:border-green-400 
                       shadow-lg shadow-indigo-500/30'
                src={Me} 
                alt='' 
              /> 
          </div>
          <div class='xl:!flex xl:!items-left flex-col xs:flex xs:items-center xs:justify-center font-normal'>
          <div class='flex items-left font-normal text-3xl text-gray-400'> Hello <span class='wave'>👋🏻</span> </div>
            <span class='text-4xl font-normal text-slate-300'>I'm Berkin</span>
            <div>
              <div 
                className='!flex xl:text-xl !text-4xl !font-light md:text-lg text-pink-200'
              >
                <TypeAnimation
                  sequence={sequences}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className='flex flex-cols-2 lg:flex lg-flex-col justify-center items-center w-full mt-4 2xl:gap-10 xl:gap-10 lg:gap-10 sm:gap-3 xs:gap-5'>
              <button 
                className='flex px-2 items-center justify-center flex-cols-1 gap-3 text-sm w-[180px] 
                          rounded-xl h-fit hover:text-white hover:bg-pink-500 bg-white
                          text-black hover:transform hover:-translate-y-0.3 transition-all'
                onClick={handleDownload}
              >
                <TbFileDownload size='1.4rem' />
                Download Resume
              </button>
              <button 
                class='flex px-5 items-center justify-center flex-cols-1 gap-3 text-sm
                          w-[150px] rounded-lg h-fit hover:text-white hover:bg-pink-500
                          bg-white text-black hover:transform hover:-translate-y-0.3 transition-all' 
                onClick={() => {
                  window.location.href = 'mailto:helloberkin@gmail.com';
                }}
              >
                <GrMail size='1.2rem' />
                Contact me
              </button>
            </div>
          </div>
      </motion.div>
    </>
  )
}
export default Developer;
