import React,{useContext} from 'react';
import { UserAuth } from '../Auth/Auth';
import { useNavigation } from 'react-router-dom';
import Loading from '../Pages/LoadingPage/Loading';

const useAuth = () => {

    const auth = useContext(UserAuth)
    return auth
};

export default useAuth;