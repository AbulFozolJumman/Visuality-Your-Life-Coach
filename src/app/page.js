import Image from 'next/image'
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { FaLongArrowAltRight, FaRegLightbulb } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#f5df4d]">
        <h1 className="h-auto text-5xl md:text-8xl font-bold underline px-5 py-10 md:py-0 md:px-24">We were born to be Limitless!</h1>
        <Image width={900} height={900} alt="" src="/banner.jpg" />
      </section>

      {/* SignUp Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-[150px] bg-[#2d2d2d]">
        <div className="my-12 md:my-[150px] px-5 ml-0 md:ml-auto md:pl-[150px]">
          <h2 className="text-3xl font-bold text-white">Make a full time living doing what you love!</h2>
          <p className="mt-5 text-white">Sign up to learn these simple steps.</p>
        </div>
        <div className="px-5 md:mr-auto mb-12 md:mb-0">
          <input className="p-4 w-full md:w-auto mb-3" type="email" name="EMAIL" placeholder="Your email address" required />
          <input className="py-4 px-10 bg-[#f5df4d] font-semibold hover:bg-black hover:text-white" type="submit" value="Sign up"></input>
        </div>
      </section>

      {/* Rules Section */}
      <section className="mt-14 md:mt-28 mb-16 md:mb-64">
        <h2 className="text-4xl font-bold text-center px-5">With your own rules!</h2>
        <p className="text-2xl font-bold text-center px-5 mt-4 mb-10 md:mb-20">How to play different game in your life</p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-12 md:gap-12">
              <div>
                <div className="pb-8 md:pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/affection.png" />
                  <h3 className="text-2xl font-bold py-4">Happiness</h3>
                  <p className="text-[#706e6e]">We all want to feel happy, and each of us has different ways of getting there.</p>
                </div>
                <div className="pb-8 md:pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/interaction.png" />
                  <h3 className="text-2xl font-bold py-4">Social Interaction</h3>
                  <p className="text-[#706e6e]">Studies show that we are happiest when we are around those who are also happy. Stick with those who are joyful and let rub off on you.</p>
                </div>
              </div>
              <div>
                <div className="pb-8 md:pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/reading.png" />
                  <h3 className="text-2xl font-bold py-4">Personal Development</h3>
                  <p className="text-[#706e6e]">Personal development is a lifelong process. It is a way for people to assess their skills and qualities, consider their aims in life and set goals in order to maximize potential.</p>
                </div>
                <div className="pb-8 md:pb-12">
                  <Image width={256} height={256} alt="" className="w-[70px]" src="/online-learning.png" />
                  <h3 className="text-2xl font-bold py-4">Inspiration</h3>
                  <p className="text-[#706e6e]">Knowing your worth is a very personal thing and it really has nothing to do with anyone else.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <p className="bg-[#f5df4d] p-5 md:p-10 text-6xl w-24 md:w-[150px] absolute top-0 md:top-14 left-0 md:left-24"><FaRegLightbulb></FaRegLightbulb></p>
            <Image width={500} height={800} alt="" className="ml-auto" src="/women-2.jpg" />
            <Image width={300} height={350} alt="" className="hidden md:block absolute md:bottom-[-50px] left-0" src="/man.jpg" />
          </div>
        </div>
      </section>

      {/* achievement Section */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-5 md:gap-1 px-5 md:px-10 md:absolute md:top-[-100px]">
          <Image width={350} height={233} alt="" src="/people.jpg" />
          <div className="bg-[#f5df4d] py-14">
            <h1 className="text-7xl font-bold text-center">120+</h1>
            <p className="text-lg text text-center">Motivational trainings</p>
          </div>
          <div className="bg-[#f5df4d] py-14">
            <h1 className="text-7xl font-bold text-center">14</h1>
            <p className="text-lg text-center">Life coaches</p>
          </div>
          <div className="bg-[#f5df4d] py-14 mb-5 md:mb-0">
            <h1 className="text-7xl font-bold text-center">24</h1>
            <p className="text-lg text-center">Free books written</p>
          </div>
        </div>

        <div className="text-white bg-[#2d2d2d] pb-12 md:pb-28 pt-12 md:pt-56">
          <h2 className="text-4xl font-bold text-center mb-8 md:mb-16 px-5 md:px-60">
            Happiness lies in the joy of achievement and the thrill of creative effort.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-lg px-5 md:px-52">
            <p>
              Hold on to your values. What you find true, what you know is fair, and what you believe in are all values. The more you honor them, the better you will feel about yourself and those you love.
            </p>
            <p>
              Accept the good. Look at your life and take stock of what&#39;s working, and don&#39;t push away something just because it isn&#39;t perfect. When good things happen, even the very little ones, let them in.
            </p>
          </div>
        </div>
      </section>

      {/* Visuality section */}
      <section className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-12 py-14 md:py-32">
        <div className='px-5 md:px-10'>
          <p className="text-[#706e6e] font-medium max-w-xs">WE ARE COACH, PERSONAL DEVELOPMENT & LIFE ADVISOR TEAM.</p>
          <h2 className='text-6xl font-bold py-5'>Visuality</h2>
          <p className='pb-5'>Visuality is about finding simplicity and mindfulness in the daily chaos of our lives. It&#39;s about clearing the clutter so we can focus on what&#39;s important, create something amazing, find happiness. It has over a million readers.</p>
          <p className='pb-5 md:pb-9'>We&#39;ve gathered here a group of renowned psychologists, academics, psychiatrists and writers to contribute their thoughts and ideas. We&#39;re a live stream of what&#39;s happening in ‘Personal Development​&#39;.</p>
          <a className='bg-[#f5df4d] font-bold py-4 px-8 cursor-pointer text-base hover:bg-black hover:text-white flex items-center gap-2 w-[280px]'>LEARN MORE ABOUT US <FaLongArrowAltRight /> </a>
        </div>
        <div className='relative'>
          <Image width={750} height={500} alt="" src="/people-2.jpg" />
          <div className='bg-[#f5df4d] p-10 max-w-xs absolute bottom-[-130px] md:bottom-0'>
            <span className='text-6xl text-white absolute top-[-30px]'><BiSolidQuoteAltRight /></span>
            <p className='font-bold text-xl'><i>Incredible Insight from Experts on Breaking Free from Limits and Achieving Life Goals</i></p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className='md:mt-8 mt-32 mb-14 md:mb-32 px-0 md:px-12'>
        <h2 className="text-4xl font-bold text-center">From The Blog</h2>
        <p className="text-2xl font-bold text-center mt-3 md:mt-4 mb-8 md:mb-20 px-5">Latest news are on top all times from blogs!</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12'>
          <div>
            <div className='bg-[#f5df4d] py-5 md:py-12 px-5 md:px-10 hover:bg-black hover:text-white'>
              <p className='font-bold text-2xl mb-4 md:mb-7'>Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.</p>
              <h4>Oscar Wilde</h4>
            </div>
            <div className='mt-5 md:mt-12 md:relative'>
              <Image className='mb-2 md:mb-52' src="/home.jpg" alt='' height={598} width={478} />
              <div className='mr-14 bg-white md:absolute bottom-[-170px] px-5 md:px-0'>
                <p className='md:pt-5'><span className='text-xs text-gray-400'>February 10, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>8 Habits that Turn Dreams into Reality</p>
                <p className='text-gray-400 py-3'>And as the day advanced and the engine drivers and stokers refused to return to London ...</p>
                <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mt-0 md:relative'>
                <Image src="/listening.jpg" className='mb-0 md:mb-48' alt='' width={478} height={319} />
                <div className='mr-14 bg-white md:absolute bottom-[-240px] md:bottom-[-150px] px-5 md:px-0'>
                  <p className='pt-2 md:pt-5'><span className='text-xs text-gray-400'>February 15, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>5 Things You Need to Stop Doing to Live a Simpler Life</p>
                  <p className='text-gray-400 py-3'>At that I gripped my wife&#39;s arm, and without ceremony ran her out into the road...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>

            <div>
              <div className='mt-5 md:mt-12 md:relative'>
                <Image className='mb-2 md:mb-52' src="/reading-2.jpg" alt='' width={478} height={366} />
                <div className='mr-14 bg-white md:absolute bottom-[-230px] md:bottom-[-140px] px-5 md:px-0'>
                  <p className='md:pt-5'><span className='text-xs text-gray-400'>December 4, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>25 Money Mistakes to Avoid</p>
                  <p className='text-gray-400 py-3'>The British prime minister continually survives the chaos of his choices—much to pundits&#39; chagrin. How?...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='mt-0 md:relative'>
                <Image className='mb-2 md:mb-56' src="/street.jpg" alt='' width={478} height={717} />
                <div className='mr-14 bg-white md:absolute bottom-[-170px] md:bottom-[-180px] px-5 md:px-0'>
                  <p className='md:pt-5'><span className='text-xs text-gray-400'>February 11, 2021 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>Why The Tourism Industry Shouldn&#39;t Go Back To Normal</p>
                  <p className='text-gray-400 py-3'>It did so indeed, and much sooner than she had expected ...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>

            <div>
              <div className='mt-5 md:mt-12 md:relative'>
                <Image className='mb-2 md:mb-56' src="/car.jpg" alt='' width={478} height={319} />
                <div className='mr-14 bg-white md:absolute bottom-[-280px] md:bottom-[-195px] px-5 md:px-0'>
                  <p className='md:pt-5'><span className='text-xs text-gray-400'>December 2, 2020 • By</span> <span className='font-semibold cursor-pointer'>JOHN BERG</span></p>
                  <p className='font-bold text-2xl pt-2 hover:text-red-600 hover:underline cursor-pointer'>How Ordinary People Can Help Their Country</p>
                  <p className='text-gray-400 py-3'>By the light of the now brilliant moons I saw that he was but a shadow of his former self, and as he turned from my caress and commenced...</p>
                  <a className='flex items-center gap-2 text-xs hover:underline cursor-pointer'>READ MORE  <FaLongArrowAltRight /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className='bg-[#f5df4d] cursor-pointer font-semibold py-4 px-8 text-base hover:bg-black hover:text-white flex items-center mx-auto gap-2 w-[270px] md:w-[280px] mt-8 md:mt-0'>MORE FROM THE BLOG <FaLongArrowAltRight /> </a>
      </section>

      {/* Events Section */}
      <section className='md:mt-32 mb-14 md:mb-40 md:px-12'>
        <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
        <p className="text-2xl font-bold text-center px-5 mt-4 mb-8 md:mb-20">Learn the “things I wish they had taught me in school”</p>

        <div className='flex flex-col md:flex-row items-start gap-8 md:gap-[60px]'>

          <div className='md:w-[60%]'>

            <div className='flex flex-col md:flex-row gap-5 md:gap-8 items-start justify-between p-5 md:p-8 border'>
              <Image className='rounded-full w-28' src="/people-3.jpg" width={250} height={250} alt='' />
              <div>
                <p className='text-gray-600 text-sm'><span className='text-black bg-[#f5df4d] hover:text-white hover:bg-black mr-4 p-1'>Mar 07 - Mar 12</span>12:00 am</p>
                <p className='hover:text-red-500 cursor-pointer font-bold mt-3 mb-2 text-lg'>How to Build Confidence in Your Abilities</p>
                <p className='text-gray-600'>Overcome your limiting beliefs and achieve your goals.</p>
              </div>
              <a className='px-8 py-4 bg-[#f5df4d] cursor-pointer font-bold hover:text-white hover:bg-black'>DETAILS</a>
            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-8 items-start justify-between p-5 md:p-8 border'>
              <Image className='rounded-full w-28' src="/reading-4.jpg" width={250} height={250} alt='' />
              <div>
                <p className='text-gray-600 text-sm'><span className='text-black bg-[#f5df4d] hover:text-white hover:bg-black mr-4 p-1'>Mar 14 - Mar 17</span>10:00 am</p>
                <p className='hover:text-red-500 cursor-pointer font-bold mt-3 mb-2 text-lg'>A Stress Management for Leaders</p>
                <p className='text-gray-600'>3 step framework for stress management, anxiety relief, and improved emotional intelligence using applied meditation.</p>
              </div>
              <a className='px-8 py-4 bg-[#f5df4d] cursor-pointer font-bold hover:text-white hover:bg-black'>DETAILS</a>
            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-8 items-start justify-between p-5 md:p-8 border'>
              <Image className='rounded-full w-28' src="/reading-3.jpg" width={250} height={250} alt='' />
              <div>
                <p className='text-gray-600 text-sm'><span className='text-black bg-[#f5df4d] hover:text-white hover:bg-black mr-4 p-1'>Mar 15 - Mar 18</span>12:00 am</p>
                <p className='hover:text-red-500 cursor-pointer font-bold mt-3 mb-2 text-lg'>Critical Thinking - An Upgrade For Your Mind</p>
                <p className='text-gray-600'>This course aims to make you a more rigorous, effective, and creative thinker.</p>
              </div>
              <a className='px-8 py-4 bg-[#f5df4d] cursor-pointer font-bold hover:text-white hover:bg-black'>DETAILS</a>
            </div>

            <a className='bg-[#f5df4d] font-bold py-4 px-8 text-base hover:bg-black hover:text-white flex items-center gap-2 w-[230px] mt-6 md:mt-12 ml-5 md:ml-0 cursor-pointer'>BROWSE EVENTS <FaLongArrowAltRight /> </a>

          </div>

          <div className='md:w-[40%] relative'>
            <p className="bg-[#f5df4d] p-5 md:p-9 text-6xl w-[100px] md:w-[140px] absolute top-0 md:top-14 left-0 md:left-20"><FaRegLightbulb></FaRegLightbulb></p>
            <Image className='md:pl-[150px]' src="/writing.jpg" alt='' width={500} height={800} />
            <Image width={300} height={350} alt="" className="absolute bottom-[-250px] left-0 hidden md:block" src="/car-2.jpg" />
          </div>

        </div>

      </section>

      {/* Pricing section */}
      <section className=" max-w-[1536px] xl:px-24 lg:px-12 md:px-8 px-5 mx-auto ">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>
        <p className="text-2xl font-bold text-center px-5 mt-4 mb-8 md:mb-12">Choose Your Best Plan</p>
        <div className="mb-12 flex items-start justify-center gap-10">

          <div className="p-8 max-w-[360px] border-2 border-[#23A6F0] rounded-[30px] hover:scale-110 duration-300">

            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[10px] font-bold">PLAN</p>
                <h4 className="text-[22px] font-bold text-[#23A6F0]">Business</h4>
              </div>
              <a className="text-[10px] font-extrabold text-[#23A6F0] py-2 px-4 border border-[#23A6F0] rounded-2xl"
                href="#">BEST SELLER</a>
            </div>

            <div className="flex justify-start items-end mb-3 gap-4">
              <div className="flex justify-start items-start">
                <p className="text-[22px] font-medium text-[#23A6F0]">$</p>
                <h2 className="text-[55px] leading-[55px] font-bold text-[#23A6F0]">19</h2>
              </div>
              <p className="text-[14px] font-medium text-[#23A6F0]">Editor/month</p>
            </div>

            <p className="text-[14px] mb-5">For professional business, billed annually or $15 month-to-month.</p>
            <hr className="border-2 border-[#23A6F0] mb-[61px]" />

            <p className="text-[14px font-medium] flex items-center gap-2 mb-3">
              <Image src="/Check-green.png" alt="" width={20} height={20} />
                Invite-only private projects</p>
            <p className="text-[14px font-medium] flex items-center gap-2 mb-3">
              <Image src="/Check-green.png" alt="" width={20} height={20} />
                Custom file/user permissions</p>
            <p className="text-[14px font-medium] flex items-center gap-2 mb-3">
              <Image src="/Check-green.png" alt="" width={20} height={20} />
                30-day version history</p>
            <p className="text-[14px font-medium] flex items-center gap-2 mb-10">
              <Image src="/Check-green.png" alt="" width={20} height={20} />
                Shareable team libraries</p>

            <a className="text-white font-medium w-[180px] mx-auto bg-gradient-to-r from-[#17A9F7] to-[#0969FA] py-2 rounded-[5px] flex justify-center items-center gap-2 text-[15px] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#FFFFFF] hover:border hover:border-[#128CED] hover:text-[#128CED] hover:py-[7px]"
              href="#">Choose Business</a>
          </div>

        </div>
      </section>
    </main>
  )
}
