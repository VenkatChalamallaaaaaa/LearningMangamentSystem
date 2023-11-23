import React, { useState,useEffect } from 'react'
import { ContactService } from '../../services/ContactService'
import NavBarContact from '../../ContactNavBar/NavBarContact'
import { Link , useParams} from 'react-router-dom'
import Spinner from '../../spinner/Spinner'
let ViewContact = () => {

  let {contactId}= useParams();

  let initialState={
    loading:false,
    contact : {},
    errorMessage:'',
    group :{}
  }
  let [state, setState]=useState(initialState)

  useEffect(() => {
    async function handleResp(){
           try{
            setState((value)=>({...state, loading:true}));
            let response = await ContactService.getContact(contactId);
            let groupResponse = await ContactService.getGroup(response.data)
            setState((value)=>({
              ...state,
              loading:false,
              contact: response.data,
              group : groupResponse.data
            }))
           }
           catch (error){
            setState((value)=>({...state, loading:false,
            errorMessage: error.message
          }));
           }
    };
    
    handleResp();
  },[contactId]);

  let {loading, contact, group} = state;
  return (
    <React.Fragment>
      <NavBarContact/>
      <section className='view-contact-intro p-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col'>
            <p className='h3 text-warning'>View Contact</p>
            <p></p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner/> : 
        <React.Fragment>
          {
             <section className='view-contact mt-3'>
             <div className='container'>
               <div className='row'>
                 <div className='col-md-4'>
                   <img src={contact.photo} alt='' className='contact-img'/>
                 </div>
                 <div className='col-md-9'>
                 <ul className='list-group'>
                   <li className='list-group-item list-group-item-action'>
                   Name : <span className='fw-bold'>{contact.name}</span>
                    </li>
                     <li className='list-group-item list-group-item-action'> Mobile : <span className='fw-bold'>{contact.mobile}</span>
                     </li>
                     <li className='list-group-item list-group-item-action'>
                     Email : <span className='fw-bold'>{contact.email}</span>
                     </li>
                     <li className='list-group-item list-group-item-action'>
                     Subject : <span className='fw-bold'>{contact.subject}</span>
                     </li>
                     <li className='list-group-item list-group-item-action'>
                     Group : <span className='fw-bold'>{group.name}</span>
                     </li>
                       
                   </ul>
                 </div>
               </div>
               <div className='row'>
                 <div className='col'>
                   <Link to={'/contact/list'} className='btn btn-warning'>Back</Link>
                 </div>
               </div>
             </div>
     
           </section>
          }
          
        </React.Fragment>
      }
     
    </React.Fragment>
  )
}

export default ViewContact
