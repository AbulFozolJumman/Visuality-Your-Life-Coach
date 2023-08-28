import './globals.css'
import { Inter } from 'next/font/google'
import { BiMessageRoundedDots } from "react-icons/bi";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Visuality',
  description: 'Your Life Coach',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Navbar */}
        <nav>
          <div className="navbar py-3">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="items-center gap-2 lg:hidden flex bg-[#f5df4d] p-2 hover:bg-black hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  <p className='font-bold'>Menu</p>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow rounded-box bg-[#04043d] text-white">
                  <li><a className='hover:text-gray-500 font-bold p-3'>Blog</a></li>
                  <li tabIndex={0}>
                    <details>
                      <summary className='hover:text-gray-500 font-bold p-3'>Features</summary>
                      <ul className="p-2">
                        <li><a className='hover:text-gray-500 font-bold p-3'>Gallery</a></li>
                        <li><a className='hover:text-gray-500 font-bold p-3'>Video</a></li>
                        <li><a className='hover:text-gray-500 font-bold p-3'>Audio</a></li>
                      </ul>
                    </details>
                  </li>
                  <li><a className='hover:text-gray-500 font-bold p-3'>Posts</a></li>
                  <li><a className='hover:text-gray-500 font-bold p-3'>Events</a></li>
                  <li><a className='hover:text-gray-500 font-bold p-3'>Purchase</a></li>
                  <li>
                    <a href='mailto:abulfozoljumman@gmail.com' className="flex items-center gap-3 cursor-pointer bg-[#f5df4e] hover:bg-gray-400 p-3 rounded-[40px] text-black">
                      <BiMessageRoundedDots className='text-5xl hidden md:block'></BiMessageRoundedDots>
                      <div>
                        <p className='font-bold text-lg'>abulfozoljumman@gmail.com</p>
                        <p>Talk To Us</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-2xl md:ml-12 ml-20">Visuality</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className='font-bold'><a>Blog</a></li>
                <li className='font-bold' tabIndex={0}>
                  <details>
                    <summary>Features</summary>
                    <ul className="p-2">
                      <li className='font-bold'><a>Gallery</a></li>
                      <li className='font-bold'><a>Video</a></li>
                      <li className='font-bold'><a>Audio</a></li>
                    </ul>
                  </details>
                </li>
                <li className='font-bold'><a>Posts</a></li>
                <li className='font-bold'><a>Events</a></li>
                <li className='font-bold'><a>Purchase</a></li>
              </ul>
            </div>
            <div className="navbar-end md:pr-12">
              <a href='mailto:abulfozoljumman@gmail.com' className="md:flex items-center gap-1 cursor-pointer bg-[#f5df4e] hover:bg-gray-400 p-3 hidden rounded-[40px]">
                <BiMessageRoundedDots className='text-5xl '></BiMessageRoundedDots>
                <div>
                  <p className='font-bold text-lg'>abulfozoljumman@gmail.com</p>
                  <p>Talk To Us</p>
                </div>
              </a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
