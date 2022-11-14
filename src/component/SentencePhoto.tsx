import React, { useEffect } from 'react'

type Props = 
{
  id:string;
  text:string;
  imageUrl:string;
  reverse:Boolean;
}
const reverseBool:string[] = ["reverse","aling-start"]

const SentencePhoto = ({id,text,imageUrl,reverse}: Props) => {

  useEffect(()=>
  {
    const image = document.querySelector(`#${id}`) as HTMLImageElement 
    image.src = imageUrl
    
  },)
 
  return (
      <div className={`sentence-photo ${ reverse?reverseBool[0]:""}`}>
      <div className='SP-sentence vertical-center'>
            <h2 className='text-sentence'>{text}</h2>
        </div>
        <div className={`SP-photo ${ reverse?reverseBool[1]:""}`}>
            <img className='photo' id={id}></img>
        </div>
      </div>   
    
  )
}

export default SentencePhoto;