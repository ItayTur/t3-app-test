"use client";

import { SignInButton } from "@clerk/nextjs";

export const SignInBtn = () => {
  return (
    <SignInButton>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "hsl(280 100% 70%)",
            color: "#ffffff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          תתחבר
        </button>
      </div>
    </SignInButton>
  );
};
