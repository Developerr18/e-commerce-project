import ecommerceImg from "./assets/images/e-commerce-app.png";
import weatherAppImg from "./assets/images/weather-app.png";
import taskManagerImg from "./assets/images/project-8.jpg";

// projectsData.js

const projects = [
    {
        id: 1,
        title: "E-commerce Website",
        description:
            "A full-stack e-commerce website with cart, filters, and checkout features.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        image: ecommerceImg,
        live: "https://your-ecommerce.netlify.app",
        code: "https://github.com/yourusername/ecommerce",
    },
    {
        id: 2,
        title: "Weather App",
        description: "A simple weather app using OpenWeatherMap API.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: weatherAppImg,
        live: "https://your-weather-app.netlify.app",
        code: "https://github.com/yourusername/weather-app",
    },
    {
        id: 3,
        title: "Task Manager",
        description: "A simple task manager for manage tasks",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        image: taskManagerImg,
        live: "https://your-task-manager-app.netlify.app",
        code: "https://github.com/yourusername/weather-app",
    },
];

export default projects;
