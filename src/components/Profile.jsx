import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

export default function Profile() {
  const { content } = useContext(SiteContext);
  const { title, basicInfoTitle, basicInfo, aboutMeTitle, aboutDescription } = content.profile;

  return (
    <section className="py-14">
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-[#B7AAFF] mb-8">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white dark:bg-darkCard p-8 rounded-xl shadow-2xl border-l-8 border-primary dark:border-purple-400 relative z-10">
            <h3 className="text-2xl font-medium text-primary dark:text-[#B7AAFF] mb-6">
                {basicInfoTitle}
            </h3>
            <div className="space-y-4">
                {basicInfo.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-2">
                        <span className="font-bold text-gray-900 dark:text-gray-200 w-40">
                            {item.label}
                        </span>
                        <span className="text-gray-600 dark:text-gray-500 flex-1 text-lg">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        <div className="space-y-6">
            <div className="relative">
                <h3 className="text-2xl font-bold text-indigo-700 dark:text-gray-100 mb-4 z-10 relative">
                    {aboutMeTitle}
                </h3>
            </div>

            <div className="text-gray-500 dark:text-gray-400 leading-relaxed space-y-4 text-xl">
                {aboutDescription.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                ))}
            </div>
        </div>

      </div>
      <hr className="mt-12 border-gray-200 dark:border-gray-700" />
    </section>
  );
}