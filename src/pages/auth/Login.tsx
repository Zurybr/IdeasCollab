import { NavHero } from "../../components/NavHero";

const Login = () => {
  return (
    <div className="login-page">
      <NavHero />
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
