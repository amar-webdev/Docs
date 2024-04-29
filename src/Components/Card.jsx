import React from 'react'
import { FaFileContract } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
     <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileContract />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 py-3 rounded-full flex items-center  justify-center'>
                {data.close ? <IoCloseCircleOutline />:<MdOutlineFileDownload size=".7em" color='#fff' />}
                </span>
            </div>
            {
                data.tag.isOpen = true && ( <div className={`tag w-full py-4 ${"bg-"+data.tag.tagColor+"-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div> ) 
            }
            
        </div>
     </motion.div>
  )
}

export default Card