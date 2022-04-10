import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
   return (
      <div className='form-container'>
         <div>
            <h2 className='form-title'>Sign Up</h2>
            <form action="">
               <div className='input-group'>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="" />

               </div>
               <div className='input-group'>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="" />

               </div>
               <input className='form-submit' type="submit" value="Sign Up" />
               <p>
                  New to Ema-john?<Link className='form-link' to='/signup'>Create an Account</Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default SignUp;