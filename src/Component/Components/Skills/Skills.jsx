import './Skills.css'
import Colors from '../../Colors/Colors'
import laravel from '../../../assets/laravel.png'
import mysql from '../../../assets/mysql.svg'
import postgres from '../../../assets/postgres.png'
import js from '../../../assets/js.svg'
import php from '../../../assets/php.svg'
import react from '../../../assets/react.svg'
import git from '../../../assets/git.svg'
import vue from '../../../assets/vue.png'
import node from '../../../assets/node.png'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { forwardRef } from "react";

const Skills = forwardRef((props, ref)=>{

    const element = useRef()
    const timeLine = useRef()
    
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(()=>{
            timeLine.current = gsap.timeline({
                scrollTrigger:{
                    trigger:'.modelsItem',
                    scrub:true,
                    // markers: true,
                    start: 'top 865px',
                    end: 'bottom 910px'
                }
            })
            .fromTo('#modelOne',{
                opacity: 0,
                y: 50,
            },{
                opacity:1,
                y: 0
            })
            .fromTo('#modelTwo',{
                opacity: 0,
                y: 50,
            },{
                opacity:1,
                y: 0
            })
            .fromTo('#modelThree',{
                opacity: 0,
                y: 50,
            },{
                opacity:1,
                y: 0
            })
            .fromTo('#modelFour',{
                opacity: 0,
                y: 90,
            },{
                opacity:1,
                y: 0
            })
            .fromTo('#modelFive',{
                opacity: 0,
                y: 90,
            },{
                opacity:1,
                y: 0
            })
            .fromTo('#modelSix',{
                opacity: 0,
                y: 90,
            },{
                opacity:1,
                y: 0
            })
        },element)

        return () => {
            gsap.killTweensOf('modelsItem')
        }

    }, [])

    return(
        <section ref={ref} className='flex flex-col items-center gap-9 pt-[120px] skillsSection'>
            <span className={`text-[${Colors().white}] text-[30px] font-[500]`}>Skills</span>
            <div className='flex gap-12 modelsContent flex-wrap justify-center imgSkillsBox' ref={element}>
               <img className='w-[60px] modelsItem imgSkills' id='modelOne' src={laravel} alt="" /> 
               <img className='w-[60px] modelsItem imgSkills' id='modelFour' src={php} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelThree' src={js} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelFive' src={react} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelSix' src={git} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelSix' src={mysql} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelSix' src={postgres} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelSix' src={vue} alt="" />
               <img className='w-[60px] modelsItem imgSkills' id='modelSix' src={node} alt="" />
            </div>
        </section>
    )
})

export default Skills

// import { useLayoutEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export default function Skills(){

//     const element = useRef()
//     const timeLine = useRef()
    
//     useLayoutEffect(() => {

//         gsap.registerPlugin(ScrollTrigger)
//         const ctx = gsap.context(()=>{
//             timeLine.current = gsap.timeline({
//                 scrollTrigger:{
//                     trigger:'.modelsItem',
//                     scrub:true,
//                     // markers: true,
//                     start: 'top 865px',
//                     end: 'bottom 910px'
//                 }
//             })
//             .fromTo('#modelOne',{
//                 opacity: 0,
//                 y: 50,
//             },{
//                 opacity:1,
//                 y: 0
//             })
//             .fromTo('#modelTwo',{
//                 opacity: 0,
//                 y: 50,
//             },{
//                 opacity:1,
//                 y: 0
//             })
//             .fromTo('#modelThree',{
//                 opacity: 0,
//                 y: 50,
//             },{
//                 opacity:1,
//                 y: 0
//             })
//             .fromTo('#modelFour',{
//                 opacity: 0,
//                 y: 90,
//             },{
//                 opacity:1,
//                 y: 0
//             })
//             .fromTo('#modelFive',{
//                 opacity: 0,
//                 y: 90,
//             },{
//                 opacity:1,
//                 y: 0
//             })
//             .fromTo('#modelSix',{
//                 opacity: 0,
//                 y: 90,
//             },{
//                 opacity:1,
//                 y: 0
//             })
//         },element)

//         return () => {
//             gsap.killTweensOf('modelsItem')
//         }

//     }, [])

//     return(
//         <section className='flex flex-col items-center gap-9 pt-[120px]'>
//             <span className={`text-[${Colors().white}] text-[30px] font-[500]`}>Skills</span>
//             <div className='flex gap-12 modelsContent' ref={element}>
//                <img className='w-[60px] modelsItem' id='modelOne' src={html} alt="" /> 
//                <img className='w-[60px] modelsItem' id='modelTwo' src={css} alt="" />
//                <img className='w-[60px] modelsItem' id='modelThree' src={js} alt="" />
//                <img className='w-[60px] modelsItem' id='modelFour' src={tailwind} alt="" />
//                <img className='w-[60px] modelsItem' id='modelFive' src={react} alt="" />
//                <img className='w-[60px] modelsItem' id='modelSix' src={git} alt="" />
//             </div>
//         </section>
//     )
// }