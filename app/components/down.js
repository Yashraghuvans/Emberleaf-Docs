"use client"
import React, { use, useRef } from 'react'
import Card from './card'


const Down = () => {
    const ref=useRef();
    const data = [
        {
            title: 'Enter The Data.',
            size: '0.5mb',
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Download',
                tagColor: 'bg-green-400'
            }
        },
        {
            title: 'Enter The Data.',
            size: '0.4mb',
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Download',
                tagColor: 'bg-blue-400'
            }
        },{
            title: 'Enter The Data.',
            size: '0.9mb',
            close: false,
            tag: {
                isOpen: false,
                tagTitle: 'Download',
                tagColor: 'bg-green-400'
            }
        },
    ];
    return (
        <div ref={ref} className='fixed z-[3] h-full w-full left-0 top-0 flex flex-wrap gap-10 p-5'>
            {
                data.map((item, index) => (
                    <Card key={index} data={item} reference={ref}/>
                ))
            }
        </div>
    )
}

export default Down
