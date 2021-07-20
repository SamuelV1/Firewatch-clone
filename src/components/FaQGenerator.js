import React from 'react'
import '../style/FaQC.scss'

export default function FaQGenerator(prop) {
    return (

        <div className='question'>
            <h4>{prop.Titulo}</h4>
            <p>{prop.Texto}</p>
        </div>

    )
}
