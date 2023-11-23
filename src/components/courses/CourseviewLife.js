import React from 'react';
// import Study from '../assets/studyguide.svg'
import './CourseView.css'
import './Courseviewlife.css'
import { Link } from 'react-router-dom';
function CourseviewLife() {
  return (
    <>
    <div>
        <button className='btn btn-primary' style={{marginLeft:"900px", border:"none", borderWidth:"30px"}}><Link to="/lifestyle" style={{color:"white"}}>Back</Link></button>
        </div>
      <div className='header'>
      <div>

      </div>
      <div>

      </div>

        <div className='header-text'>
          <div>
            
          </div>
          <p className='head-bold'>Gardening Course 2023</p><br /><p className='head-desc'>Gardening can be considered both as an art, concerned with arranging plants harmoniously in their surroundings, and as a science, encompassing the principles and techniques of plant cultivation.<br /></p>
        </div>
        <div className='header-svgg'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/gardening-3587216-2997742.png?f=webp" alt="SVG" />
        </div>
      </div>
      <div className='hero'>
        <div className='course-desc'>
          <h2 className='desc-title'>What You'll Learn:</h2>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Soil preparation</p>
            </div>
          </div>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Making your own potting mix</p>
            </div>
          </div>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Different sowing/planting methods</p>
            </div>
          </div>
        </div>
        <div className='video'>
          <center>
            <h2 className='tut-title'>Learn gardening:</h2>
            <iframe width="600" height="355"
              src="https://www.youtube.com/embed/dq8ojt3Frj0?si=YDkNUzbs94BH-ZjK">  
            </iframe>
          </center>
        </div>

      </div>

    </>

  )
}

export default CourseviewLife;