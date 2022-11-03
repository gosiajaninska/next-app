import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

interface LayoutProps {
  children: ReactNode,
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="container flex flex-col min-h-screen relative">
      <DefaultSeo {...SEO} />
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}