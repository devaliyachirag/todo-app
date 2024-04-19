import React, { FC } from 'react'
interface AddButtonProps{
    name:string,
    color:string,
    onClick:()=> void
    
}
const AddButton:FC<AddButtonProps> = ({name,onClick,color}) => {

  return (
      <button style={{backgroundColor:color}}  className='btn text-white d-block m-2' onClick={onClick}>{name}</button>
  )
}

export default AddButton
