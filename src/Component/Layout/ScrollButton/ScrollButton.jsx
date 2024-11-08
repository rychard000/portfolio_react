import React, {useState, useEffect} from 'react'
import { IoArrowUp } from "react-icons/io5";
import Colors from '../../Colors/Colors';
import './ScrollButton.css'

const ScrollButton = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false) 

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 300){
                setShowScrollTopButton(true)
            }else{
                setShowScrollTopButton(false)
            }
        })
    },[])

    function scrollTop(){
        window.scrollTo({
          top: 0,
          behavior:'smooth'
        })
    }

    return (
        <div>
            <button className={`fixed bottom-[45px] right-[40px] rounded-[50%] bg-[${Colors().white}] text-[${Colors().black}] cursor-pointer p-3 transition duration-500 scrollButtonCss ${showScrollTopButton ? 'buttonOnEffect' : 'buttonNoEffect'}` } onClick={scrollTop}>
                <IoArrowUp className='h-[23px] w-[23px]'/>
             </button>
        </div>
    )
}

export default ScrollButton

//<MdOutlineKeyboardDoubleArrowUp className='fixed bottom-[15px] right-[20px] h-[40px] w-[40px] rounded-[50%] bg-[white] text-[black] cursor-pointer' onClick={scrollTop}/>