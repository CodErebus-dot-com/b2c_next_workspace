"use client";
import { AuthContext } from "@contexts";
import { withAuth } from "@src/hoc/withAuth";
import Image from "next/image";
import { useContext } from "react";
import profilePic from "../../../public/images/ad pfp.png";

const Page = () => {
  const {
    instance: { decodedInstance },
  } = useContext(AuthContext);
  const { emails, given_name, name } = decodedInstance;

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-4xl font-bold text-center mt-10 text-orange-500'>
        Profile
      </h1>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-lg mt-8 p-6'>
        <Image
          src={profilePic}
          alt='Profile Picture'
          width={100}
          height={100}
        />
        <div className='p-6'>
          <h1 className='text-2xl font-semibold mb-4'>{given_name}</h1>
          <p className='text-gray-600 mb-2'>Email: {emails[0]}</p>
          <p className='text-gray-600 mb-2'>Display Name: {name}</p>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
