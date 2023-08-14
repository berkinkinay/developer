import { motion } from 'framer-motion';

const LAST_TEXT = `Since I started my developer career, I’ve usually worked on Front-End
development but I can optimize your applications and provide high performance side by side.
I also code and improve my programming skills to build clean structure with elegant code for
Back-End and Server-side development with TypeScript and Node.js. I prefer to use Redux to
manage state during development process. I love writing user interfaces and working on CSS
architecture with clean code. I mostly coding in React library with TypeScript. I prefer the
best UI, UX for users. I love writing user interfaces and working in pure CSS and CSS libraries
like Styled-Components, SaSS,TailwindCSS architecture with clean code. I actually like to use
some animation libraries too like Framer Motion.`;

const Context = () => {
  return (
    <div className='flex text-lg text-gray-200 text-left font-normal ml-2 mt-3'>
    <motion.p
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1.1 }}
        transition={{ delay: 0.5 }}
        class="leading-9"
    >       
        {LAST_TEXT}
    </motion.p>
    </div>
  )
}
export default Context;