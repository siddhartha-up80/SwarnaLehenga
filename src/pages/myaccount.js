import React, { useEffect } from "react";
import Loading from "@/components/loading/Loading";
import { useRouter } from "next/router";

const MyAccount = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/saree");
    }
  }, []);

  return (
    <div className="h-screen">
      <div className="text-4xl">
       loading...
      </div>
    </div>
  );
};

export default MyAccount;
