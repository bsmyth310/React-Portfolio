import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-b.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-anmate')
    const nameArray = ['e', 'n']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','','s','t','u','d','e','n','t']
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>I</span>
                <br /> I'm 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="Developer" />
                <AnimatedLetters LetterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters LetterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2> Frontend Developer / JavaScript N00b / Carpenter / Foreign Affairs and Political Junky </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home