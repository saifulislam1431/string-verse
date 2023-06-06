import React from 'react';
import { FaGoogle} from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className='my-5'>
            <div className="divider">Or Sing In With</div>
            <div className='text-center'>
            <button className='myBtn w-full lg:w-72 inline-flex items-center justify-center gap-2'>
<FaGoogle className='w-6 h-6'/>
                Google
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;