import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authproviderrr';

const Home = () => {
    const authinfo = useContext(Authcontext)
    return (
        <div>
            <h1>this is home: {authinfo.name}</h1>
        </div>
    );
};

export default Home;