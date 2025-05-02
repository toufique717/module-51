import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authproviderrr';

const Login = () => {
  const { signinuser, signinwithgoogle } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signinuser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  const handleGoogle = () => {
    signinwithgoogle()
      .then(result => {
        console.log(result.user);
        //navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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

          <p>New here? <Link to="/register" className="link link-primary">Register</Link></p>
          <p onClick={handleGoogle} className="link link-primary cursor-pointer">Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
