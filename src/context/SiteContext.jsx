import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { data } from "../data";
import { toast } from 'react-toastify';

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "tr");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLanguageChange = () => {
    const newLang = language === "tr" ? "en" : "tr";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    
    axios.post('https://jsonplaceholder.typicode.com/posts', { lang: newLang })
      .then((res) => {
         console.log("Dil tercihi sunucuya iletildi:", res.data);
         toast.success(newLang === 'tr' ? "Dil Türkçe oldu" : "Language changed to English");
      })
      .catch((err) => {
        console.error("API hatası:", err);
        toast.error("Dil değiştirilirken bir hata oluştu");
      });
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <SiteContext.Provider
      value={{
        theme,
        language,
        handleThemeChange,
        handleLanguageChange,
        content: data[language]
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};