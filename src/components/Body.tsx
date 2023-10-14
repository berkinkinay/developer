import Developer from './Developer';
import About from './About';
import Skills from './Skills';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Context from './Context';
import LastText from './LastText';

const Body = () => {
  return (
    <div 
      class='flex flex-col items-center justify-center 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto xs:w-fit h-full rounded-xl gap-10 p-10 lg:p-10 sm:m-0 sm:p-0 xs:p-0'
    >
        <Header />
        <Developer />
        <About />
        <Skills />
        <Context />
        <Projects />
        <LastText />
        <Footer />       
    </div>
  )
}
export default Body;
