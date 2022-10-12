import apple from '../img/apple-icon.svg'
import google from '../img/google-icon.svg'
import microsoft from '../img/microsoft-icon.svg'
import amazon from '../img/amazon-icon.svg'
import spotify from '../img/spotify-icon.svg'
import as_seen_in from '../img/as-seen-in.svg'

import local_study from '../img/local_study.png'
import shawn from '../img/Shawn.png'
import sarah from '../img/Sarah.png'
import emma from '../img/Emma.png'

import '../css/home.css'
import React from 'react'

function Home() {
    var companiesIcon = function() {
        return [apple, google, microsoft, amazon, spotify].map((v, i) => {
            return <img src={v} key={i + 'companiesIcon'} alt='' />
        })
    }
    
    return (
        <React.Fragment>
            <section className="container">
                <h1>Learn to code — for free.<br />Build projects.<br />Earn certifications.</h1>

                <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>

                <div className='companies'>
                    {companiesIcon()}
                </div>

                <a className='button-primary h2 text-center' href='/'>Get started (it's free)</a>
                
                <div id='local-study' className='text-center mt-3'>
                    <img src={local_study} alt='' />
                    <h4>freeCodeCamp students at a local study group in South Korea.</h4>
                </div>
            </section>
            

            <section className='as-seen-in text-center'>
                <div className='container'>
                    <h1>As seen in:</h1>
                    <img src={as_seen_in} alt='' />
                </div>
            </section>

            <section className='container-large text-center'>
                <h2>Here is what our alumni say about freeCodeCamp:</h2>

                <div className='alumni'>
                    <img src={shawn} alt='' />
                    <div>
                        <p><strong>Shawn Wang</strong> in Singapore</p>
                        <p>Software Engineer at <strong>Amazon</strong></p>
                        <p>"It's scary to change careers. I only gained confidence that I
                            could code by working through the hundreds of hours of free lessons
                            on freeCodeCamp. Within a year I had a six-figure job as a Software
                            Engineer. freeCodeCamp changed my life."</p>
                    </div>
                </div>

                <div className='alumni'>
                    <img src={sarah} alt='' />
                    <div>
                        <p><strong>Sarah Chima</strong> in Nigeria</p>
                        <p>Software Engineer at <strong>ChatDesk</strong></p>
                        <p>"freeCodeCamp was the gateway to my career as a software developer. 
                            The well-structured curriculum took my coding knowledge from a total 
                            beginner level to a very confident level. It was everything I needed 
                            to land my first dev job at an amazing company."</p>
                    </div>
                </div>

                <div className='alumni'>
                    <img src={emma} alt='' />
                    <div>
                        <p><strong>Emma Bostian</strong> in Sweden</p>
                        <p>Software Engineer at <strong>Spotify</strong></p>
                        <p>"I've always struggled with learning JavaScript. I've taken many 
                            courses but freeCodeCamp's course was the one which stuck. Studying 
                            JavaScript as well as data structures and algorithms on freeCodeCamp gave
                            me the skills and confidence I needed to land my dream job as a 
                            software engineer at Spotify."</p>
                    </div>
                </div>
            </section>

            <section class='container'>
                <a className='button-primary h2 text-center' href='/'>Get started (it's free)</a>
            </section>
        </React.Fragment>
    )
}

export default Home