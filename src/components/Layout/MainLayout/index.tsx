import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
