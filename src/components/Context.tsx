import { motion } from 'framer-motion';

const DEV_TEXT = `I can optimize your applications and provide high-performance.
I work on JavaScript technologies mostly. I'm also coding to create clean build with elegant code for Backend 
and Server-side development with TypeScript and NodeJS. I love writing user
interfaces and working on CSS architecture with clean code. I prefer to use Redux to 
state management in the development process.`;

const Context = () => {
  return (
    <> 
      <div className='flex flex-col text-lg text-gray-200 text-left font-normal ml-2 mt-3'>
        <motion.p
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            animate={{ opacity: 1.1 }}
            transition={{ delay: 0.5 }}
            class="leading-9"
        >       
            {DEV_TEXT}
        </motion.p>
      </div>
      <div><Divider /></div>
    </>
  )
}

const Divider = () => <hr class='flex 2xl:w-full lg:w-auto border border-pink-200 rounded-full mx-2' />;

export default Context;