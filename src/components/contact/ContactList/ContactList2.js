import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./contactlist.css"
import { ContactService } from '../../services/ContactService'
import Spinner from '../../spinner/Spinner'

let ContactList2 = () => {



  let initialState1 = {
    text : '',
  }
  let [query, setQuery] = useState(initialState1)


  let initialState={
    loading:false,
    contacts : [],
    filteredContacts :[],
    errorMessage:''
  }
  let [state, setState]=useState(initialState)

  useEffect(() => {
    async function handleResp(){
           try{
            setState((value)=>({...state, loading:true}));
            let response = await ContactService.getALLContacts();
            setState((value)=>({
              ...state,
              loading:false,
              contacts: response.data,
              filteredContacts : response.data
            }))
           }
           catch (error){
            setState((value)=>({...state, loading:false,
            errorMessage: error.message
          }));
           }
    };
    
    handleResp();
  },[]);

  let clickDelete = async(contactId)=>{
    try{
      let response = await ContactService.deleteContact(contactId);
      if(response){
        setState((value)=>({...state, loading:true}));
        let response = await ContactService.getALLContacts();
        setState((value)=>({
          ...state,
          loading:false,
          contacts: response.data,
          filteredContacts : response.data
        }))

      }

    }
    catch(error){
      setState((value)=>({...state, loading:false,
        errorMessage: error.message
      }));

    }
  }

  let searchContacts=(event) => {
    setQuery((value)=>({...query,
      text: event.target.value
    }));
    let theContacts = state.contacts.filter(contact=>{
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setState((value)=>({...state, 
      filteredContacts: theContacts
    }));
  };
  let {loading,filteredContacts} = state;


  return (
    <React.Fragment>
      <section className='contact-search p-3'>
        <div className=''>
          <div className=''>
            <div className=''>
              <div className=''> 
                <p className='h3'> <span className='Manager'>Contacts</span>
                <Link to={'/home'} className='btn btn-primary ms-2'>
                    
                      Back</Link>
                  
                </p>
                <p className='fst-italic'>All The Teachers are Avaliable to Help and Give Guidance
                </p>
              </div>          
            </div>
            <div className='' >
              <div className='col-md-12'>
                <form className='row'>
                  <div className='col'>
                  <div className='mb-9'>
                    <input
                      name ="text"
                      value = {query.text}
                      onChange={searchContacts}
                     type='text' className='form-control' placeholder='Search Names'></input>
                  </div>
                  </div>
                  <div className='col'>
                  <div className=''>
                    <input type='submit' className='btn btn-outline-primary' value="Search" ></input>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner/> :
        <React.Fragment>
          <section className='contact-list'>
        <div className='unit'>
          <div className='row'>
            {
              filteredContacts.length >0 &&
              filteredContacts.map(contact =>{
                return(
                  <div className='col-md-6' key={contact.id}>
              <div className='card2'>
                <div className=''>
                 <div className=''>
                 <div className='col-md-4'>
                    <img src={contact.photo} alt='' className=' contact-img'/>
                  </div>
                  <div className='col'>
                    <ul className='list-group'>
                      <li className='list-group-item list-group-item-action'>
                        Name : <span className='fw-bold'>{contact.name}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Mobile : <span className='fw-bold'>{contact.mobile}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Email : <span className='fw-bold'>{contact.email}</span>
                      </li>
                  
                    </ul>

                  </div>
                  <div className='row-md-1 '>
                    <ul>
                      <Link to={`/viewcontact2/${contact.id}`}  className='btn btn-warning'>
                      <i className='fa fa-eye'/>
                      </Link>
                    </ul>
                  </div>
                 </div>
                </div>
              </div>
            </div>

                )
              })
            }
            

          </div>
        </div>
      </section>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default ContactList2
