import apple from '../img/apple-icon.svg'
import google from '../img/google-icon.svg'
import microsoft from '../img/microsoft-icon.svg'
import amazon from '../img/amazon-icon.svg'
import spotify from '../img/spotify-icon.svg'
import local_study from '../img/local_study.png'
import as_seen_in from '../img/as-seen-in.svg'

import '../css/home.css'

function Home() {
    var companiesIcon = function() {
        return [apple, google, microsoft, amazon, spotify].map((v, i) => {
            return <img src={v} key={i + 'companiesIcon'} alt='' />
        })
    }
    
    return (
        <div className='home'>
            <div className='container'>
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
            </div>
            

            <div className='as-seen-in mt-3'>
                <div className='container text-center'>
                    <h1>As seen in:</h1>
                    <img src={as_seen_in} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home