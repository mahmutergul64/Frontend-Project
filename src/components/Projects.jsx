import { useContext, useState } from "react";
import { SiteContext } from "../context/SiteContext";

function ProjectCard({ project, language }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="h-64 w-full mb-6 rounded-lg overflow-hidden shadow-lg bg-[#DDEAFE] dark:bg-gray-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        /> 
      </div>

      <div className="flex flex-col flex-1 space-y-4">
        <h3 className="text-3xl font-bold text-[#4731D3] dark:text-[#CFCBFF]">
          {project.title}
        </h3>
        
        <div>
          <p className={`text-gray-500 dark:text-gray-400 text-base leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-semibold text-[#3730A3] dark:text-[#CFCBFF] mt-1 underline hover:no-underline"
          >
            {isExpanded 
              ? (language === 'tr' ? 'Daha az göster' : 'Show less') 
              : (language === 'tr' ? '...Daha fazla göster' : '...Read more')}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-1 pb-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-5 py-1.5 rounded-[4px] text-sm font-medium border border-[#3730A3] text-[#3730A3] dark:border-[#8F88FF] dark:text-[#8F88FF] bg-white dark:bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-2">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#3730A3] dark:text-[#CFCBFF] font-semibold underline underline-offset-4 hover:no-underline "
          >
            Github
          </a>
          <a 
            href={project.viewLink} 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#3730A3] dark:text-[#CFCBFF] font-semibold underline underline-offset-4 hover:no-underline"
          >
            {language === 'tr' ? 'Siteye Git' : 'View Site'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { content, language } = useContext(SiteContext);
  const { title, items } = content.projects;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12">
            {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((project, index) => (
            <ProjectCard key={index} project={project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}