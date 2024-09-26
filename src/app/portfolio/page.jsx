"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// Portfolio items data
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Doctor Appointment App",
    desc: "An interactive doctor appointment website built with React.js and Tailwind CSS. This responsive site aims to solve the common problem of waiting times by allowing users to check a doctor's availability and book appointments conveniently.",
    img: "/portfolio_img/image1.png",
    link: "https://doctor-appointment-app-with-mern.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Lazarev Website (Enhanced Edition)",
    desc: "This project is a recreation of the classic Lazarev website design, with a modern twist. Built using HTML, CSS, and JavaScript, it aims to replicate the original structure while incorporating enhanced features and animations. Utilizing GSAP for smooth, dynamic animations, this version adds fresh interactive elements to improve user engagement and make the overall design more immersive.",
    img: "/portfolio_img/image2.png",
    link: "https://vinay2003.github.io/Lazarev/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Weather Forecast",
    desc: "The Weather Forecast Application is a dynamic web application designed to provide real-time weather updates for various locations worldwide. Users can enter a city name and retrieve current weather conditions, including temperature, humidity, wind speed, and a brief description of the weather. The application features a sleek and responsive design, leveraging Tailwind CSS for styling, ensuring a smooth user experience across devices.",
    img: "/portfolio_img/image3.png",
    link: "https://weather-forecast-app-umber-psi.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Ravi portfolio",
    desc: "I developed this website for my client using HTML, CSS, and JavaScript, incorporating motion effects to enhance the user experience. The client has responded positively, expressing satisfaction with the design and functionality.",
    img: "/portfolio_img/image.png",
    link: "https://vinay2003.github.io/Ravi-portfolio/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div
                    className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] bg-cover bg-center transition-transform transform hover:scale-105"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded transition-transform transform hover:scale-110">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
