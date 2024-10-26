import React from 'react';
import './speakings.css';
import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';
import Work5 from '../../assets/work5.jpg';

const Speakings = () => {
    return (
        <div className='speaking'>
        <section className="about section" id="speakings">
            <h2 className="section__title">Public Speakings</h2>
            <span className="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div className="about__container container grid">
                <img src= {Work1} alt="" className="about__img" />
                <div className="about__data">
                    <h2>October 10</h2>
                    <p className="about__description">Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. Quidem magnam rerum velit obcaecati soluta, alias officiis.
                    </p>
                    <a download="" href="" className="button button--flex">RSVP
                    </a>
                </div>
                <div className="about__data">
                    <h2>September 21</h2>
                    <p className="about__description">Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. Quidem magnam rerum velit obcaecati soluta, alias officiis.
                    </p>
                    <a download="" href="" className="button button--flex">RSVP
                    </a>
                </div>
                <img src= {Work2} alt="" className="about__img" />
                <img src= {Work3} alt="" className="about__img" />
                <div className="about__data">
                    <h2>November 15</h2>
                    <p className="about__description">Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. Quidem magnam rerum velit obcaecati soluta, alias officiis.
                    </p>
                    <a download="" href="" className="button button--flex">RSVP
                    </a>
                </div>
                <div className="about__data">
                    <h2>January 9</h2>
                    <p className="about__description">Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. Quidem magnam rerum velit obcaecati soluta, alias officiis.
                    </p>
                    <a download="" href="" className="button button--flex">RSVP
                    </a>
                </div>
                <img src= {Work4} alt="" className="about__img" />
                <img src= {Work5} alt="" className="about__img" />
                <div className="about__data">
                    <h2>December 17</h2>
                    <p className="about__description">Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. Quidem magnam rerum velit obcaecati soluta, alias officiis.
                    </p>
                    <a download="" href="" className="button button--flex">RSVP
                    </a>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Speakings