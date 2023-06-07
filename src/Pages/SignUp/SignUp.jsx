import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/plectrum (1).png";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import SocialLogin from '../../Components/SocialLogIn/SocialLogin';
import animation from "../../assets/animation/78126-secure-login.json";
import Lottie from "lottie-react";
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const SignUp = () => {

    const{updateUser,signUp} = useAuth();

    const[type , setType] = useState("password");
    const [IsShow , setIsShow] = useState(false);
    const [error , setError] = useState("");
    const navigate = useNavigate()


    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => {

        const password = data.password;
        const confirmPassword = data.confirmPassword;
        if(password.length < 6){
            setError("Password must be six characters in length")
        }
        if(password !== confirmPassword){
            return setError("Password doesn't match")
        }
        if(!/(?=.*?[A-Z])/.test(password)){
            return setError("At least one upper case include in your password")
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            return setError("At least one special character include in your password")
        }
        console.log(data);
        signUp(data?.email , data?.password)
        .then(res=>{
            const loggedUser = res.user;
            updateUser(loggedUser , data?.name , data?.photo)
            .then(()=>{
                fetch("http://localhost:5000/users" , {
                    method:"POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Sign Up Successful',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          })
                    }
                })
            })
        })
        .catch(error=>{
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
                     
        })
    }


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
        <div className='flex gap-14 flex-col lg:flex-row items-center justify-center'>
               <div className='lg:w-2/4'>
        <Lottie animationData={animation} loop={true}/>
        </div>
        <div>
        <h1 className='text-center mb-10 brandTitle text-primary text-3xl'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>


        <input type='text' placeholder='Enter Your Name'
        {...register("name", { required: true })} 
        aria-invalid={errors.name ? "true" : "false"} 
        className='inputField'/>
        {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}



        <input type='email' placeholder='Enter Your Email'
        {...register("email", { required: true })} 
        aria-invalid={errors.email ? "true" : "false"} 
        className='inputField'/>
        {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
        
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
        {errors.password && <p role="alert" className='text-error font-medium'>{errors.password?.message}</p>}

        <div className='inline-flex items-center'>
        <input type="password" placeholder='Confirm Password'
        {...register("confirmPassword", { required: "Confirm Password is required" })} 
        aria-invalid={errors.confirmPassword ? "true" : "false"} 
        className='inputField'/>
        </div>
        {errors.confirmPassword && <p role="alert" className='text-error font-medium'>{errors.confirmPassword?.message}</p>}



        <input type='url' placeholder='Enter Your Photo Url'
        {...register("photo", { required: true })} 
        aria-invalid={errors.photo ? "true" : "false"} 
        className='inputField'/>
        {errors.photo?.type === 'required' && <p role="alert" className='text-error font-medium'>Photo is required</p>}
        
        {/* <div>
        <input type="number" placeholder='Your Number' {...register("phone", { min: 5, max: 99 })} className='inputField'/>
        </div> */}

        <select {...register("gender")} className='inputField font-semibold'>
        <option defaultValue="Gender">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>

      <p className='my-3 font-semibold text-red-600'>{error}</p>




        <input type="submit" value="Sign Up" className='myBtn'/>
        </form>
        
        <div className='mt-5'>
            <h1 className='font-medium'>Already have an account?? <Link className='font-semibold text-secondary underline' to="/signIn">Sign In</Link></h1>
        </div>
        <SocialLogin></SocialLogin>
        </div>
               </div>
        </div>
               </section>
    );
};

export default SignUp;