import photo from '../../../assets/eclipse.png'
import likedin from '../../../assets/likedin.png'
import github from '../../../assets/github.png'
import './Home.css'
import Colors from '../../Colors/Colors'

import { forwardRef } from 'react'

const Home = forwardRef((props, ref)=>{
    return(

        <section ref={ref} className={`bg-[${Colors().black}] flex gap-[100px] items-center justify-between pt-[130px] w-[1000px] sectionHome`}>
                <div className='ml-[55px] homeTextContent'>
                    <span className={`text-[${Colors().white}] font-[400] text-[22px] spanHome`}>Olá, eu sou Rychard Alves</span>
                    <div className='flex flex-col gradient pb-[20px]'>
                        <span id='developerSpan' className='spanDeveloper'>Desenvolvedor</span>
                        <span id='frontEndspan' className='spanDeveloper'>Full-Stack</span>
                    </div>
                    <div className='flex gap-6 contactHome'>
                        <a className='githubPng outline-none' href="https://github.com/arghoslent666">
                            <img className='w-[42px]' src={github} alt=""/>    
                        </a>
                        <a className='likedinPng outline-none' href="https://www.linkedin.com/in/rychard-alves-440737290/">
                            <img className='w-[42px]' src={likedin} alt=""/>
                        </a>
                    </div>
                </div>
                <img className='w-[270px] pr-[20px] homeImg' src={photo} alt="" />
            </section>
    )
})

export default Home