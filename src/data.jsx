import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

import DrinkMix from "./assets/DrinkMix.png";
import ImageFi from "./assets/ImageFi.png";
import HomeDec from "./assets/homeDec.png";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "proficiency in Java, developing efficient and fast back-end applications with a strong understanding of spring and springboot framework.",
  },
  {
    id: nanoid(),
    title: "C/C++",
    icon: <SiCplusplus className="h-16 w-16 text-emerald-500" />,
    text: "Advanced knowledge of C and C++ , contributed in creation of attribute logics for generating credit scores and optimizing efficiency.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: HomeDec,
    url: "https://comfydecor.netlify.app/",
    github: "https://github.com/Harsh08932/HomeDec",
    title: "HomeDec",
    text: "Experience timeless elegance with furniture crafted from premium materials, designed to transform your home into a sanctuary of sophistication",
  },
  {
    id: nanoid(),
    img: DrinkMix,
    url: "https://drinkmixx.netlify.app/",
    github: "https://github.com/Harsh08932/Drinks_mix",
    title: "DrinkMix",
    text: "Cocktail explorer engineered as a React single‑page application, featuring RESTful API consumption, modular component architecture, and responsive design principles.",
  },
  {
    id: nanoid(),
    img: ImageFi,
    url: "https://imagefi.netlify.app/",
    github: "https://github.com/Harsh08932/Image-finder",
    title: "imagefi",
    text: "A simple react based app that fetches images from an external api based on the user prompt.",
  },
];
