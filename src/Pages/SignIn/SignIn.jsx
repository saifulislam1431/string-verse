import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo/plectrum (1).png";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import SocialLogin from '../../Components/SocialLogIn/SocialLogin';
const SignIn = () => {
    const[type , setType] = useState("password");
    const [IsShow , setIsShow] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);


    const handleShow =()=>{
        setType("text")
    }

    const handleHide =()=>{
        setType("password")
    }


    return (
       <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
<div>
    <div className='text-center my-10'>
    <NavLink to="/" className="inline-flex items-center gap-2">
                    <img src={logo} alt="Logo" className='w-12' />
                    <span className='brandTitle text-primary'>String</span>
                </NavLink>
    </div>
<div className='flex gap-10 items-center justify-center'>
       <div>
<h1>fkdsjfkjdsfj</h1>
</div>
<div>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
<input type='email' placeholder='Enter Your Email'
{...register("email", { required: true })} 
aria-invalid={errors.email ? "true" : "false"} 
className='inputField'/>
{errors.email?.type === 'required' && <p role="alert">Email is required</p>}

<div className='inline-flex items-center'>
<input type={type} placeholder='Enter Your Password'
{...register("password", { required: "Password is required" })} 
aria-invalid={errors.password ? "true" : "false"} 
className='inputField'/>
<div className='relative right-8 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                            }
                        </div>
</div>
{errors.password && <p role="alert">{errors.password?.message}</p>}

<input type="submit" value="Sign In" className='myBtn'/>
</form>

<div className='mt-5'>
    <h1 className='font-medium'>New To String? <Link className='font-semibold text-secondary underline' to="/signUp">Sign Up</Link></h1>
</div>
<SocialLogin></SocialLogin>
</div>
       </div>
</div>
       </section>
    );
};

export default SignIn;