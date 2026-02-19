// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects on cloud telemetry systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-netmigrate-was-accepted-by-fast-24",
          title: 'NetMigrate was accepted by FAST’24!',
          description: "",
          section: "News",},{id: "news-netmigrate-was-presented-at-p4-workshop",
          title: 'NetMigrate was presented at P4 Workshop!',
          description: "",
          section: "News",},{id: "news-a-paper-on-economic-denial-of-service-was-accepted-by-sigmetrics-25",
          title: 'A paper on Economic Denial of Service was accepted by SIGMETRICS’25!',
          description: "",
          section: "News",},{id: "news-promsketch-was-accepted-by-vldb-25",
          title: 'PromSketch was accepted by VLDB’25!',
          description: "",
          section: "News",},{id: "news-promsketch-will-be-presented-at-vldb-25",
          title: 'PromSketch will be presented at VLDB’25!',
          description: "",
          section: "News",},{id: "projects-promsketch",
          title: 'PromSketch',
          description: "Approximation-first timeseries query framework for monitoring systems like Prometheus and VictoriaMetrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-netmigrate",
          title: 'NetMigrate',
          description: "Live migration for in-memory key-value stores using programmable network data planes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-arya",
          title: 'Arya',
          description: "Ultra-fast approximate graph pattern miner using decomposition-based sampling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Zeying_Zhu_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%65%79%69%6E%67%7A@%75%6D%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zzylol", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zeying-zhu-0a87841a4", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/zeying_zhu", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WgHdUNsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
