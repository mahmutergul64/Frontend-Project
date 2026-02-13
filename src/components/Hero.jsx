import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import heroImage from "../assets/images/hero.png"; 

export default function Hero() {
  const { content } = useContext(SiteContext);
  const { name, title, description, cta, github, linkedin, githubLink, linkedinLink } = content.hero;

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-14">
      <div className="flex-1 space-y-6 text-left">
        
        <h3 className="text-lg font-medium text-[#4338CA] dark:text-[#BAB2E7] flex items-center gap-2 ">
             <span className="inline-block w-10 h-[1px] bg-[#4338CA] dark:bg-[#B794F4]"></span> {name}
        </h3>
        
        <h1 className="text-4xl md:text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF] leading-tight">
          {title}
        </h1>
        
        <p className="text-[#6B7280] dark:text-gray-400 text-lg leading-relaxed max-w-lg ">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4 justify-start">
          
          <a 
            href="https://www.linkedin.com/in/enes-undefined-56390134a/" 
            className="bg-[#3730A3] text-white border border-[#3730A3] px-8 py-3 rounded-[6px] shadow hover:bg-[#312E81] transition font-medium text-lg flex items-center justify-center dark:bg-[#E1E1FF] dark:text-black dark:border-[#E1E1FF] dark:hover:bg-white"
          >
            {cta}
          </a>

          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white dark:bg-transparent text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] pl-4 pr-12 py-3 rounded-[6px] flex items-center justify-start gap-3 hover:bg-indigo-50 dark:hover:bg-gray-800 transition font-medium text-lg min-w-[160px]"
          >
            <FaGithub className="text-3xl" /> 
            <span>{github}</span>
          </a>

          <a 
            href={linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white dark:bg-transparent text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] pl-4 pr-12 py-3 rounded-[6px] flex items-center justify-start gap-3 hover:bg-indigo-50 dark:hover:bg-gray-800 transition font-medium text-lg min-w-[160px]"
          >
             <FaLinkedinIn className="text-3xl" />
             <span>{linkedin}</span>
          </a>

        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <img 
            src={heroImage} 
            alt="Profile" 
            className="w-full max-w-md h-auto rounded-3xl shadow-[0_20px_50px_rgba(71,49,211,0.3)] object-cover" 
        />
      </div>
    </section>
  );
}