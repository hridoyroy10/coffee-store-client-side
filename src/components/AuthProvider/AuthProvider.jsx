import { getAuth } from 'firebase/auth';
import PropTypes from 'prop-types'; 
import app from '../../firebase/firebase.confing';
import { createContext } from 'react';

const AuthContext = createContext(null)

// const auth = getAuth(app)


const AuthProvider = ({children}) => {
    


    const authInfo = {

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider;