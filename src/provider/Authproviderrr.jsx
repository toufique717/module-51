import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from  '../firebase/firebase.config.js'

 export const Authcontext = createContext(null);


const Authproviderrr = ({children}) => {

    const [user,setuser]  = useState(null)

    const createuser = (email,password) =>
        {
          return createUserWithEmailAndPassword(auth, email, password);
        }


    const authinfo = {user,createuser}
    return (
         <Authcontext.Provider value = {authinfo}>

            {children}

         </Authcontext.Provider>
    );
};

export default Authproviderrr;
Authproviderrr.propTypes = {
    children:PropTypes.node
}