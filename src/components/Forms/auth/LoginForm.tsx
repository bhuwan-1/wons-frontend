import { Field, Form, Formik, ErrorMessage } from "formik";
import { LoginSchema } from "./validation";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal/Modal";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { AuthContext } from "@/app/(providers)/AuthContext";


const LoginForm = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {setIsLoggedIn} = useContext(AuthContext)
  // const { useLogin, error } = useAuth();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSubmit = async (values: { cid: string; password: string }) => {
  //   const res = await useLogin(values.cid, values.password);
  //   if(res){
  //     setIsLoggedIn(true);
  //     setModalOpen(true);
  //   }
  //   else {
  //     console.log("Login failed: " + error);
  //   }
  // };
  const handleSubmit = async (values: { cid: string; password: string }) => {
    try {
      const response = await axios.post(
        "http://localhost:4005/api/auth/login",
        {
          cid: values.cid,
          password: values.password,
        }
      );
      if (response.status === 200) {
        setIsLoggedIn();
        setModalOpen(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Network Error. Please try again later.");
        }
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/jobs");
  };
  return (
    <div className="w-full min-h-full p-5 space-y-4 flex justify-center flex-col">
      <h1 className="text-primary text-4xl text-center font-extrabold">
        Login to WONS-JBPRS
      </h1>
      {/* <p className="text-lg font-semibold text-left">Login to continue</p> */}
      <Formik
        initialValues={{ cid: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-full h-full text-primary px-4">
            <div className="space-y-2">
              <label htmlFor="cid" className=" text-2xl font-bold ">
                CID
              </label>
              <Field
                type="text"
                name="cid"
                id="cid"
                placeholder="Enter your CID"
                className="rounded-lg placeholder:text-black text-base font-semibold border h-[3.75rem] border-gray-300 focus:border-primary focus:outline-none px-3 py-2 w-full"
              />
              <ErrorMessage
                name="cid"
                component="div"
                className="text-red-600 font-medium text-sm tracking-wider"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="mb-1 text-2xl font-bold">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="rounded-lg placeholder:text-black font-semibold border h-[3.75rem] border-gray-300 focus:border-primary focus:outline-none px-3 py-2 w-full"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 font-medium text-sm tracking-wider"
              />
            </div>
            <div className="w-full h-[300px] bg-[url('/assets/qr.png')] bg-no-repeat bg-center"></div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black w-full h-12 text-white text-lg font-bold tracking-wide py-2 px-4 rounded-lg hover:bg-black/80"
            >
              Submit
            </button>
            <p className="text-center font-medium text-lg">
              Don't have an account?{" "}
              <Link href={"/signup"} className="underline text-black">
                Sign up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
      <Modal
        modalOpen={modalOpen}
        onClose={handleCloseModal}
        type="success"
        title="Login Successful"
        desc="Enjoy earning points :)"
      />
      
      {errorMessage && (
        <Modal
          modalOpen={true}
          onClose={() => setErrorMessage("")}
          type="error"
          title="Login Failed"
          desc={errorMessage}
        />
      )}
    </div>
  );
};

export default LoginForm;
