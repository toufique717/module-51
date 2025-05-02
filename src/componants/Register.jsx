 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Authproviderrr, { Authcontext } from '../provider/Authproviderrr'

const Register = () => {

 //const createuser = useContext(Authcontext);

 const { createuser } = useContext(Authcontext);

  

 //console.log(userinfo);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password);

         createuser(email,password)
         .then( result=>
          console.log(result.user)
         )
         .catch(error=>
         {
          console.error(error);
         }
         )



          
      };


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Now!</h1>
             
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
  
            <p>already registered ? <Link to="/login"> <a className="link link-primary">login</a></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;