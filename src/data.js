import audiophile from "./images/project/audiophile.png";
import superchat from "./images/project/superchat.png";
import trillowRealEstate from "./images/project/trillow.png";
import digitalDesign from "./images/project/digital-design.png";
import weatherApp from "./images/project/weather-app.png";
import limesharp from "./images/logos/limesharp.svg";
import limesharpDark from "./images/logos/limesharp-dark.svg";
import generazia from "./images/logos/generazia.svg";
import generaziaDark from "./images/logos/generazia-dark.svg";

const projects = [
  {
    id: "1",
    image: audiophile,
    techUsed: "Sass / Javascript / ReacjJS",
    name: "audiophile e-commerce",
    info: "This website contains a checkout page with form validation, a cart and more.",
    repo: "https://github.com/Edin2021/audiophile-ecommerce",
    demo: "https://audiophile-ecommerce.pages.dev/",
    selected: false,
  },
  {
    id: "2",
    image: superchat,
    techUsed: "Sass / Javascript / ReacjJS / Firebase",
    name: "superchat",
    info: "This app contains a login/sign up system, a group chat and a button to log out.",
    repo: "https://github.com/Edin2021/superchat",
    demo: "https://superchat.pages.dev/chat",
    selected: true,
  },
  {
    id: "3",
    image: trillowRealEstate,
    techUsed: "Sass / Javascript / ReacjJS / API",
    name: "trillow real estate",
    info: "Users can search for homes and rentals based on the state and city, and other parameters, view individual listings, and more.",
    repo: "https://github.com/Edin2021/trillow-real-estate",
    demo: "https://trillow-real-estate.pages.dev/",
    selected: false,
  },
  {
    id: "4",
    image: digitalDesign,
    techUsed: "Sass / Javascript / ReacjJS",
    name: "digital design",
    info: "This website contains many complex effects and animations to give the user a mesmerizing experience.",
    repo: "https://github.com/Edin2021/digital-design-agency",
    demo: "https://digital-design.pages.dev/",
    selected: true,
  },
  {
    id: "5",
    image: weatherApp,
    techUsed: "Sass / Javascript / ReacjJS / API",
    name: "Weather App",
    info: "This application/website contains different themes based on weather conditions, two different layouts and more.",
    repo: "https://github.com/Edin2021/weather-app",
    demo: "https://weather-app-web.pages.dev/",
    selected: false,
  },
];

const sections = {
  about:
    "My name is Edin, I'm a 22-year-old front-end developer based in Bosnia and Herzegovina, with 3 years of experience working in the said work department. Passionate about learning and working on different projects, tasks, and challenges, my willingness is to develop and create new things, using the already acquired and or the flexibility of attaining new technologies that are presented to me depending on the required needs at hand.",
  technologies:
    "Following are the technologies and tools that I have worked with, adding more as I progress on this career path. My learning methodology is built upon a combination of tutorials and reading the necessary documentation, after which I can apply the knowledge by doing projects independently, progressively increasing the complexity. Even when I started doing this, I was quite aware that a huge part of this job is and will be an open mind to learning new things in a constantly changing and developing environment so I got used to that quite early on this career path.",
  experience: [
    {
      company: {
        name: "Limesharp Internet Ltd.",
        location: "London, UK",
        role: "Front End Developer",
        period: "August 2022 - September 2023 (~1 year)",
        siteUrl: "https://limesharp.net/",
        logo: {
          light: limesharp,
          dark: limesharpDark,
        }
      },
      about: {
        paragraph:
          "I would consider this as the major leap forward in experience, knowledge, and expertise in my career, as Limesharp is an eCommerce agency that gave me the opportunity to work on a large variety of tasks in different environments, collectively having the necessary impact on me to improve and develop on different key aspects to continuously grow not only as a front end developer but also as a person and individual in a more team-focused environment.",
        duties: [
          "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, SASS, Tailwind, JavaScript, and Vue.js",
          "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
          "Clients included ME+EM, Brora, Jo Loves, GF Smith, and more",
        ],
      },
      recommendations: [
        {
          person: "Ed Bull",
          role: "CEO of Limesharp",
          text: "Edin has proven himself to be an incredibly motivated, hard working and passionate developer. He is also great fun to work with on a day to day basis.",
        },
        {
          person: "Nahuel Sanchez",
          role: "HOD at Limesharp",
          text: "Edin was one of the best hirings that I ever did, always ready to be faced with more challenges, more complex tasks and bigger integrations.",
        },
      ],
    },
    {
      company: {
        name: "Generazia d.o.o.",
        location: "Kakanj, BA",
        role: "Front End Developer",
        period: "January 2021 - May 2022 (~1.5 years)",
        siteUrl: "https://generazia.ba/",
        logo: {
          light: generazia,
          dark: generaziaDark,
        }
      },
      about: {
        paragraph:
          "I decided to join this company with the aim of expanding my understanding of web development, mainly focusing on the front-end aspect. My role involved developing front-end components, which were both clear-cut and demanding. I found quite the pleasure and satisfaction in carrying out this task. I eagerly anticipated it every single day. Eventually, I left the company feeling fulfilled and driven to pursue a position that would propel my career forward within this field.",
        duties: [
          "Built components and developed code that could be easily reused in parts of the website.",
          "I utilized my expertise in HTML to structure the content of web pages, while also making it semantically appealing with accessibility in mind.",
          "I used CSS to create cohesive layouts, and firmly styled components, incorporating responsiveness across devices.",
          "My knowledge of JavaScript allowed me to incorporate features, like form validation, animations and interactive elements to enhance user experience.",
        ],
      },
      recommendations: [
        {
          person: "Amer Sikira",
          role: "CEO of Generazia",
          text: "Edin is an enthusiastic and dedicated Front End Developer who stood out with his ability to grasp concepts quickly and work independently on projects. He consistently delivered his work on time. Brought energy to the small tech company where he interned. However due, to prospects for advancement and salary restrictions it was mutually decided that it would be best for him to seek opportunities. He left a lasting and favourable impression, as an exceptional employee. ",
        },
      ],
    },
  ],
};

export { projects, sections };
