import Colors from '../../Colors/Colors'
import './About.css'

import { forwardRef } from "react";

const About = forwardRef((props, ref)=>{
    return(
        <section ref={ref} className='w-[1000px] flex flex-col pt-[160px] sectionAbout'>
            <span className={`text-[${Colors().white}] self-center text-[30px] font-[500] pb-[55px]`}>Sobre mim</span>
            <p className={`text-[20px] font-[300] text-[${Colors().paragraphGrey}] ml-[50px] leading-[1.6] paragraphAbout`}>Olá, meu nome e Rychard tenho 21 anos, sou Desenvolvedor de Software Full-Stack, atualmente trabalho como freelancer de programação, fazendo sistemas web e mobile, tecnologias que eu ultilizo são React, Vue e Laravel, utilizando fortemente as linguagens JavaScript e PHP, tenho conhecimento em SQL, MongoDB e git. Com conhecimento em desenvolvimento de API's REST, tenho muita facilidade de trabalhar em equipe e de me expressar com outras pessoas.
            </p>
        </section>
    )
})

export default About