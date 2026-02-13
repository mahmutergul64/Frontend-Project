import { useContext } from "react";
import { SiteContext } from "./context/SiteContext.jsx";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const { theme, handleThemeChange, language, handleLanguageChange } = useContext(SiteContext);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-darkBg' : 'bg-white'}`}>
      
      <div className="container mx-auto px-4 max-w-6xl">
        
        <header className="py-8">
           
           <div className="flex justify-end items-center gap-6 mb-8">
              
              <div 
                onClick={handleThemeChange} 
                className="flex items-center gap-2 font-bold text-xs tracking-widest text-gray-600 dark:text-gray-300 cursor-pointer select-none"
              >
                  <div className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 
                      ${theme === 'dark' ? 'bg-[#3730A3] justify-end' : 'bg-gray-300 justify-start'}`}>
                      
                      <div className={`w-4 h-4 rounded-full shadow-md transform duration-300 flex items-center justify-center
                          ${theme === 'dark' ? 'bg-white' : 'bg-yellow-300'}`}>
                          
                          {theme === 'dark' ? (
                            <FaMoon className="text-gray-700 text-[10px]" /> 
                          ) : (
                            <FaSun className="text-gray-700 text-[10px]" />
                          )}

                      </div>
                  </div>
                  
                  <span>{theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE'}</span>
              </div>

              <span className="text-gray-400">|</span>

              <button 
                onClick={handleLanguageChange} 
                className="font-bold text-xs tracking-widest text-primary dark:text-[#B794F4] hover:opacity-80 transition"
              >
                 {language === 'tr' ? (
                   <><span className="text-gray-600 dark:text-gray-300">İNGİLİZCE</span>'YE GEÇ</>
                 ) : (
                   <><span className="text-gray-600 dark:text-gray-300">TÜRKÇE</span>'YE GEÇ</>
                 )}
              </button>

           </div>

           <div className="flex justify-between items-center">
              
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#EEEBFF] dark:bg-[#4731D3] text-[#7B61FF] dark:text-[#AEDDFF] flex items-center justify-center font-bold text-2xl transform rotate-[18deg] shadow-sm">
                  M
              </div>

              <nav className="flex flex-col md:flex-row gap-6 items-center md:flex items-center gap-12 font-medium text-[#6B7280] dark:text-gray-400 text-lg">
                  <a href="#skills" className="hover:text-[#3730A3] dark:hover:text-[#AEDDFF] transition">Skills</a>
                  <a href="#projects" className="hover:text-[#3730A3] dark:hover:text-[#AEDDFF] transition">Projects</a>
                  
                  <a 
                    href="https://www.linkedin.com/in/enes-undefined-56390134a/" 
                    className="border border-[#3730A3] text-[#3730A3] dark:border-white dark:bg-indigo-50 dark:text-[3730A3] px-8 py-3 rounded-[6px] hover:bg-indigo-50 dark:hover:bg-gray-800 transition bg-white dark:bg-transparent font-medium "
                  >
                      Hire me
                  </a>
              </nav>

           </div>

        </header>

        <main>
            <Hero />
            <Skills />
            <Profile />
            <Projects />
        </main>

      </div>
      
      <Footer />
      
    </div>
  )
}

export default App;