import React, { useState } from 'react';
import logo from '../../assets/cards/logo1.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/cards/netflix.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // 🔥 Spinner
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <img src={netflix_spinner} alt="Loading" className="w-16" />
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-[url('/background_banner.jpg')] bg-cover bg-center bg-fixed flex justify-center items-start pt-10 px-4">

      <div className="w-full max-w-[450px] flex flex-col items-center">

        {/* Logo */}
        <img src={logo} alt="Netflix Logo" className="w-[150px] mb-8" />

        {/* Form Container */}
        <div className="w-full bg-black/75 rounded p-8 sm:p-12">

          <h1 className="text-3xl font-medium mb-7 text-white">
            {signState}
          </h1>

          <form onSubmit={user_auth} className="flex flex-col">

            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
                className="w-full h-12 bg-[#333] text-white rounded px-5 text-base font-medium mb-3 outline-none"
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="w-full h-12 bg-[#333] text-white rounded px-5 text-base font-medium mb-3 outline-none"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="w-full h-12 bg-[#333] text-white rounded px-5 text-base font-medium mb-3 outline-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#e50914] text-white rounded text-base font-medium mt-5 hover:bg-red-700 transition"
            >
              {signState}
            </button>

            {/* Help Section */}
            <div className="flex justify-between items-center text-gray-400 text-sm mt-5">

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label>Remember me</label>
              </div>

              <p className="cursor-pointer">Need Help?</p>
            </div>
          </form>

          {/* Switch */}
          <div className="mt-10 text-gray-500 text-sm">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?
                <span
                  onClick={() => setSignState("Sign Up")}
                  className="ml-2 text-white font-medium cursor-pointer"
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?
                <span
                  onClick={() => setSignState("Sign In")}
                  className="ml-2 text-white font-medium cursor-pointer"
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;