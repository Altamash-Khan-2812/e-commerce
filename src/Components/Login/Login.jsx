import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === "password" && passwordError) {
      setPasswordError("");
    }
  };
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (values.password.length > 0) {
      if (values.password.length < 4) {
        setPasswordError("Password must be least 4 char");
        return;
      } else if (values.password.length > 10) {
        setPasswordError("Password must be less than 10 char");
        return;
      } else if (!/[0-9]/.test(values.password)) {
        setPasswordError("Password should contain one num");
        return;
      } else if (!/[!@#$%^&*]/.test(values.password)) {
        setPasswordError("Password must have  one special char (!@#$%^&*)");
        return;
      }
    }

    setPasswordError(""); // Clear error if all checks pass
    dispatch(login(values));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form
        className="shadow-lg p-5 flex flex-col gap-5 w-full max-w-md"
        aria-label="Login Form"
        onSubmit={handleFormSubmit}
      >
        <h1 className="bg-gray-900 text-white text-center py-10 rounded-md text-3xl font-bold font-[inter] mb-12 shadow-xl">
          Sign In
        </h1>
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name"
            value={values.name}
            onChange={onChange}
            aria-label="username"
            className="outline-none pl-4 py-3 border-1 border-gray-400 focus:border-gray-800 focus:border-2 rounded-md w-full"
          />
        </div>

        <div className="flex items-center relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            name="password"
            id="password"
            aria-label="password"
            autoComplete="off"
            value={values.password}
            onChange={onChange}
            className="outline-none pl-4 py-3 border-1 border-gray-400 focus:border-gray-800 focus:border-2 rounded-md w-full"
          />
          {values.password.length > 0 && (
            <>
              <FaEye
                className={`w-6 h-5 absolute right-4 cursor-pointer ${
                  !showPassword ? "block" : "hidden"
                }`}
                onClick={() => setShowPassword(!showPassword)}
                role="button"
              />
              <FaRegEyeSlash
                className={`w-6 h-5 absolute right-4 cursor-pointer ${
                  showPassword ? "block" : "hidden"
                }`}
                onClick={() => setShowPassword(!showPassword)}
                role="button"
              />
            </>
          )}
          {passwordError && (
            <p className="text-red-500 absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
              {passwordError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="image" className="sr-only">
            Image URL
          </label>
          <input
            id="image"
            aria-label="Image URL address"
            type="text"
            placeholder="Image URL address"
            name="image"
            value={values.image}
            onChange={onChange}
            autoComplete="off"
            className="outline-none pl-4 py-3 border-1 border-gray-400 focus:border-gray-800 focus:border-2 rounded-md w-full"
          />
        </div>

        <div className="flex items-center gap-4 mb-2">
          <input
            type="checkbox"
            className="cursor-pointer w-5 h-5 rounded-xl"
            aria-label="Remember Me"
          />
          <label htmlFor="rememberMe" className="text-lg text-gray-600">
            Remember Me
          </label>
        </div>

        <button
          aria-label="Sign In"
          className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-full py-2 rounded-md cursor-pointer hover:bg-black"
        >
          Sign In
        </button>

        <p className="text-sm text-center text-gray-600">Image is Optional</p>
      </form>
    </div>
  );
};

export default Login;
