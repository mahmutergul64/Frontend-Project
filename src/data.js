import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";

export const data = {
  en: {
    hero: {
      name: "Mahmut Enes Ergül",
      title: "Creative thinker Minimalism lover",
      description: "Hi, I’m Mahmut Enes. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      cta: "Hire me",
      github: "Github",
      linkedin: "Linkedin",
      githubLink: "https://github.com/mahmutergul64",
      linkedinLink: "https://www.linkedin.com/in/mahmut-enes-ergul-56390134a/",
    },
    skills: {
      title: "Skills",
      items: [
        {
          name: "JavaScript",
          description: "I have strong proficiency in JavaScript, utilizing modern ES6+ features to build interactive and dynamic web applications."
        },
        {
          name: "React.Js",
          description: "Experienced in building reusable components, managing state with Redux/Context API, and optimizing application performance."
        },
        {
          name: "Node.Js",
          description: "Capable of building scalable backend services and RESTful APIs using Node.js and Express."
        }
      ]
    },
    profile: {
      title: "Profile",
      basicInfoTitle: "Basic Information",
      aboutMeTitle: "About Me",
      basicInfo: [
        { label: "Date of Birth", value: "20.10.2005" },
        { label: "City", value: "Istanbul" },
        { label: "Education", value: "Ataturk Univ. Computer Programming, 2024" },
        { label: "Preferred Role", value: "Frontend, UI" }
      ],
      aboutDescription: [
        "I am a passionate developer who loves to create clean and user-friendly interfaces.",
        "Always eager to learn new technologies and improve my skills to deliver the best results."
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Technological Meals",
          description: "A comprehensive educational platform designed to provide coding bootcamps. Built with React and Redux for state management.",
          tags: ["react", "redux", "axios"],
          githubLink: "https://github.com/mahmutergul64/fsweb-s8-challenge-pizza",
          viewLink: "https://fsweb-s8-challenge-pizza-six-theta.vercel.app/",
          image: project1 
        },
        {
          title: "Random Jokes",
          description: "A fun application that fetches random jokes from an external API. Demonstrates asynchronous data fetching and UI updates.",
          tags: ["react", "axios", "css"],
          githubLink: "#",
          viewLink: "#",
          image: project2
        },
        {
          title: "Journey",
          description: "A travel blog application where users can share their experiences. Features include routing and form handling.",
          tags: ["react", "router", "formik"],
          githubLink: "#",
          viewLink: "#",
          image: project3
        }
      ]
    },
    footer: {
      title: "Let’s work together on your next product.",
      email: "mahmutergul64@gmail.com",
      links: [
        { name: "Personal Blog", url: "https://seninsiten.com" },
        { name: "Github", url: "https://github.com/mahmutergul64" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/mahmut-enes-ergul-56390134a/" },
      ]
    }
  },
  tr: {
    hero: {
      name: "Mahmut Enes Ergül",
      title: "Yaratıcı düşünür Minimalizm sever",
      description: "Merhaba, ben Mahmut Enes. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri hazırlayacak bir geliştirici arıyorsanız, tanışalım.",
      cta: "Beni İşe Al",
      github: "Github",
      linkedin: "Linkedin",
      githubLink: "https://github.com/mahmutergul64",
      linkedinLink: "https://www.linkedin.com/in/mahmut-enes-ergul-56390134a/",
    },
    skills: {
      title: "Yetenekler",
      items: [
        {
          name: "JavaScript",
          description: "Etkileşimli ve dinamik web uygulamaları oluşturmak için modern ES6+ özelliklerini kullanarak JavaScript konusunda güçlü bir yetkinliğe sahibim."
        },
        {
          name: "React.Js",
          description: "Yeniden kullanılabilir bileşenler oluşturma, Redux/Context API ile durum yönetimi ve uygulama performansı optimizasyonu konularında deneyimliyim."
        },
        {
          name: "Node.Js",
          description: "Node.js ve Express kullanarak ölçeklenebilir backend servisleri ve RESTful API'ler oluşturabilirim."
        }
      ]
    },
    profile: {
      title: "Profil",
      basicInfoTitle: "Temel Bilgiler",
      aboutMeTitle: "Hakkımda",
      basicInfo: [
        { label: "Doğum Tarihi", value: "20.10.2005" },
        { label: "İkamet Şehri", value: "İstanbul" },
        { label: "Eğitim Durumu", value: "Atatürk Ünv. Bilgisayar Programcılığı, 2025" },
        { label: "Tercih Ettiği Rol", value: "Frontend, UI" }
      ],
      aboutDescription: [
        "Temiz ve kullanıcı dostu arayüzler oluşturmayı seven tutkulu bir geliştiriciyim.",
        "En iyi sonuçları sunmak için her zaman yeni teknolojiler öğrenmeye ve becerilerimi geliştirmeye hevesliyim."
      ]
    },
    projects: {
      title: "Projeler",
      items: [
        {
          title: "Teknolojik Yemekler",
          description: "Bu projede, React kütüphanesini kullanarak 'Teknolojik Yemekler' isminde, kullanıcı etkileşimi yüksek bir Single Page Application (SPA) geliştirdim. React Router ile sayfalar arası dinamik geçişleri sağlarken; form validasyonlarını ve state yönetimini, global bir araç kullanmadan saf Prop-Lifting tekniğiyle kurguladım. Kullanıcıdan alınan sipariş verilerini Axios aracılığıyla bir API'ye gönderip gelen yanıtı arayüze işledim ve son olarak Cypress ile formun uçtan uca (E2E) testlerini yazarak projenin kararlılığını garanti altına aldım.",
          tags: ["react", "redux", "axios"],
          githubLink: "https://github.com/mahmutergul64/fsweb-s8-challenge-pizza",
          viewLink: "https://fsweb-s8-challenge-pizza-six-theta.vercel.app/",
          image: project1
        },
        {
          title: "Random Jokes",
          description: "Harici bir API'den rastgele şakalar getiren eğlenceli bir uygulama. Asenkron veri çekme ve UI güncellemelerini gösterir.",
          tags: ["react", "axios", "css"],
          githubLink: "#",
          viewLink: "#",
          image: project2
        },
        {
          title: "Journey",
          description: "Kullanıcıların deneyimlerini paylaşabilecekleri bir seyahat blogu uygulaması. Yönlendirme ve form işlemleri içerir.",
          tags: ["react", "router", "formik"],
          githubLink: "#",
          viewLink: "#",
          image: project3
        }
      ]
    },
    footer: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      email: "mahmutergul64@gmail.com",
      links: [
        { name: "Personal Blog", url: "#" },
        { name: "Github", url: "https://github.com/mahmutergul64" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/mahmut-enes-ergul-56390134a/" },
      ]
    }
  }
};