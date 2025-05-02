import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Authcontext } from '../provider/Authproviderrr';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    if(loading)
        {return <span className="loading loading-ring loading-lg"></span>}
    if(user)
    {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default Privateroute;

Privateroute.propTypes = {
    children:PropTypes.node
}