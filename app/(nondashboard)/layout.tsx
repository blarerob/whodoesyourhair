"use client";

import React from "react";

import "../globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (

        <div className="h-full w-full">
          <main
            className={`flex-grow`}
          >
            {children}
          </main>
        </div>
  );
};

export default Layout;