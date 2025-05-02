import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from  '../firebase/firebase.config.js'

 export const Authcontext = createContext(null);


const Authproviderrr = ({children}) => {

    const [user,setuser]  = useState(null)

    const signinuser = (email,password) =>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createuser = (email,password) =>
        {
          return createUserWithEmailAndPassword(auth, email, password);
        }

        const logout = ()=>
        {
            return signOut(auth);
        }


        useEffect(()=>
            {
              const unsubscribe =  onAuthStateChanged(auth,currentUser=>
                {
                    setuser(currentUser);
                    console.log('observing currentuser',currentUser)
                }
                )
                return ()=>
                {
                    unsubscribe()
                }
            },[])



            useEffect( ()=>
                {
                  const unsubscribe=  onAuthStateChanged(auth,currentUser=>
                    {
                        console.log('currentvalue of the current user :', currentUser)
                        setuser(currentUser);
                    }
                    );
                    return ()=>
                    {
                        unsubscribe();
                    }
                },[])


    const authinfo = {user,createuser,signinuser,logout}
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