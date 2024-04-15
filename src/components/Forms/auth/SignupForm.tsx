import { Field, Form, Formik, ErrorMessage } from "formik";
import { registerSchema } from "./validation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal/Modal";
import useAuth from "@/hooks/useAuth";
import axios from "axios";

const SignupForm = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values: {
    cid: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:4005/api/auth/register",
        {
          cid: values.cid,
          password: values.confirmPassword,
        }
      );
      if (response.status === 200) {
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
    router.push("/");
  };
  return (
    <div className="w-full min-h-fit p-5 space-y-8 flex justify-center flex-col">
      <h1 className="text-primary text-4xl text-center font-extrabold">
        Create Your Account
      </h1>

      <Formik
        initialValues={{ cid: "", password: "", confirmPassword: "" }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-8 w-full h-full text-primary">
          <div className="space-y-2">
            <label htmlFor="cid" className="text-2xl font-bold">
              CID
            </label>
            <Field
              type="text"
              name="cid"
              id="cid"
              placeholder="Enter your CID"
              className="rounded-lg placeholder:text-primary font-semibold border h-[3.75rem] border-gray-300 focus:border-primary focus:outline-none px-3 py-2 w-full"
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
              className="rounded-lg placeholder:text-primary font-semibold border h-[3.75rem] border-gray-300 focus:border-primary focus:outline-none px-3 py-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 font-medium text-sm tracking-wider"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-2xl font-bold"
            >
              Confirm Password
            </label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Repeat your password"
              className="rounded-lg placeholder:text-primary font-semibold border h-[3.75rem] border-gray-300 focus:border-primary focus:outline-none px-3 py-2 w-full"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-600 font-medium text-sm tracking-wider"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-black w-full h-12 text-white text-lg font-bold tracking-wide py-2 px-4 rounded-lg hover:bg-black/80"
            >
              Create Account
            </button>
            <p className="text-center font-medium text-lg">
              Already have an account?{" "}
              <Link href={"/"} className="underline text-primary">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </Formik>

      <Modal
        modalOpen={modalOpen}
        onClose={handleCloseModal}
        title="Success"
        desc="Account created successfully"
      />
       {errorMessage && (
        <Modal
          modalOpen={true}
          onClose={() => setErrorMessage('')}
          title="Registration Failed"
          desc={errorMessage}
        />
      )}
    </div>
  );
};

export default SignupForm;
