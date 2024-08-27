import React from 'react'
import img1 from './img1.png'

const Images = () => {
  return (
    <div className='container-md bg-danger my-3 row'>


        {/* import image from src */}
        <img src={img1} alt="" width={250} height={250} className="col-6 my-3"/>
        {/* //import image from public */}
        <img src="images/img2.jpg" alt="" width={250} height={250} className="col-6 my-3" />
        {/* import image from src */}
        <img src={img1} alt="" width={250} height={250} className="col-6 my-3"/>
        {/* //import image from public */}
        <img src="images/img2.jpg" alt="" width={250} height={250} className="col-6 my-3" />
        {/* import image from src */}
        <img src={img1} alt="" width={250} height={250} className="col-6 my-3"/>
        {/* //import image from public */}
        <img src="images/img2.jpg" alt="" width={250} height={250} className="col-6 my-3" />
    </div>
  )
}

export default Images