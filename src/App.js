
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Homepage from './components/HomeComponents/Homepage';
import About from './components/about/About';

import AddContact from './components/contact/AddContact/AddContact';
import ContactList from './components/contact/ContactList/ContactList';
import EditContact from './components/contact/EditContact/EditContact';
import ViewContact from './components/contact/ViewContact/ViewContact';

import CoursesBiz from './components/courses/CoursesBiz';
import Courses from './components/courses/Courses';
import CoursesLife from './components/courses/CoursesLife';
import CourseView from './components/courses/CourseView';
import CourseviewLife from './components/courses/CourseviewLife';
import CourseviewBiz from './components/courses/CourseviewBiz';
import NotFound from './components/courses/NotFound';
import CoursePage from './components/courses/Coursepage';

import ContactList2 from './components/contact/ContactList/ContactList2';
import ViewContact2 from './components/contact/ViewContact/ViewContact2';
import Loginadmin from './components/Loginadmin';
import StarterPage from './components/StarterPage';

import ContactPage from './components/contactpage/ContactPage';
import AdminDashboard from './components/admin/AdminDashboard';
import Contact from './components/contactpage/Contact';
import FAQpage from './components/contactpage/FAQpage';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/register' element={<Signup/>}></Route>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/FAQ' element={<FAQpage/>}></Route>
        <Route path='/ContactHome' element={<Contact/>}></Route>


        <Route path='/adminlogin' exact Component={Loginadmin}/>


        <Route path='/' exact Component={StarterPage}/>

        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' exact Component={Homepage}/>
        <Route path='/about' exact Component={About}/>
     
        <Route path='/contact/list' exact Component={ContactList}/>
        <Route path='/contact' exact Component={ContactList2}/>
        <Route path='/contact/add' exact Component={AddContact}/>
        <Route path='/contact/edit/:contactId' exact Component={EditContact}/>
        <Route path='/viewcontact/:contactId' exact Component={ViewContact}/>
        <Route path='/viewcontact2/:contactId' exact Component={ViewContact2}/>
        <Route path='/courses' exact Component={CoursePage}/>
    
        <Route path='/courseview' element={<CourseView/>}></Route>
        <Route path='/courseview-lifestyle' element={<CourseviewLife/>}></Route>
        <Route path='/courseview-business' element={<CourseviewBiz/>}></Route>
        <Route path='/tech' exact Component={Courses}/>
        <Route path='/business' exact Component={CoursesBiz}/>
        <Route path='/lifestyle' exact Component={CoursesLife}/>
        <Route path='/*' exact Component={NotFound}/>

        <Route path="/query" element={<ContactPage />} />
                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                ></Route>

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
