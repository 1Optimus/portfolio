import React from 'react'
import './experiences.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experiences = () => {
  return (
    <section id='experiences'>
      <h5> What skills i have</h5>
      <h2> My experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>HMTL5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
        <h3>Backtend development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>GCP</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MySql and Oracle</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences