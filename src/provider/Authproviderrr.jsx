import React, { createContext } from 'react';
import PropTypes from 'prop-types';

 export const Authcontext = createContext(null);

const Authproviderrr = ({children}) => {
    const authinfo = {name:'sagor nodi mach'}
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