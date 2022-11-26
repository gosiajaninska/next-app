import Link from "next/link";
import { MDXRemote } from 'next-mdx-remote' ;
import { MarkdownResult } from "../utility";


export const MyMarkdown = ({ children }: { children: MarkdownResult }) => {
  return( 
    <MDXRemote 
      {...children} 
      components={{
        a: ({ href, ...props }) => {

          if (!href) {
            return <a { ...props }></a>;
          }

          if (linkIsExternal(href)) {
            return <a href={ href } { ...props } rel="noopener noreferrer" className="bg-red-700 text-white px-2 py-1 inline-block m-1"></a>;
          } else {
            return <Link href={ href }><a { ...props } className="bg-blue-700 text-white px-2 py-1 inline-block m-1"></a></Link>;
          }

        }
      }}
    />
  )
}


const linkIsExternal = (href: string) => {
  let isExternal = false;
  const [hrefProtocol, hrefRest] = href.split("://");
  const hrefHost = hrefRest?.split("/")[0];

  const hasProtocol = hrefProtocol === "http" || hrefProtocol === "https";
  const hostIsEqual = hrefHost === appHost();

  if (hasProtocol && !hostIsEqual) {
    isExternal = true;
  }

  return isExternal;
}

const appHost = () => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL;
  
  if (!url) {
    throw new Error(`Missing NEXT_PUBLIC_VERCEL_URL env variable!`);
  }

  return url;
}

