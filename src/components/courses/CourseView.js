import React from 'react';
import Study from '../assestscourse/studyguide.svg'
import './CourseView.css'
import { Link } from 'react-router-dom';
function CourseView() {
  return (
    <>
    <div>
        <button className='btn btn-primary' style={{marginLeft:"900px", border:"none", borderWidth:"30px"}}><Link to="/tech" style={{color:"white"}}>Back</Link></button>
        </div>
      <div className='header'>
        
        <div className='header-text'>
        
          <p className='head-bold'>Full Stack Web Development Course 2023</p><br /><p className='head-desc'>Learn the latest frameworks and technologies, including Javascript ES6+, Bootstrap 5, Django, Postgres and more.<br /></p>
        </div>
        <div className='header-svg'>
          <img src={Study} alt="SVG" />
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
              <p>Learn Python from beginner to advanced</p>
            </div>
          </div>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Learn JavaScript (ES6+)</p>
            </div>
          </div>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Lots of projects, big and small!</p>
            </div>
          </div>
        </div>
        <div className='video'>
          <center>
            <h2 className='tut-title'>Introduction:</h2>
            <iframe width="600" height="355"
              src="https://www.youtube.com/embed/HD13eq_Pmp8?si=WAWDunf6qqLWUY64">
            </iframe>
          </center>
        </div>
      </div>
      <div className='course-description'>
        
      </div>
      <div className='border'></div>
      <div className='modules'>
        <div className='module'>
          <h2>MODULE-1</h2>
          <div className='module-video'>
            <center>
              <iframe width="600" height="355"
                src="https://www.youtube.com/embed/Rek0NWPCNOc?si=3LTDkF6zF45HkQPA">
              </iframe>
            </center>
          </div>
        </div>
        <div className='border'></div>
        <div className='module'>
          <h2>MODULE-2</h2>
          <div className='module-video'>
            <center>
              <iframe width="600" height="355"
                src="https://www.youtube.com/embed/2QR11oDukn4?si=OeiKjKEhwASES6vX">
              </iframe>
            </center>
          </div>
        </div>
        <div className='border'></div>
        <div className='module'>
          <h2>MODULE-3</h2>
          <div className='module-video'>
            <center>
              <iframe width="600" height="355"
                src="https://www.youtube.com/embed/jRAZlTEZi9I?si=GNkBEONbV7ubVPPX">
              </iframe>
            </center>
          </div>
        </div>
        <div className='border'></div>
        <div className='module'>
          <h2>MODULE-4</h2>
          <div className='module-video'>
            <center>
              <iframe width="600" height="355"
                src="https://www.youtube.com/embed/sqJ6xZ9mUwE?si=8mC1qOPrKRNf_05f">
              </iframe>
            </center>
          </div>
        </div>

      </div>
    </>

  )
}

export default CourseView;
