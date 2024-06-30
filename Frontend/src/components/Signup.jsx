import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success('Signup successful');
          reset();
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 1000);
        }

        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error('Error: ' + err.response.data.message);
        }
      });
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center shadow-md'>
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              //   onClick={()=>document.getElementById("my_modal_3").close()}
              >✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type="text" placeholder='Enter your fullname' className='w80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })} />
                <br /> {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}

              </div>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter your email' className='w80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} />
                <br />{errors.email && <span className='text-sm text-red-500'>This field is required</span>}

              </div>

              {/* password */}

              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="password" placeholder='Enter your Password' className='w80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} />
                <br />{errors.password && <span className='text-sm text-red-500'>This field is required</span>}

              </div>
              {/* button  */}
              <div className='flex justify-around mt-4'>
                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-red-600 duration-200'>Signup</button>
                <p>Have account?{" "} <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button></p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup