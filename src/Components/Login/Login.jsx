import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form
        className="shadow-lg p-5 w-[25%] flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login(values));
        }}
      >
        <h1 className="bg-gray-900 text-white text-center py-10 rounded-md text-3xl font-bold font-[inter] mb-12 shadow-xl">
          Sign In
        </h1>
        <div>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Email"
            value={values.name}
            onChange={onChange}
            className="outline-none pl-4 py-3 border-1 border-gray-400 focus:border-gray-800 focus:border-2 rounded-md w-full"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={onChange}
            className="outline-none pl-4 py-3 border-1 border-gray-400 focus:border-gray-800 focus:border-2 rounded-md w-full"
          />
        </div>
        <div>
          <input
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
          />
          <p className="text-lg text-gray-600">Remember Me</p>
        </div>
        <button className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-full py-2 rounded-md cursor-pointer hover:bg-black">
          Sign In
        </button>

        <p>Image is Optional</p>
      </form>
    </div>
  );
};

export default Login;
