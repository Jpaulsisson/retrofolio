import '../about/about.styles.scss'
import Arrows from '../../resources/arrows-img-nobg.png'
import LovePeople from '../../resources/love-people-img.jpeg'
import GetUp from '../../resources/get-up-img.jpeg'
import Peace from '../../resources/peace-img.jpeg'
import React, { useState } from 'react'


function About() {

  const [active, setActive] = useState(null);

  const handleScroll = event => {
    setActive(event);
    console.log(active);
  }

  return (
    <div onScrollCapture={handleScroll} id='about' className='about-container'>
      <div className="arrows-transition">
        <img className='arrow-1' src={Arrows} alt="neon arrows" />
        <img className='arrow-2' src={Arrows} alt="neon arrows" />
        <img className='arrow-3'  src={Arrows} alt="neon arrows" />
        <img className='arrow-4'  src={Arrows} alt="neon arrows" />
      </div>
      <h2 className='about-header'><span className={['first-letter', active ? 'active' : 'inactive']}>a</span>bout</h2> 
      <div className="img-p-container">
        <ul className="about-me">
          <li className='list-item'>
            <img src={LovePeople} alt="Neon sign says I love people" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit inventore amet officia? Omnis totam modi repellat assumenda perspiciatis? Maxime voluptate, delectus esse quas nemo sunt neque molestias aperiam deserunt.</p>
          </li>
          <li className='list-item'>
            <img src={GetUp} className='get-up' alt="something" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laudantium vel voluptas aut ad aperiam, eos numquam assumenda illum incidunt id nesciunt accusantium, cum amet nemo culpa provident sit vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex nesciunt dolor eligendi numquam commodi delectus. </p>
          </li>
          <li className='list-item'>
            <img src={Peace} alt="stuff" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque distinctio itaque laborum porro, at nisi sed veniam! Labore, veniam?Dolores recusandae, reprehenderit praesentium labore quidem ullam consequuntur porro provident. Earum vitae, tempora minus autem .</p>
          </li>
        </ul>
      </div>
  </div>
  
  )
}

export default About
{/* <img src={LovePeople} className='about-img' />     */}
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos atque eligendi commodi quas repellat alias accusamus quis ipsa expedita totam at dolores quasi tenetur magni quam, a quibusdam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores temporibus quia, omnis excepturi placeat eos praesentium ab libero quo, corporis maxime esse odit quod debitis? Saepe non libero excepturi! Lorem</p> */}