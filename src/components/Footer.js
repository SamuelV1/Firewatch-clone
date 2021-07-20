import React from 'react'
// company logos & tree
import Shield from '../assets/icons/firewatch_shield.png'
import LogoPanic from '../assets/icons/logo_panic.png'
import LogoCP from '../assets/icons/logo_camposanto.png'
// csss
import '../style/Footer.scss'

export default function Footer() {
    return (
        <div className='main'>
            <div className="outside-link">
                <div className='links'>

                    <h4>Tech support</h4>

                </div>
                <div>
                    <img src={Shield} alt="" />
                </div>
                <div className='links'>
                    <h4>Streaming lets play</h4>
                </div>
            </div>
            <div className="rights">
                <p>© 2021 Campo Santo, in cooperation with Panic.</p>
                <p>Firewatch is a trademark of Campo Santo.</p>
                <p> Nintendo Switch is a trademark of Nintendo.</p>
            </div>
            <div className="brands">
                <ul>
                    <li>
                        <h1>
                            <img src={LogoCP} alt="" />
                        </h1>
                    </li>
                    <li>
                        <h1>
                            <img src={LogoPanic} alt="" />
                        </h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}
