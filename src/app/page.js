import Image from 'next/image'
import { FaRegLightbulb } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <section className="grid grid-cols-2 items-center bg-[#f5df4d]">
        <h1 className="h-auto text-8xl font-bold underline px-24">We were born to be Limitless!</h1>
        <Image width={900} height={900} alt="" src="/banner.jpg" />
      </section>

      {/* SignUp Section */}
      <section className="grid grid-cols-2 items-center gap-[150px] bg-[#2d2d2d]">
        <div className="my-[150px] ml-auto pl-[150px]">
          <h2 className="text-3xl font-bold text-white">Make a full time living doing what you love!</h2>
          <p className="mt-5 text-white">Sign up to learn these simple steps.</p>
        </div>
        <div className="mr-auto">
          <input className="p-4" type="email" name="EMAIL" placeholder="Your email address" required />
          <input className="py-4 px-10 bg-[#f5df4d]" type="submit" value="Sign up"></input>
        </div>
      </section>

      {/* Rules Section */}
      <section className="mt-28 mb-64">
        <h2 className="text-4xl font-bold text-center">With your own rules!</h2>
        <p className="text-xl font-bold text-center mt-4 mb-20">How to play different game in your life</p>
        <div className="grid grid-cols-2 justify-center items-start">
          <div>
            <div className="grid grid-cols-2 px-12 gap-12">
              <div>
                <div className="pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/affection.png" />
                  <h3 className="text-2xl font-bold py-4">Happiness</h3>
                  <p className="text-[#706e6e]">We all want to feel happy, and each of us has different ways of getting there.</p>
                </div>
                <div className="pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/interaction.png" />
                  <h3 className="text-2xl font-bold py-4">Social Interaction</h3>
                  <p className="text-[#706e6e]">Studies show that we are happiest when we are around those who are also happy. Stick with those who are joyful and let rub off on you.</p>
                </div>
              </div>
              <div>
                <div className="pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/reading.png" />
                  <h3 className="text-2xl font-bold py-4">Personal Development</h3>
                  <p className="text-[#706e6e]">Personal development is a lifelong process. It is a way for people to assess their skills and qualities, consider their aims in life and set goals in order to maximize potential.</p>
                </div>
                <div className="pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/online-learning.png" />
                  <h3 className="text-2xl font-bold py-4">Inspiration</h3>
                  <p className="text-[#706e6e]">Knowing your worth is a very personal thing and it really has nothing to do with anyone else.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <p className="bg-[#f5df4d] p-10 text-6xl w-[150px] absolute top-14 left-24"><FaRegLightbulb></FaRegLightbulb></p>
            <Image width={500} height={800} alt="" className="ml-auto" src="/women-2.jpg" />
            <Image width={300} height={350} alt="" className="absolute bottom-[-50px] left-0" src="/man.jpg" />
          </div>
        </div>
      </section>

      {/* achievement Section */}
      <section className="relative">
        <div className="grid grid-cols-4 items-center gap-1 px-10 absolute top-[-100px]">
          <Image width={350} height={233} alt="" src="/people.jpg" />
          <div className="bg-[#f5df4d] py-14">
            <h1 className="text-7xl font-bold text-center">120+</h1>
            <p className="text-lg text text-center">Motivational trainings</p>
          </div>
          <div className="bg-[#f5df4d] py-14">
            <h1 className="text-7xl font-bold text-center">14</h1>
            <p className="text-lg text-center">Life coaches</p>
          </div>
          <div className="bg-[#f5df4d] py-14">
            <h1 className="text-7xl font-bold text-center">24</h1>
            <p className="text-lg text-center">Free books written</p>
          </div>
        </div>

        <div className="text-white bg-[#2d2d2d] pb-28 pt-56">
          <h2 className="text-4xl font-bold text-center mb-16 px-60">
            Happiness lies in the joy of achievement and the thrill of creative effort.
          </h2>
          <div className="grid grid-cols-2 gap-16 text-lg px-52">
            <p>
              Hold on to your values. What you find true, what you know is fair, and what you believe in are all values. The more you honor them, the better you will feel about yourself and those you love.
            </p>
            <p>
              Accept the good. Look at your life and take stock of what&#39;s working, and don&#39;t push away something just because it isn&#39;t perfect. When good things happen, even the very little ones, let them in.
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="grid grid-cols-2 gap-12 mt-32 mb-52">
        <div>
          <p className="text-[#706e6e]">WE ARE COACH,<br /> PERSONAL DEVELOPMENT & LIFE ADVISOR TEAM.</p>
          <h2>Visuality</h2>
          <p>Visuality is about finding simplicity and mindfulness in the daily chaos of our lives. It&#39;s about clearing the clutter so we can focus on what&#39;s important, create something amazing, find happiness. It has over a million readers.</p>
          <p>We&#39;ve gathered here a group of renowned psychologists, academics, psychiatrists and writers to contribute their thoughts and ideas. We&#39;re a live stream of what&#39;s happening in ‘Personal Development​&#39;.</p>
          <a>LEARN MORE ABOUT US </a>
        </div>
        <div>
          <Image width={750} height={500} alt="" src="/people-2.jpg" />
        </div>
      </section>
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
