import { IoClose } from "react-icons/io5";
import Colors from "../../Colors/Colors";
import './MenuMobile.css'
import { useEffect } from "react";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible, scrollToSection, home, about, skills, projects }){
    useEffect(()=> {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])

    const closeMenu = () => {
        console.log('Fechar menu');
        setMenuIsVisible(false);
    };

    const scrollToHome = () => {
        scrollToSection(home);
        setMenuIsVisible(false)
    };

    const scrollToAbout = () => {
        scrollToSection(about);
        setMenuIsVisible(false)
    };

    const scrollToSkills = () => {
        scrollToSection(skills);
        setMenuIsVisible(false)
    };

    const scrollToProjects = () => {
        scrollToSection(projects);
        setMenuIsVisible(false)
    };

    return(
        <div className={`fixed top-0 left-0 w-full h-full z-30 flex justify-center items-center backdrop-blur-md transition duration-500 pointer-events-none ${menuIsVisible ? 'slideDown' : 'slideUp'}`}>
            <IoClose className={`text-[white] absolute w-[50px] h-[50px] top-[40px] right-[48px] cursor-pointer rotate-45 transition duration-700 ${menuIsVisible ? 'rotateZero' : ''}`} onClick={closeMenu} />
            <nav className={`flex justify-center items-center scale-70 transition duration-700 ${menuIsVisible ? 'scaleOne' : ''}`}>
                <ul className={`text-[${Colors().white}] font-[600] flex gap-[45px] text-[25px] flex flex-col items-center`}>
                    <li className='cursor-pointer liHeader' onClick={scrollToHome}>Home</li>
                    <li className='cursor-pointer liHeader' onClick={scrollToAbout}>Sobre</li>
                    <li className='cursor-pointer liHeader' onClick={scrollToSkills}>Skills</li>
                    <li className='cursor-pointer liHeader' onClick={scrollToProjects}>Projetos</li>
                </ul>
            </nav>
        </div>
    )
}
