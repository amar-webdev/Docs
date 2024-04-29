import React, { useState } from 'react'
import Card from './Card'


function Foreground() {
    
    const data = [
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", filesize: ".9mb",close: true, tag: {isOpean:true, tagTitle: "Download Now", tagColor: "green"}},

        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", filesize: ".9mb",close: true, tag: {isOpean:true, tagTitle: "Download Now", tagColor: "green"}},

        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", filesize: ".9mb",close: true, tag: {isOpean:true, tagTitle: "Download Now", tagColor: "blue"}}
    ];
    useState()
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((iteam, index)=>(
            <Card data={iteam} />
        ))}
        
    </div>

  )
}

export default Foreground