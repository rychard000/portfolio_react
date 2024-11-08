import './Header.css'
import Colors from '../../Colors/Colors'
import Logo from '../../../assets/logo.png'
import { SlMenu } from "react-icons/sl";

export default function Header({ setMenuIsVisible, scrollToSection, home, about, skills, projects }){
    const openMenu = () => {
        console.log('Abrir menu');
        setMenuIsVisible(true);
    };

    const scrollToHome = () => {
        scrollToSection(home);
    };

    const scrollToAbout = () => {
        scrollToSection(about);
    };

    const scrollToSkills = () => {
        scrollToSection(skills);
    };

    const scrollToProjects = () => {
        scrollToSection(projects);
    };

    return (
        <header className={`bg-[${Colors().black}] text-[${Colors().white}] flex items-center justify-between w-[100%] py-[20px] px-[40px] header fixed top-[0px] z-20 right-[0px] headerSection`}>
            <img className='w-[150px] cursor-pointer' src={Logo} alt="" onClick={scrollToHome} />
            <nav className='navDesktop'>
                <ul className={`text-[${Colors().white}] font-[600] flex gap-[25px] text-[22px]`}>
                    <li className='cursor-pointer liHeader' onClick={scrollToHome}>Home</li>
                    <li className='cursor-pointer liHeader' onClick={scrollToAbout}>Sobre</li>
                    <li className='cursor-pointer liHeader' onClick={scrollToSkills}>Skills</li>
                    <li className='cursor-pointer liHeader' onClick={scrollToProjects}>Projetos</li>
                </ul>
            </nav>
                <SlMenu className='text-[white] text-[30px] hidden cursor-pointer menuH' onClick={openMenu}/>
        </header>
    )
}