"use client";
import SignupForm from "@/components/Forms/auth/SignupForm";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="flex min-h-[90vh] bg-gray-100 bg-login bg-center w-full justify-center items-center flex-row">
      {/* <div className="h-[90vh] lg:w-2/3 lg:flex bg-login bg-no-repeat bg-center  sm:hidden  md:hidden"></div> */}
      <div className="xl:w-1/3 lg:w-full md:w-full sm:w-full xs:w-full h-[90vh] py-2 flex justify-end items-center p-4">
        <div className="lg:w-full lg:h-5/6 md:h-full md:w-full sm:h-full sm:w-full xs:h-full xs:w-full border-2 bg-white rounded-lg shadow-md">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
