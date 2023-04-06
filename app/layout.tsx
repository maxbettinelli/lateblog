import Image from "next/image"
import Link from "next/link"
import './globals.css'
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="font-bold text-center bg-slate-900 p-8 my-6 rounded-lg">
        <Image src="/dalle-column.png" width={40} height={40} alt='' className='mx-auto rounded-xl'/>
      <Link href="/"><h1 className="font-bold text-white text-2xl mt-4">Max's Blog</h1></Link>
        <p className="text-slate-200">♠ ♣ Random Thoughts With No Filter ♦ ♥ </p>
      </div>
    </header>
  )

const footer = (
  <footer>
    <div className="border-t text-center text-slate-900 border-slate-900 mt-12 py-6">
      <p>Developed by Max | 2023</p>
    </div>
  </footer>
)

  return (
    <html>
      <head />
        <body>
            <div className="mx-auto max-w-3xl px-6">
              {header}
              {children}
              {footer}
            </div>
        </body>
    </html>
  )
}
