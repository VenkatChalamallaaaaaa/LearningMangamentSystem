import React from 'react';
import { Link} from 'react-router-dom';
import './Coursepage.css';


function CoursePage() {
  return (
    <div>
      <div className="course-page">
        <div>
        <button className='btn btn-primary' style={{marginLeft:"900px", border:"none", borderWidth:"30px"}}><Link to="/home" style={{color:"white"}}>Home</Link></button>
        </div>
        <h2 className="courses-title" style={{fontSize:"80px"}}>Courses</h2>
        
        <div className="course-list">
          <div className="course-card">
            <h3 className="course-card-title">
              <Link to="/tech" className="course-link">
                Tech Course
              </Link>
            </h3>
            <p className="course-card-description">
              Learn the latest technologies and programming languages.
            </p>
          </div>
          <div className="course-card">
            <h3 className="course-card-title">
              <Link to="/business" className="course-link">
                Business Course
              </Link>
            </h3>
            <p className="course-card-description">
              Explore business strategies and management skills.
            </p>
          </div>
          <div className="course-card">
            <h3 className="course-card-title">
              <Link to="/lifestyle" className="course-link">
                Lifestyle Course
              </Link>
            </h3>
            <p className="course-card-description">
              Improve your lifestyle with health and wellness courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
