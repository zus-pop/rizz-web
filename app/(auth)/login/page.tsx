"use client";

import LoginForm from "@/components/LoginForm";
import SpotlightCard from "@/components/SpotlightCard";
import React from "react";

const page = () => {
  const handleLoginSubmit = (data: { email: string; password: string }) => {
    console.log("Dữ liệu đăng nhập:", data);
    alert(`Đã gửi dữ liệu đăng nhập cho email: ${data.email}`);
  };
  return (
    <div>
      <SpotlightCard
        className="custom-spotlight-card bg-sky-900"
        spotlightColor="rgba(208, 86, 106, 0.5)"
      >
        {/* <h2 className="text-2xl font-bold mb-4">Welcome to the Spotlight Card</h2> */}
        <LoginForm onSubmit={handleLoginSubmit} />
      </SpotlightCard>
    </div>
  );
};

export default page;
