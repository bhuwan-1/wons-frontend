"use client";

import LoginForm from "@/components/Forms/auth/LoginForm";

export default function Home() {
  return (
    <div className="flex min-h-[90vh] bg-gray-100 bg-login bg-center w-full justify-center items-center flex-row">
      {/* <div className="h-[90vh] lg:w-2/3 lg:flex bg-login bg-no-repeat bg-center  sm:hidden  md:hidden"></div> */}
      <div className="xl:w-1/3 lg:w-full md:w-full sm:w-full xs:w-full h-[90vh] py-2 flex justify-end items-center p-4">
        <div className="w-full h-fit border-2 bg-white rounded-lg shadow-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
