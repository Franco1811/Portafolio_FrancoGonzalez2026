import Navbar from './components/Navbar';
import Hero from './sections/Hero'; 
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Contact />
      </main>
      
    </div>
  )
}

export default App