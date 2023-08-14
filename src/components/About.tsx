import { motion } from 'framer-motion';

const ABOUT_TEXT = `My name is Berkin Kınay. I live in 
İzmir, Turkey and I'm a Front-End Developer
with a couple of experience in last two years. My educational
programming career started in 2017 with basics of HTML, CSS,
JavaScript and I really love Computer Science. My interests
are new web technologies, creating products and also areas
related to deep learning and natural language processing.
My academic education process started in 2020. Whenever
possible, I also apply my passion for product development
with NodeJS and Modern JavaScript Library and Frameworks
such as React.js, Vue.js and Next.js. I am always open to
new opportunities and cooperation, so feel free to contact me.`;

const About = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <h1 className='font-normal text-2xl text-pink-200'> About Me </h1> 
        <div className='flex text-lg text-slate-300 text-left font-normal ml-1 mt-3'> 
          <motion.p
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1.1 }}
            transition={{ delay: 0.8 }}
            class="leading-9"
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>
    </div>
  )
}
export default About;