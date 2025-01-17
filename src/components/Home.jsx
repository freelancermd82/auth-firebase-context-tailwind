import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h3>This is home: { user && <small>{user.displayName}</small>}</h3>
        </div>
    );
};

export default Home;