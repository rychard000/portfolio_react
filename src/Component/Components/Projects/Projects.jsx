import './Projects.css'
import ProjectCard from '../../ProjectCard/ProjectCard'
import Colors from '../../Colors/Colors'
// import movieImg from '../../../assets/movie-api-img.png'
// import calculatorImg from '../../../assets/calculadora-js.png'
// import cadasterImg from '../../../assets/cadastro-js.png'
import padaria from '../../../assets/padaria_react.png'
import superGestao from '../../../assets/super_gestao.png'
import prefeitura from '../../../assets/project_vue.png'
import html from '../../../assets/html.svg'
import css from '../../../assets/css.svg'
import js from '../../../assets/js.svg'

import react from '../../../assets/react.svg' 
import laravel from '../../../assets/laravel.png' 
import vue from '../../../assets/vue.png' 
import node from '../../../assets/node.png'
import mySql from  '../../../assets/mysql.svg'
import php from  '../../../assets/php.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = forwardRef((props,ref)=>{

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.cardOne',{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:'.cardOne',
                // markers: true,
                start:'top 80%',
                end:'bottom 950px',
                scrub: true
            }
        })
        gsap.to('.cardTwo', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.cardTwo',
                // markers: true,
                start: 'top 96%',
                end: 'bottom 950px',
                scrub: true
            }
        })
        gsap.to('.cardThree', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.cardThree',
                // markers: true,
                start: 'top 100%',
                end: 'bottom 950px',
                scrub: true
            }
        })

        return ()=>{
            gsap.killTweensOf('.cardOne')
            gsap.killTweensOf('.cardTwo')
            gsap.killTweensOf('.cardThree')
        }
    }, [])

    return(
        <section ref={ref} className='pt-[180px] flex flex-col pb-[35px]'>

            <div className='flex flex-col items-center gap-[70px] pb-[66px]'>
                <span className={`text-[${Colors().white}] text-[30px] font-[500]`}>Projetos</span>

                <ProjectCard
                    className='cardOne cardsProjects'
                    projectImg={padaria}
                    img1={react}
                    img2={js}
                    img3={node}
                    propsImg3={{ height: '29px', margin:'auto' }}
                    img4={laravel}
                    propsImg4={{ height: '29px', margin:'auto' }}
                    img5={mySql}
                    title='Panificadora online'
                    about='Projeto Full-Stack, de um  e-commerce de uma panificadora, onde o usuário pode criar e entrar com sua conta e comprar seus produtos, tendo sistema de carrinho e gerando o pedido do mesmo, com as devidas opções, as de pagamento com PIX, cartão.'
                    deploy='https://padaria-front-end.vercel.app'
                    github='https://github.com/rychard000/padaria_front_end'
                />

                <ProjectCard
                    className='cardTwo cardsProjects'
                    projectImg={superGestao}
                    img1={laravel}
                    propsImg1={{ height: '29px', margin:'auto' }}
                    img2={php}
                    propsImg2={{ width: '30px' }}
                    img3={mySql}
                    title='Plataforma Super gestão'
                    about='Super gestão é uma plataforma onde vendedores podem colocar seus produtos e o clientes podem fazer o pedido do mesmo, gerando um nota de solicitação na qual mostra o produto solicitado e o cliente do mesmo.'
                />

                <ProjectCard
                    className='cardThree cardsProjects'
                    projectImg={prefeitura}
                    img1={vue}
                    propsImg1={{ width: '30px', height: '24px', margin:'auto' }}
                    img2={js}
                    img3={node}
                    propsImg3={{ height: '29px', margin:'auto' }}
                    img4={laravel}
                    propsImg4={{ height: '29px', margin:'auto' }}
                    img5={php}
                    propsImg5={{ width: '30px' }}
                    title='Portal prefeitura'
                    about='Projeto Full-Stack para prefeitura de Posse, front end feito em Vue, a API REST foi feito em Laravel para fitros de pesquisas de notícias e categorias das mesmas.'
                />
            </div>
            
            <a href="https://github.com/arghoslent666" className='flex gap-3 items-center self-end mr-[55px] cursor-pointer link'>
                <span className={`text-[${Colors().white}] text-[20px] font-[500] spanLink`}>Mais Projetos</span>
                <FontAwesomeIcon className={`text-[${Colors().white}]`} icon={faArrowRight} id='icon' />
            </a>

        </section>
    )
})

export default Projects