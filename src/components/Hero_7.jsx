import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Hero_7 = () => {
  return (
    <div> <div className="hero-container7">
    <div className="box-2">
      <div className="left-side">
        <h1>Build simple or complex models.</h1>
        <h3>Amet minim mollit non deserunt ullamco est.</h3>
        <span id="btn">
        <FontAwesomeIcon icon={faPlay} style={{color: "#ffffff",}} />
           </span><span id="btn-text">Watch tutorial</span>
      </div>
      <div className="img-7">
        <img
          src="/src/images/cook/2_AmsGDbiZB5DqvvyaJoAc7YQRYWU.png"
          alt="image"
        />
      </div>
    </div>
  </div></div>
  )
}

export default Hero_7