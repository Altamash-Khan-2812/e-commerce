import { Alert } from "@material-tailwind/react";


const Error = () => {
  return <div className="grid grid-cols-1 items-center justify-items-center h-screen">
        <div className="w-[96]">
             <Alert color="red" className="text-xl font-[inter]  font-bold">Sorry no products match your filter ... Clear the filter and try again 😊</Alert>
        </div>
  </div>
};

export default Error;
