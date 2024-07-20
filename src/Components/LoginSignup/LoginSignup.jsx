// import React, { useState } from 'react'
// import './LoginSignup.css'

// import user_icon from '../Assets/Icons/person.png';

// import email_icon from '../Assets/Icons/mail.png';

// import password_icon from '../Assets/Icons/password.png';

// import specialty_icon from '../Assets/Icons/specialty.png';

// import { signUp } from '../../services/user-service';


// export const LoginSignup = () => {
//   const [action,setAction] = useState("Login");
//   return (

//     <div className='container'>

//       <div className="header">
//         <div className="text" style={{textAlign:"center"}}>{action}</div>
//         <div className="underline"></div>

//       </div>
//       <div className="inputs">
//         {action=="Login"?<div></div>:        <div className="input">
//           <img src={user_icon} alt="" /> 
//           <input type="text" placeholder='Name' />
//         </div>}
//         {action=="Login"?<div></div>:<div className="input">
//           <img src={specialty_icon} alt="" height={30} /> 
//           <input type="specialty" placeholder='Specialty' />
//         </div>}
   
    

//         <div className="input">
//           <img src={email_icon} alt="" /> 
//           <input type="email" placeholder='Email Id' />
//         </div>

//         <div className="input">
//           <img src={password_icon} alt="" /> 
//           <input type="password" placeholder='Password' />
//         </div>
    
//       </div>
//       {action=="Sign Up"?<div></div>:<div className="forget-password">Lost Password?<span onClick={()=>{setAction("Sign Up")}}>Click Here!</span></div>}
//       <div className="submit-container">
//         <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//       </div>
        

//     </div>
//   );
// };
import React, { useState } from 'react';
import './LoginSignup.css'; // Assuming you have defined your CSS styles here
import user_icon from '../Assets/Icons/person.png';
import email_icon from '../Assets/Icons/mail.png';
import password_icon from '../Assets/Icons/password.png';
import specialty_icon from '../Assets/Icons/specialty.png';
import { signUp } from '../../services/user-service'; // Import your service function for signing up

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Call your signUp function from the service
            const response = await signUp({ name, specialty, email, password });
            console.log('Sign up successful:', response.data);
            // Handle success (redirect, show message, etc.)
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text" style={{textAlign:"center"}}>Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" /> 
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                    <img src={specialty_icon} alt="" height={30} /> 
                    <input type="text" placeholder='Specialty' value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" /> 
                    <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" /> 
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleSignUp}>Sign Up</div>
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default SignUpForm;

