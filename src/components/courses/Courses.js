import React from 'react'
import './Courses.css'
import Webdev from '../assestscourse/webdev.png';
import Ai from '../assestscourse/ai.jpg';
import Eth from '../assestscourse/hack.jpg';
import Java from '../assestscourse/javaa.png';
import CyberSec from '../assestscourse/cybsec.png';
import Py from '../assestscourse/python.jpg';
import { Link } from 'react-router-dom';


function Courses() {
    return (
        <div class="container py-5">
            <div>
        <button className='btn btn-primary' style={{marginLeft:"900px", border:"none", borderWidth:"30px"}}><Link to="/courses" style={{color:"white"}}>Courses</Link></button>
        </div>
            <h1 class="text-center " style={{color :"white"}}>A broad selection of courses - Tech</h1>
            <div class="row row-s-1 row-s-md-3 g-4 py-5">
                <div class="">
                    <div class="card">
                        <img src={Webdev} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Web Development</h1>
                            </a>
                            {/* <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                dignissimos accusantium amet similique velit iste.</p> */}
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>8 Modules</p>
                                </div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                <div class="progress-bar w-100 bg-success"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src="https://www.macworld.com/wp-content/uploads/2023/09/ios-17-logo-on-an-iPhone-4.jpg?quality=50&strip=all" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">iOS Development</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>12 Modules</p>
                                </div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                <div class="progress-bar w-75"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src={Eth} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Ethical Hacking</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>6 Modules</p>
                                </div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                <div class="progress-bar w-50"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src={Java} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Java Development</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>8 Modules</p>
                                </div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                <div class="progress-bar w-25"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src={CyberSec} class="card-img-top" alt="..." />
                        <div class="card-body">
                            {/* <Link to="/courseview"><h1 class="card-title">Cyber Security</h1></Link> */}
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Cyber Security</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>12 Modules</p>
                                </div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                <div class="progress-bar w-100 bg-success"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src={Py} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Python Dev</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>6 Modules</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src="https://www.inovex.de/wp-content/uploads/2018/03/react-native.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">React Native</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p> 6 Modules</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src={Ai} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Machine Learning</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>10 Modules</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="">
                    <div class="card">
                        <img src="https://cdn.wccftech.com/wp-content/uploads/2023/02/WCCFunrealengine59.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="/courseview" style={{ textDecoration: 'none' }}>
                                <h1 className="card-title">Unreal Engine</h1>
                            </a>
                            <div className='containsvg'>
                                <div className='course-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='texxt'>
                                    <p>12 Modules</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    )

}



export default Courses

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Courses.css';
// import Webdev from '../assets/webdev.png';
// import Ai from '../assets/ai.jpg';
// import Eth from '../assets/hack.jpg';
// import Java from '../assets/javaa.png';
// import CyberSec from '../assets/cybsec.png';
// import Py from '../assets/python.jpg';

// function Courses() {
//     return (
//         <div className="container py-5">
//             <h1 className="text-center">A broad selection of courses - Tech</h1>
//             <div className="row row-s-1 row-s-md-3 g-4 py-5">
//                 {/* Course cards with "Enroll Now" buttons that link to CourseView */}
//                 <CourseCard image={Webdev} title="Web Development" price="$15.99" />
//                 <CourseCard image={Ai} title="Machine Learning" price="$16.99" />
//                 {/* Add other course cards here */}
//             </div>
//         </div>
//     );
// }

// // A separate CourseCard component to avoid duplicating code
// function CourseCard({ image, title, price }) {
//     return (
//         <div className="">
//             <div className="card">
//                 <img src={image} className="card-img-top" alt="Course" />
//                 <div className="card-body">
//                     <h2 className="card-title">{title}</h2>
//                     <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos accusantium amet similique velit iste.</p>
//                 </div>
//                 <div className="mb-5 d-flex justify-content-around">
//                     <h3>{price}</h3>
//                     <Link to="/courseview" className="btn btn-primary">Enroll Now</Link> {/* Use Link to navigate to CourseView */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Courses;
