import React from 'react';
import { Link } from 'react-router-dom'
// Paralax library
import { Parallax } from 'react-parallax'
// parallax imgs
import parallax from '../assets/parallax0.png'
import parallax1 from '../assets/parallax1.png'
import parallax2 from '../assets/parallax2.png'
import parallax3 from '../assets/parallax3.png'
import parallax4 from '../assets/parallax4.png'
import parallax5 from '../assets/parallax5.png'
import parallax6 from '../assets/parallax6.png'
import parallax7 from '../assets/parallax7.png'
import parallax8 from '../assets/parallax8.png'
// non parallax to mobile adaptative

// icons & images
import PcLogo from '../assets/icons/buyicon_pc.png'
import XboxLogo from '../assets/icons/buyicon_xbone.png'
import Ps4Logo from '../assets/icons/buyicon_ps4.png'
import SwitchLogo from '../assets/icons/buyicon_switch.png'
// gallery images
import Photo01 from '../assets/images/firewatch_01.jpg'
import Photo02 from '../assets/images/firewatch_02.jpg'
import Photo03 from '../assets/images/firewatch_03.jpg'
import Photo04 from '../assets/images/firewatch_04.jpg'

// component
import TopBar from '../components/TopBar';
import YoutubeEmbed from "../components/VideoPlayer";


import '../style/Home.scss'
import Footer from '../components/Footer';


function App() {
  return (
    <div className="App">
      <div className="container">
        <TopBar></TopBar>

        <div className='paralaax'>

          <Parallax strength={200} bgImage={parallax}>
            <div style={{ height: '750px' }} >

              <Parallax strength={200} bgImage={parallax1}>
                <div style={{ height: '750px' }} >
                  <Parallax strength={300} bgImage={parallax2}>
                    <div style={{ height: '760px' }} >
                      <Parallax strength={200} bgImage={parallax3}>
                        <div style={{ height: '750px' }} >
                          <Parallax strength={50} bgImage={parallax4}>
                            <div style={{ height: '750px' }} >
                              <Parallax strength={50} bgImage={parallax5}>
                                <div style={{ height: '750px' }} >
                                  <Parallax strength={50} bgImage={parallax6}>
                                    <div style={{ height: '750px' }} >
                                      <Parallax strength={50} bgImage={parallax7}>
                                        <div style={{ height: '750px' }} >
                                          <Parallax strength={10} bgClassName='Fimparalaxx' bgImageStyle={{ height: '750px' }} bgImage={parallax8}>
                                            <div style={{ height: '750px' }} >

                                            </div>

                                          </Parallax>
                                        </div>

                                      </Parallax>
                                    </div>

                                  </Parallax>
                                </div>

                              </Parallax>
                            </div>

                          </Parallax>
                        </div>

                      </Parallax>
                    </div>

                  </Parallax>
                </div>

              </Parallax>
            </div>

          </Parallax>
        </div>

        <main>
          <nav className='Header'>
            <h2><em>Available now for</em>
            $19.99</h2>
          </nav>
          <section>
            <div className='buy-Methods'>
              <div className='arrow-pointer'>
                <a href="https://www.microsoft.com/store/p/firewatch/bqqkg9h2stc0"><h4><span><img src={XboxLogo} alt="" /></span>Xbox one</h4>    </a>
              </div>
              <div className='arrow-pointer'>
                <a href="https://www.nintendo.com/games/detail/firewatch-switch/"> <h4><span><img src={SwitchLogo} alt="" /></span>Switch</h4> </a>
              </div>
            </div>

            <div className='buy-Methods'>
              <div className='arrow-pointer'>

                <a href="https://store.playstation.com/en-us/search/firewatch"> <h4><span><img src={Ps4Logo} alt="" /></span>Plastation 4</h4>  </a>
              </div>
              <div className='arrow-pointer'>
                <a href="https://store.steampowered.com/app/383870/Firewatch/"><h4><span><img src={PcLogo} alt="" /></span>windows Linux</h4>  </a>
              </div>
            </div>
          </section>
          <div className="trailer">
            <YoutubeEmbed embedId='cXWlgP5hZzc'></YoutubeEmbed>
          </div>

          <div className="text">
            <header><h5>Firewatch is a mystery set in the Wyoming wilderness, where your only emotional lifeline is the person on the other end of a handheld radio.</h5></header>

            <div className="history">
              <p className='text-left'>
                The year is 1989.
              <br />
                <br />
              You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.
              <br />
                <br />
              An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to you.
              </p>
              <p className='text-right'>
                at all times over a small, handheld radio <br />—and is your only contact with the world you've left behind.
              <br />
                <br />
                But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
              <br />
                <br />

              </p>
            </div>

          </div>
          <div className="info">
            <div className='info2'> <h4><em>SCREENS &#38; TRAILER</em></h4></div>
            <div className='info2'><Link to='/FaQ'><h4><em>FIREWATCH FAQ</em></h4> </Link></div>
          </div>
          <div className="gallery">
            <ul>
              <li><img src={Photo01} alt="" /></li>
              <li><img src={Photo02} alt="" /></li>
              <li><img src={Photo03} alt="" /></li>
              <li><img src={Photo04} alt="" /></li>
            </ul>
          </div>

          <div className="slogan">
            <h2>"AS VISUALLY STRIKING <br />
                AS ITS UNIQUE PREMISE."</h2>
            <nav><h3>ENTERTAINMENT WEEKLY</h3></nav>

          </div>
          <Footer></Footer>

        </main>

      </div>

    </div >
  );
}

export default App;
