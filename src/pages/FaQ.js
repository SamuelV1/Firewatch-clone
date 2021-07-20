import React from 'react'

import FaQGenerator from '../components/FaQGenerator'
import TopBar from '../components/TopBar'
import SecondLogo from '../assets/icons/firewatch_subpage.png'

import Footer from '../components/Footer'
import '../style/FaQ.scss'

export default function FaQ() {
    return (
        <main>
            <div id='top'>
                <TopBar></TopBar>
            </div>
            <div className="imagem">
                <img src={SecondLogo} alt="Logo" />
            </div>
            <section className='section'>
                <FaQGenerator Titulo='I, on the other hand, AM here to learn about Firewatch. What platforms is it on?' Texto='Windows, Mac, and Linux via Steam, as well as Nintendo Switch via the Nintendo Store, PlayStation 4 via PlayStation Store, and Xbox One via the Microsoft Store. It 19.99'></FaQGenerator>
                <FaQGenerator
                    Titulo='What about the soundtrack?'
                    Texto='You can buy the game original soundtrack digitally on Bandcamp or Steam.'
                >

                </FaQGenerator>
                <FaQGenerator
                    Titulo='Can I get a hard copy?'
                    Texto='Not currently! We dont have plans to bring it to store shelves (or online store shelves), but we will announce it if that changes.'
                >

                </FaQGenerator>
                <FaQGenerator
                    Titulo='Who made this?'
                    Texto='Firewatch was developed by Campo Santo, an independent video game studio whose members have made some games you might have enjoyed, including Mark of the Ninja, Brutal Legend, The Cave, BioShock 2, and The Walking Dead: Season 1.'
                >

                </FaQGenerator>
            </section>

            <Footer></Footer>

        </main >
    )
}
