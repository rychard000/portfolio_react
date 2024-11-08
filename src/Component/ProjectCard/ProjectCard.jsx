// import Colors from '../Colors/Colors'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import './ProjectCard.css'

// export default function ProjectCard({projectImg, img1, img2, img3, img4, img5, title, about, deploy, github, className = '', ...props}){

//     const classes = `flex ${className}`;

//     return (
//         <div className={classes} {...props}>
//             <img className='w-[500px] h-[280px] ml-[40px] imgCard' src={projectImg} alt="" />

//             <div className='w-[500px] p-[20px] flex flex-col gap-5 contentCard'>

//                 <header className='flex justify-between'>
//                     <span className={`text-[${Colors().white}] text-[22px] font-[500]`}>{title}</span>
//                     <div className='flex gap-4 flex-wrap justify-center'>
//                         {img1 && <img style={{width:'25px', ...propsImg1}} src={img1} alt="" />}
//                         {img2 && <img style={{width:'25px', ...propsImg2}} src={img2} alt="" />}
//                         {img3 && <img style={{width:'25px', ...propsImg3}} src={img3} alt="" />}
//                         {img4 && <img style={{width:'25px', ...propsImg4}} src={img4} alt="" />}
//                         {img5 && <img style={{width:'25px', ...propsImg5}} src={img5} alt="" />}
//                     </div>
//                 </header>

//                 <p className={`text-[${Colors().white}] aboutParagraph`}>{about}</p>

//                 <div className='flex gap-7 boxButtons'>
//                     <a href={deploy} className={`text-[${Colors().black}] bg-[${Colors().white}] text-[18px] font-[600] p-[10px] px-[29px] rounded-[3px] text-center cursor-pointer outline-none cardsButton`}>
//                         <span>Projeto</span>
//                     </a>
//                     <a href={github} className={`bg-[${Colors().white}] text-[${Colors().black}] text-[18px] font-[600] p-[10px] px-[29px] rounded-[3px] cursor-pointer flex gap-3 justify-center items-center outline-none cardsButton`}>
//                         <FontAwesomeIcon className={`text-[${Colors().black}]`} icon={faGithub} />
//                         <span>Repositorio</span>
//                     </a>
//                 </div>

//             </div>

//         </div>
//     )
// }

import Colors from '../Colors/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css'

export default function ProjectCard({
    projectImg, 
    img1, 
    img2, 
    img3, 
    img4, 
    img5, 
    title, 
    about, 
    deploy, 
    github, 
    className = '', 
    propsImg1 = {}, 
    propsImg2 = {}, 
    propsImg3 = {}, 
    propsImg4 = {}, 
    propsImg5 = {},
    ...props
}){

    const classes = `flex ${className}`;

    return (
        <div className={classes} {...props}>
            <img className='w-[500px] h-[280px] ml-[40px] imgCard' src={projectImg} alt="" />

            <div className='w-[500px] p-[20px] flex flex-col gap-5 contentCard'>

                <header className='flex justify-between'>
                    <span className={`text-[${Colors().white}] text-[22px] font-[500]`}>{title}</span>
                    <div className='flex gap-4 flex-wrap justify-center'>
                        {img1 && <img style={{width: '25px', ...propsImg1}} src={img1} alt="" />}
                        {img2 && <img style={{width: '25px', ...propsImg2}} src={img2} alt="" />}
                        {img3 && <img style={{width: '25px', ...propsImg3}} src={img3} alt="" />}
                        {img4 && <img style={{width: '25px', ...propsImg4}} src={img4} alt="" />}
                        {img5 && <img style={{width: '25px', ...propsImg5}} src={img5} alt="" />}
                    </div>
                </header>

                <p className={`text-[${Colors().white}] aboutParagraph`}>{about}</p>

                <div className='flex gap-7 boxButtons'>
                    <a href={deploy} className={`text-[${Colors().black}] bg-[${Colors().white}] text-[18px] font-[600] p-[10px] px-[29px] rounded-[3px] text-center cursor-pointer outline-none cardsButton`}>
                        <span>Projeto</span>
                    </a>
                    <a href={github} className={`bg-[${Colors().white}] text-[${Colors().black}] text-[18px] font-[600] p-[10px] px-[29px] rounded-[3px] cursor-pointer flex gap-3 justify-center items-center outline-none cardsButton`}>
                        <FontAwesomeIcon className={`text-[${Colors().black}]`} icon={faGithub} />
                        <span>Repositorio</span>
                    </a>
                </div>

            </div>

        </div>
    )
}
