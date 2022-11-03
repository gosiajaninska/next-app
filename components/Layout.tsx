import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode,
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="container flex flex-col min-h-screen relative">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}