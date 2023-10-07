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
    <div class='flex flex-col w-auto h-full rounded-xl gap-10 p-10'>
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
