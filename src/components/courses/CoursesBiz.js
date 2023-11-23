import React from 'react'
import './Courses.css'
import { Link } from 'react-router-dom'

function CoursesBiz(){
    return (
        <div class="container py-5">
            <div>
        <button className='btn btn-primary' style={{marginLeft:"900px", border:"none", borderWidth:"30px"}}><Link to="/courses" style={{color:"white"}}>Courses</Link></button>
        </div>
        <h1 class="text-center" style={{color:"white"}}>A broad selection of courses - Business</h1>
        <div class="row row-s-1 row-s-md-3 g-4 py-5">
            <div class="">
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Business_Analyst_%28BA%29.jpg/640px-Business_Analyst_%28BA%29.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/courseview-business" style={{ textDecoration: 'none' }}>
                            <h1 className="card-title">Business Analytics</h1>
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
                            <div class="progress-bar w-50"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="card">
                    <img src="https://assets-global.website-files.com/6318e6b2f58b77044875e67b/632b2eb47b58103aeac94c5f_62263643fcd1b61f8b78ab7b_sales-volume.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/courseview-business" style={{ textDecoration: 'none' }}>
                            <h1 className="card-title">Sales Training</h1>
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
                            <div class="progress-bar w-25"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="">
                <div class="card">
                    <img src="https://www.chieflearningofficer.com/wp-content/uploads/2023/05/AdobeStock_509757335.jpeg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/courseview-business" style={{ textDecoration: 'none' }}>
                            <h1 className="card-title">Leadership</h1>
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
                            <div class="progress-bar w-100 bg-success"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="">
                <div class="card">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*D68dTGfuV54QGrZU16Ce7w.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/courseview-business" style={{ textDecoration: 'none' }}>
                            <h1 className="card-title">Entrepreneurship</h1>
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
                    </div>
                </div>
            </div>

            <div class="">
                <div class="card">
                    <img src="https://emeritus.org/wp-content/uploads/2023/02/Featured-image-25.jpg.optimal.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="/courseview-business" style={{ textDecoration: 'none' }}>
                            <h1 className="card-title">Consulting</h1>
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



export default CoursesBiz