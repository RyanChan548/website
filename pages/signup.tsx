import Head from "next/head";
import StudentNavbar from "@/components/studentnavbar";
import Signup1 from "@/components/Signup1";
export default function Signin() {
  return (
    <>
      <div className="absolute inset-0 items-center min-h-full bg-blue-800">
        <div className="items-center justify-center flex-row flex min-h-full ">
          <Signup1 />
        </div>
      </div>
    </>
  );
}
