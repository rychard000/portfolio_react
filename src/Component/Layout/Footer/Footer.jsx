import Colors from '../../Colors/Colors'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return (
        <footer className='w-[100%] text-center py-[40px] footerSection'>
            <div className='flex gap-4 justify-center pb-[15px]'>
                <a href="https://github.com/arghoslent666">
                    <FontAwesomeIcon className={`text-[${Colors().white}] text-[25px]`} icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/rychard-alves-440737290/">
                    <FontAwesomeIcon className={`text-[${Colors().white}] text-[25px]`} icon={faLinkedin} />
                </a>
            </div>
            <span className={`text-[${Colors().white}] text-[20px]`}>© 2024 - Rychard Alves. Todos os direitos reservados.</span>
        </footer>
    )
}