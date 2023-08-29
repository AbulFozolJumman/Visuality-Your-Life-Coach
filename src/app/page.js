import Image from 'next/image'
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { FaLongArrowAltRight, FaRegLightbulb } from "react-icons/fa";

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
      <section className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 gap-12 py-32">
        <div className='px-10'>
          <p className="text-[#706e6e] font-medium max-w-xs">WE ARE COACH, PERSONAL DEVELOPMENT & LIFE ADVISOR TEAM.</p>
          <h2 className='text-6xl font-bold py-5'>Visuality</h2>
          <p className='pb-5'>Visuality is about finding simplicity and mindfulness in the daily chaos of our lives. It&#39;s about clearing the clutter so we can focus on what&#39;s important, create something amazing, find happiness. It has over a million readers.</p>
          <p className='pb-9'>We&#39;ve gathered here a group of renowned psychologists, academics, psychiatrists and writers to contribute their thoughts and ideas. We&#39;re a live stream of what&#39;s happening in ‘Personal Development​&#39;.</p>
          <a className='bg-[#f5df4d] font-semibold py-4 px-8 text-base hover:bg-black hover:text-white flex items-center gap-2 w-[280px]'>LEARN MORE ABOUT US <FaLongArrowAltRight /> </a>
        </div>
        <div className='relative'>
          <Image width={750} height={500} alt="" src="/people-2.jpg" />
          <div className='bg-[#f5df4d] p-10 max-w-xs absolute bottom-0'>
            <span className='text-6xl text-white absolute top-[-30px]'><BiSolidQuoteAltRight /></span>
            <p className='font-bold text-xl'><i>Incredible Insight from Experts on Breaking Free from Limits and Achieving Life Goals</i></p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className='my-32 px-12'>
        <h2 className="text-4xl font-bold text-center">From The Blog</h2>
        <p className="text-xl font-bold text-center mt-4 mb-20">Latest news are on top all times from blogs!</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
          <div>
            <div className='bg-[#f5df4d] py-12 px-10 hover:bg-black hover:text-white'>
              <p className='font-bold text-2xl mb-7'>Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.</p>
              <h4>Oscar Wilde</h4>
            </div>
            <div className='mt-12 relative'>
              <Image className='mb-52' src="/home.jpg" alt='' height={598} width={478} />
              <div className='mr-14 bg-white absolute bottom-[-170px] '>
                <p className='pt-5'><span className='text-xs text-gray-400'>February 10, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>8 Habits that Turn Dreams into Reality</p>
                <p className='text-gray-400 py-3'>And as the day advanced and the engine drivers and stokers refused to return to London ...</p>
                <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mb-12 relative'>
                <Image src="/listening.jpg" className='mb-48' alt='' width={478} height={319} />
                <div className='mr-14 bg-white absolute bottom-[-150px]'>
                  <p className='pt-5'><span className='text-xs text-gray-400'>February 15, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>5 Things You Need to Stop Doing to Live a Simpler Life</p>
                  <p className='text-gray-400 py-3'>At that I gripped my wife&#39;s arm, and without ceremony ran her out into the road...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>

            <div>
              <div className='relative'>
                <Image className='mb-52' src="/reading-2.jpg" alt='' width={478} height={366} />
                <div className='mr-14 bg-white absolute bottom-[-140px]'>
                  <p className='pt-5'><span className='text-xs text-gray-400'>December 4, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>25 Money Mistakes to Avoid</p>
                  <p className='text-gray-400 py-3'>The British prime minister continually survives the chaos of his choices—much to pundits&#39; chagrin. How?...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='relative'>
                <Image className='mb-56' src="/street.jpg" alt='' width={478} height={717} />
                <div className='mr-14 bg-white absolute bottom-[-180px]'>
                  <p className='pt-5'><span className='text-xs text-gray-400'>February 11, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>Why The Tourism Industry Shouldn&#39;t Go Back To Normal</p>
                  <p className='text-gray-400 py-3'>It did so indeed, and much sooner than she had expected ...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>

            <div>
              <div className='relative'>
                <Image className='mb-56' src="/car.jpg" alt='' width={478} height={319} />
                <div className='mr-14 bg-white absolute bottom-[-195px]'>
                  <p className='pt-5'><span className='text-xs text-gray-400'>December 2, 2020 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>How Ordinary People Can Help Their Country</p>
                  <p className='text-gray-400 py-3'>By the light of the now brilliant moons I saw that he was but a shadow of his former self, and as he turned from my caress and commenced...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className='bg-[#f5df4d] cursor-pointer font-semibold py-4 px-8 text-base hover:bg-black hover:text-white flex items-center mx-auto gap-2 w-[280px]'>MORE FROM THE BLOG <FaLongArrowAltRight /> </a>
      </section>

      {/* Events Section */}
      <section className='my-32 px-12'>
        <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
        {/* <p className="text-xl font-bold text-center mt-4 mb-20">Learn the “things I wish they had taught me in school”</p> */}

        <div>

          <div></div>

          <div></div>

        </div>

      </section>
    </main>
  )
}
