"use client";

import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
