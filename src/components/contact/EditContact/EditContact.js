import React ,{useState, useEffect} from 'react'
import NavBarContact from '../../ContactNavBar/NavBarContact'
import { ContactService } from '../../services/ContactService'
import { Link, useParams, useNavigate } from 'react-router-dom'
let EditContact = () => {
  let navigate = useNavigate();
  let {contactId} = useParams();

  let initialState={
    loading:false,
    contact : {
      name : '',
      photo : '',
      mobile : '',
      email : '',
      subject : '',
      groupId: ''
    },
    groups : [],
    errorMessage:''
  }
  let [state, setState]=useState(initialState);

  useEffect(() => {
    async function handleResp(){
           try{
            setState((value)=>({...state, loading:true}));
            let response = await ContactService.getContact(contactId);
            let groupResponse = await ContactService.getGroups();
            setState((value)=>({
              ...state,
              loading:false,
              contact: response.data,
              groups: groupResponse.data
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

  let updateInput =(event) =>{
    setState((value)=>({...state,
    contact :{
      ...state.contact, 
      [event.target.name] : event.target.value

    }
    }));
  }
  let submitForm = async(event) =>{
    event.preventDefault();
    try{
      let response = await ContactService.updateContact(state.contact, contactId);
      if(response){
        navigate('/contact/list',{replace:true});

      }
    }
    catch(error){
      setState((value)=>({...state,
      errorMessage: error.message
      }));
      navigate(`/contact/edit/${contactId}`,{replace:false});
    }

  };



  let {contact, groups,} = state;


  return (
    <React.Fragment>
      <NavBarContact/>
      <section className='add-contact'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h3 text-primary fw-bold'>Edit Contact</p>
            </div>
            <div className=''>
              <img src={contact.photo}  alt='' className='contact-img'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-m-4'>
              <form onSubmit={submitForm}>
                <div className='mb-2'>
                  <input
                  required="true"
                  name='name'
                  value={contact.name}
                  onChange={updateInput}
                   type='text' className='form-control' placeholder='Name'/>
                </div>
                <div className='mb-2'>
                  <input
                  required="true"
                  name='photo'
                  value={contact.photo}
                  onChange={updateInput}
                  
                  type='text' className='form-control' placeholder='Photo Url'/>
                </div>
                <div className='mb-2'>
                  <input
                  required="true"
                  name='mobile'
                  value={contact.mobile}
                  onChange={updateInput}
                  
                  type='text' className='form-control' placeholder='Mobile'/>
                </div>
                <div className='mb-2'>
                  <input
                  required="true"
                  name='email'
                  value={contact.email}
                  onChange={updateInput}
                  type='text' className='form-control' placeholder='Email'/>
                </div>
                <div className='mb-2'>
                  <input
                  required="true"
                  name='subject'
                  value={contact.subject}
                  onChange={updateInput}
                  
                  type='text' className='form-control' placeholder='Subject'/>
                </div>
                <div className='mb-2'>
                  <select 
                  required="true"
                  name='groupId'
                  value={contact.groupId}
                  onChange={updateInput}
                  className='form-control'>
                    <option value=""> Select Group</option>
                    {
                      groups.length >0 &&
                        groups.map(group => {
                          return(
                            <option key={group.id} value={group.id}>{group.name}</option>
                          )
                        })
                    }



                  </select>
                </div>
                <div className='mb-2'>
                  <input type='submit' className='btn btn-primary' value='Update'/>
                  <Link to={'/contact/list'} className='btn btn-danger ms-2'>Close</Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditContact
