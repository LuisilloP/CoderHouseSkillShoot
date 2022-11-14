import React,{ useEffect }   from 'react'
import StarSvg from "./StarSvg"

type Props =
  {
    id:string,
    stars: number,
    comment: string,
    name: string,
    ocupation: string
  }


const Comentboxes = ({id,stars,comment,name,ocupation}: Props) => {
 
  return (
    <div className='comment-box'>
      <div className='box-coment'>
        <p>{`"${comment}"`}</p>
      </div>
      <div className='img-name'>
        <div className='name-person'>
          <p>{name}</p>
          <p>{ocupation}</p>
        </div>
      </div>
    </div>
  )
}

export default Comentboxes