import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import './homePage.css';

const HomePage = () => {
  return (
    <div className='Homepage-div'>
      <Navbar />
      <section className='Homepage-section'>
        <div>
          <p className="Homepage-text">
            The paradise of the <br /> <b className='Homepage-bold'>mechanical</b> keyboards.
          </p>
          <Link className="Homepage-button" to="/shopPage">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage