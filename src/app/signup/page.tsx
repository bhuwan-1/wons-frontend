"use client";
import SignupForm from "@/components/Forms/auth/SignupForm";
import React from "react";
import Image from "next/image";
const SignUp: React.FC = () => {
  return (
    <div className="flex min-h-[90vh]  bg-[#9FCBB7] w-full justify-center items-center flex-row">
      {/* <div className="h-[90vh] lg:w-2/3 lg:flex bg-login bg-no-repeat bg-center  sm:hidden  md:hidden"></div> */}
      <div className="xl:w-3/4 lg:w-full md:w-full sm:w-full xs:w-full h-[90vh] py-2 flex justify-end items-center p-4">
        <div className="w-full h-5/6 border-2 bg-white rounded-lg shadow-md flex ">
          
          <div className="w-[90%] lg:w-1/3 mx-auto h[90%] ">
            <SignupForm />
          </div>
          <div className="w-1/2 hidden lg:flex justify-center items-center">
            <Image
              src={require("../../../public/assets/Mobile login-cuate.png")}
              width={200}
              height={200}
              alt="login"
              className="w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
