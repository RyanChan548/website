import Head from "next/head";
import StudentNavbar from "@/components/studentnavbar";
import Signin1 from "@/components/Signin1";
export default function Signin() {
  return (
    <>
      <div className="absolute inset-0 items-center min-h-full bg-blue-800">
        <div className="items-center justify-center flex-row flex min-h-full ">
          <Signin1 />
        </div>
      </div>
    </>
  );
}
