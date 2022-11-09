import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote' ;


export const MyMarkdown = ({ children }: { 
  children: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>> 
}) => {
  return( 
    <MDXRemote 
      {...children} 
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a { ...props }></a>;
          }
          return (
            <Link href={ href }>
              <a { ...props }></a>
            </Link>
          )
        }
      }}
    />
  )
}