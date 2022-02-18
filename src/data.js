import audiophileImage from "./images/project-images/audiophile.png";
import superchatImage from "./images/project-images/superchat.png";
import trillowRealEstateImage from "./images/project-images/trillow.png";
import digitalDesignImage from "./images/project-images/digital-design.png";
import weatherAppImage from "./images/project-images/weather-app.png";

const projects = [
  {
    id: "1",
    image: audiophileImage,
    techUsed: "Sass / Javascript / ReacjJS",
    name: "audiophile e-commerce",
    info: "This website contains a checkout page with form validation, a cart and more.",
    repo: "https://github.com/Edin2021/audiophile-ecommerce",
    demo: "https://audiophile-ecommerce.pages.dev/",
    selected: false,
  },
  {
    id: "2",
    image: superchatImage,
    techUsed: "Sass / Javascript / ReacjJS / Firebase",
    name: "superchat",
    info: "This app contains a login/sign up system, a group chat and a button to log out.",
    repo: "https://github.com/Edin2021/superchat",
    demo: "https://superchat.pages.dev/chat",
    selected: true,
  },
  {
    id: "3",
    image: trillowRealEstateImage,
    techUsed: "Sass / Javascript / ReacjJS / API",
    name: "trillow real estate",
    info: "Users can search for homes and rentals based on the state and city, and other parameters, view individual listings, and more.",
    repo: "https://github.com/Edin2021/trillow-real-estate",
    demo: "https://trillow-real-estate.pages.dev/",
    selected: false,
  },
  {
    id: "4",
    image: digitalDesignImage,
    techUsed: "Sass / Javascript / ReacjJS",
    name: "digital design",
    info: "This website contains many, relatively complex, effects and animations to give the user a mesmerizing experience.",
    repo: "https://github.com/Edin2021/digital-design-agency",
    demo: "https://digital-design.pages.dev/",
    selected: true,
  },
  {
    id: "5",
    image: weatherAppImage,
    techUsed: "Sass / Javascript / ReacjJS / API",
    name: "Weather App",
    info: "This application/website contains different themes based on weather conditions, two different layouts and more.",
    repo: "https://github.com/Edin2021/weather-app",
    demo: "https://weather-app-web.pages.dev/",
    selected: false,
  },
];

export default projects;
