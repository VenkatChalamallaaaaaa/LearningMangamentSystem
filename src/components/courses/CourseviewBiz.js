import React from 'react';
// import Study from '../assets/studyguide.svg'
import './CourseView.css'
import './courseviewbiz.css'
import { Link } from 'react-router-dom';

function CourseviewBiz() {
  return (
    <>
      <div className='header'>
        <div className='header-text'>
        <div>
        <button className='btn btn-primary' style={{marginLeft:"900px", border:"none", borderWidth:"30px"}}><Link to="/business" style={{color:"white"}}>Back</Link></button>
        </div>
          <p className='head-bold'>Business Analytics</p><br /><p className='head-desc'>Get the foundation in business analysis you need to solve your organization's biggest problems.<br /></p>
        </div>
        <div className='header-svg'>
          <img src="https://www.svgviewer.dev/static-svgs/39922/area-chart-business-analytics-statistics.svg" alt="SVG" />
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
              <p>Learn the foundations of business analysis</p>
            </div>
          </div>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Learn how to analyze, diagram and model requirements</p>
            </div>
          </div>
          <div className='icon-container'>
            <div className='desc-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='desc-text'>
              <p>Improve customer experience</p>
            </div>
          </div>
        </div>
        <div className='video'>
          <center>
            <h2 className='tut-title'>Learn Business Analytics:</h2>
            <iframe width="600" height="355"
              src="https://www.youtube.com/embed/diaZdX1s5L4?si=5G3iKXyL_fIeF5N_">  
            </iframe>
          </center>
        </div>

      </div>

    </>

  )
}

export default CourseviewBiz;