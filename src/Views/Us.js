import React from 'react'
import img from '../assets/recovery.svg'

function Us() {
    return (
        <div className="provisoryStyle">
            <h1>Nosotros</h1>
            {/* <article className="provisoryStyle__Art">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,   voluptates. Enim exercitationem, magni necessitatibus quae, ipsa  aliquid cumque placeat facere quidem voluptatum, at laboriosam ex animi  velit repudiandae harum voluptate.
            </article> */}
            <p>Próximamente</p>
            <div className="provisoryStyle__Img">
                <img src={img} alt="En Construcción" />
            </div>
        </div>
    )
}

export default Us