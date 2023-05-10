import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in hybrid or remote opportunities in the SouthEast of United States of America. 
            If you have any questions please don't hesitate to contact me using the below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input 
                            placeholder='Name' 
                            type='text' 
                            name='name' 
                            required 
                        />
                    </li>
                    <li className="half">
                        <input 
                            placeholder='Email' 
                            type='text' 
                            name='email' 
                            required 
                        />
                    </li>
                    <li>
                        <input 
                            placeholder='Subject' 
                            type='text' 
                            name='subject' 
                            required 
                        />
                    </li>
                    <li>
                        <textarea 
                            placeholder='Message' 
                            name='message' 
                            required 
                        />
                    </li>
                    <li>
                        <input 
                            type='text' 
                            className='flat-button' 
                            value="SEND" 
                        />
                    </li>
                </ul>
            </form>
          </div>
          <div className="info-map">
            Benjamin Smyth,
            <br />
            United States of America,
            <br />
            6102 Pickerel Dr. NE <br />
            Rockford, MI 49341<br />
            <br />
            <span>smythbenb@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[43.07176, 85.45976]} zoom={12}>
                <TileLayer url="https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[43.07176, 85.45976]}>
                    <Popup> Ben lives here</Popup>
                </Marker>
            </MapContainer>
          </div>
        </div>
        <Loader type="pacman" />
    </div>
)}

export default Contact;