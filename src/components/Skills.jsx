import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export default function Skills() {
  const { content } = useContext(SiteContext);
  const { title, items } = content.skills;

  return (
      <section id="skills" className="py-14">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-[#AEBCCF] mb-8">{title}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-medium text-primary dark:text-[#B7AAFF] mb-2">
              {item.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-10 border-gray-200 dark:border-gray-700" />
    </section>
  );
}