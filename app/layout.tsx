import { Footer, Navbar } from '@/components'
import '../styles/globals.css'


export const metadata = {
  title: 'Rans',
  description: 'Rans Portofolio',
  // icons: {
  //   icon: { url: '/hamburger.svg', type: 'image/svg' },
  //   shortcut: { url: '/hamburger.svg', type: 'image/svg' },
  // },
  icons: { icon: { url: "/favicon.svg", type: "image/svg" }, shortcut: { url: "/favicon.svg", type: "image/svg" },}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="scrollbar-hide bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
     <div className='flex min-h-screen flex-col'>
     <Navbar/>
      <div className='relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]'>
        {children} 
      </div>
      <Footer/>
     </div>
        </body>
    </html>
  )
}
