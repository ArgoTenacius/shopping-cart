import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import { AiOutlineShopping, AiFillGithub } from "react-icons/ai";

const HomePage = () => {
  return (
    <div className='Homepage-div'>
      <header className='Homepage-header'>
        <div>
          <h1> PlaceHolder </h1>
        </div>
        <div className='Homepage-icon-div'>
          <AiOutlineShopping className='Homepage-icon'/>
          <AiFillGithub className='Homepage-icon' />
        </div>
      </header>
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