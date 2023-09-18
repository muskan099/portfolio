import LogoTitle from '../../assets/images/muskan-logo.png';
import './index.scss';
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u','s','k','a','n']
    const jobArray = ['w','e','b','d','e','v','e','l','o','p','e','r']
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          },4000)
      return() => clearTimeout(timer)
    },[])
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass}`}>I</span>
                <span className={letterClass}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Frontend Developer / JavaScript Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>

        </div>
    )
}

export default Home;