import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit'
import React , {useContext, useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/UserContext'
const Profile = () => {
  const context = useContext(userContext);
  const {user, signout} = context;
  const navigate = useNavigate();
  const [name, setname] = useState("");
  useEffect(() => {
    if(user.stat){
      setname(user.user.name);
    }
    else{
      setname("anonamous");
    }
    return () => {
      
    }
  }, [user])
  const sigout =()=>{
    signout();
    navigate('/');
  }
  return (
    <div >
    <MDBContainer className='text-white text-end'>
     <div>{name.toUpperCase()}
    <MDBIcon fas icon='user-circle' className="p-2"></MDBIcon></div>
    <MDBBtn color="btn btn-outline-light btn-lg my-2" onClick={sigout}>Sign out</MDBBtn>
    </MDBContainer></div>
  )
}

export default Profile;