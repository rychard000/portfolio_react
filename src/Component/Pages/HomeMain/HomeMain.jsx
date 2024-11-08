import { useState, useRef } from "react";
import Colors from "../../Colors/Colors";
import About from "../../Components/About/About";
import Home from "../../Components/Home/Home";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import MenuMobile from "../../Layout/MenuMobile/MenuMobile";
import ScrollButton from "../../Layout/ScrollButton/ScrollButton";

import './HomeMain.css'

export default function HomeMain() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const home = useRef(null)
    const about = useRef(null)
    const skills = useRef(null)
    const projects = useRef(null)

    function scrollToSection(elementRef){
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior:'smooth'
      })
    }

    return (
      <main className={`flex flex-col w-full justify-center items-center bg-[${Colors().black}] pr-[20px] mt-[80px] homeMainDiv`}>
        <ScrollButton/>
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} scrollToSection={scrollToSection} home={home} about={about} skills={skills} projects={projects}/>
        <Header setMenuIsVisible={setMenuIsVisible} scrollToSection={scrollToSection} home={home} about={about} skills={skills} projects={projects}/>
        <Home ref={home}/>
        <About ref={about}/>
        <Skills ref={skills}/>
        <Projects ref={projects}/>
        <Footer/>
      </main>
    )
}