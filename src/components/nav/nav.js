import React,{useEffect,useState} from 'react'
import './nav.scss'

const netflixLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
const userIcon = 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg';

function Nav() {
  const [isShown,handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',function(){
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    })
    return () => {
      window.removeEventListener('scroll')
    }
  },[])

  return (
    <div className={`nav ${isShown? "nav__shown": ''}`.trim()}>
      <img src={netflixLogo} alt="netflix logo" className="nav__img nav__logo"/>
      <img src={userIcon} alt="user icon" className="nav__img nav__icon"/>
    </div>
  )
}

export default Nav;
