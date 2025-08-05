import React from 'react'
import Paralax from "../assets/slide1.jpg"

const Gallery = () => {
  return (
    <section className='py-42'>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src={Paralax} alt="Paralax" />
        </div>
      </div>
    </section>
  )
}

export default Gallery