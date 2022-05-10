import React from 'react'

const ProductCategory = (props) => {
  return (
    <div>
        <div className='w-10 h-10 rounded-full bg-black relative mt-5 ml-[15vh] ' >
          <h3 className='absolute text-white mt-2 ml-4'>{props.number}</h3>
        </div>
        <div>
          <img src={props.img} alt="" />
          <h3 className='font-light text-center '>{props.text} </h3>
        </div>
    </div>
  )
}

export default ProductCategory