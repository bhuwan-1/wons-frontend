"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaCakeCandles } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import {ClaimedRewards} from "@/components/ui/Card/ProfileRewards/Card";
import {jwtDecode} from "jwt-decode"

const Profile = () => {
  const [image, setImage] = useState(
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
  );
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("jDqjV@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [show, setShow] = useState(false);
  const [birthday, setBirthday] = useState("01/01/2000");

  const item=jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiIxMDYwNjAwMTM1MSIsImlhdCI6MTcxNDIxMTg0MywiZXhwIjoxNzE0Mjk4MjQzfQ.XGxOWfzMQfMQMrRQg7AoAKJ7thpY6V4EFqUGB08CGzA")
  console.log(item)

  useEffect(() => {
    if (show) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to set overflow back to auto when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const claimed_rewards = [
    {
      id: 1,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 1,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 2,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 3,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 4,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 5,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 6,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
    {
      id: 7,
      title: "Winter Game",
      cost: 100,
      status: "Available",
    },
  ];
  return (
    <div className="p-4 overflow-auto">
      <div className="w-full h-full">
        <div className="flex flex-col lg:flex-row justify-center items-stretch  gap-3">

          <div className="rounded-lg bg-[#f5f5f5ac]  min-h-[70vh] p-4 lg:w-[600px] w-[90%] flex flex-col justify-stretch items-stretch ">
            <div className="avatar flex items-center justify-center h-full w-full p-4">
              <div className="w-[300px] h-[300px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="profile" />
              </div>
              <BsThreeDotsVertical
                className="text-3xl absolute top-0 right-0"
                onClick={() => setShow(!show)}
              />
            </div>

            <div className="h-full w-full p-8 flex flex-col justify-start lg:items-start items-center">
              <CardTitle>Bhuwan Sharma Koirala</CardTitle>
              <div className="mt-5 space-y-1">
                <CardDescription className="flex justify-start gap-4 items-center text-lg">
                  <IoMail className="text-2xl" /> ayeitsbhuws@gmail.com
                </CardDescription>
                <CardDescription className="flex justify-start gap-4 items-center text-lg">
                  <FaPhone className="text-2xl" /> +975-17234567
                </CardDescription>
              </div>
              <p className="text-xl font-normal mt-5 flex justify-between w-[150px] items-center">
                {" "}
                <FaCakeCandles className="text-2xl" /> Jun 07 2023
              </p>
            </div>
          </div>

          <div className=" lg:w-full min-h-[70vh] h-fit w-[90%] rounded-lg bg-[#f5f5f5ac] p-5">
            <h1 className="text-center text-4xl font-bold p-4 text-primary">
              Claimed Rewards
            </h1>
            <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center items-center p-4 w-full mx-auto ">
              {claimed_rewards.map((reward) => (
                <ClaimedRewards
                  key={reward.id}
                  title={reward.title}
                  price={reward.cost}
                  />
              ))}
            </div>
            <div className="w-[87%] h-[100px] bg-primary text-white mx-auto mt-7 rounded-lg flex justify-center items-center">
<p className="text-3xl font-semibold">Points Available: 500</p>
            </div>
          </div>
          

        </div>
      </div>
      {show && (
        <div className="w-full h-full absolute top-0 left-0 z-30 bg-[#00000099]" onClick={()=>{
          setShow(false)
        }}>
          <div className="w-[500px] h-[700px] bg-white rounded-xl p-5 flex flex-col justify-center items-center mx-auto mt-32 relative"
          onClick={(e)=>e.stopPropagation()}
          >
            <p
              onClick={() => setShow(false)}
              className="absolute top-2 right-5 font-semibold text-2xl"
            >
              x
            </p>
            <div className="flex flex-col gap-5 items-stretch ">
              <div className="w-[150px] h-[150px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                <label>
                  <img src={image} alt="profile" className="rounded-full " />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) =>
                      setImage(
                        URL.createObjectURL(
                          e.target.files
                            ? e.target.files[0]
                            : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        )
                      )
                    }
                  />
                </label>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="John Doe" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <IoMail className="text-2xl" />
                <input
                  type="email"
                  className="grow"
                  placeholder="johndoe@gmail.com"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaCakeCandles className="text-2xl" />
                <input type="date" className="grow" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaPhone className="text-2xl" />
                <input
                  type="tel"
                  className="grow"
                  placeholder="+975-17123456"
                />
              </label>
              <button className="btn bg-black text-white hover:bg-[#000000c6]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;


