import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import auth from  '../firebase/firebase.config.js'
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

 export const Authcontext = createContext(null);
 const googleprovider = new GoogleAuthProvider();


const Authproviderrr = ({children}) => {

    const [user,setuser]  = useState(null)
    const [loading,setloading] = useState(true)

    const signinuser = (email,password) =>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signinwithgoogle = ()=>
    {
        setloading(true);
        return signInWithPopup(auth,googleprovider);
    }

    const createuser = (email,password) =>
        {

          setloading(true);
          return createUserWithEmailAndPassword(auth, email, password);
           
        }

        const logout = ()=>
        {
            setloading(true);
            return signOut(auth);
             
        }


        useEffect(()=>
            {
              const unsubscribe =  onAuthStateChanged(auth,currentUser=>
                {
                     
                    console.log('observing currentuser',currentUser)
                    setuser(currentUser)
                    setloading(true);
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


    const authinfo = {user,createuser,signinuser,signinwithgoogle,logout,loading}
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