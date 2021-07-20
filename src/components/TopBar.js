import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Topbar.scss'

export default function TopBar() {
    return (
        <div className='titulo'>
            <nav>
                <p className='titulo-header'>Campo Santo</p>
            </nav>
            <nav className='botão'>

                <div id='MainLink' ><Link to=''><p>FireWatch</p></Link></div>
                <div><a href='https://blog.camposanto.com/'><p>Development Blog</p></a></div>
                <div><a href="https://quarterly.camposanto.com/"><p>Quarterly review</p></a></div>

            </nav>

        </div>
    )
}
