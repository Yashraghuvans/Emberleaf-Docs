"use client"
import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
    const [title, setTitle] = useState(data.title);

    return (
        <motion.div drag dragConstraints={reference} className='h-72 w-60 md:w-72 lg:w-80 rounded-[45px] bg-gray-900/90 text-white py-10 px-8 relative overflow-hidden flex-shrink-0'>
            <FaRegFileAlt/>
            <textarea 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className='text-sm leading-tight mt-5 font-semibold bg-transparent border-none outline-none text-white w-full resize-none overflow-hidden'
                rows={3}
            />
            <div className=' w-full absolute bottom-0 left-0'>
                <div className='flex justify-between items-center mb-5 px-6 py-2'>
                    <h2>{data.size}</h2>
                    <span className='h-7 w-7 rounded-full bg-zinc-600 flex justify-center items-center'>
                        {data.close ?<IoClose/> :<FaDownload/>}
                    </span>
                </div>
                <div className={`w-full py-2 flex justify-center items-center text-white ${data.tag.tagColor==='bg-green-400' ? 'bg-green-600' : 'bg-blue-600'}`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Card