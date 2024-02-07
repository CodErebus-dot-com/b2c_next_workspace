"use client";
import { Button } from "@acme/ui";
import { useToast } from "@chakra-ui/react";
import { setIdToken } from "@src/authService";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setIdToken();
  }, []);
  const toast = useToast();

  return (
    <div className='bg-gray-100 min-h-screen py-10'>
      <h1 className='text-4xl font-bold text-center mt-10 text-orange-500'>
        Landing Page
      </h1>

      <div className='container mx-auto mt-8 px-4'>
        <div className='flex justify-center'>
          <Link
            className='text-xl text-blue-500 underline'
            href='https://genesisx.netlify.app/'
          >
            GenesisX Documentation
          </Link>
        </div>

        <div className='flex justify-center mt-6'>
          <Button
            className='btn-rose'
            onClick={() =>
              toast({
                title: "Hi There 👋",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
            }
          >
            Click Me
          </Button>
        </div>

        <ul className='list-disc mt-6 text-blue-700 text-xl'>
          <li className='mt-2'>Item 1</li>
          <li className='mt-2'>Item 2</li>
          <li className='mt-2'>Item 3</li>
        </ul>

        <div className='grid grid-cols-3 gap-4 mt-6'>
          <div className='bg-red-300 p-4'>Box 1</div>
          <div className='bg-green-300 p-4'>Box 2</div>
          <div className='bg-blue-300 p-4'>Box 3</div>
        </div>
      </div>
    </div>
  );
}
