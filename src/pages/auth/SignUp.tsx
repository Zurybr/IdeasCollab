import { NavHero } from "../../components/NavHero";

const SignUp = () => {
  return (
    <div className="signup-page">
      <NavHero />
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
