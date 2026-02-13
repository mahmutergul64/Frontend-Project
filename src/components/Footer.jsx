import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export default function Footer() {
  const { content } = useContext(SiteContext);
  const { title, email, links } = content.footer;

  return (
    <footer className="py-24 bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-end">
        
        <div className="space-y-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white max-w-lg leading-tight">
                {title}
            </h2>
            
            <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-2xl">👉</span>
                <a 
                    href={`mailto:${email}`} 
                    className="text-[#AF0C48] dark:text-[#FF5252] font-medium text-lg underline hover:no-underline transition-colors"
                >
                    {email}
                </a>
            </div>
        </div>

        <nav className="flex gap-8 mt-12 md:mt-0 font-medium text-lg">
            {links.map((link, index) => {
                let colorClass = "text-black dark:text-gray-200";
                
                if (link.name.toLowerCase().includes("github")) {
                    colorClass = "text-[#00AB6B] dark:text-[#00D98B]";
                } else if (link.name.toLowerCase().includes("linkedin")) {
                    colorClass = "text-[#0077B5] dark:text-[#4CA2CD]";
                }

                return (
                    <a 
                        key={index} 
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colorClass} hover:opacity-80 transition-opacity`}
                    >
                        {link.name}
                    </a>
                )
            })}
        </nav>

      </div>
    </footer>
  );
}