import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import EventLogo from '../assets/eventlogo.jpg'
import Register from './register'
import Card from '../components/Card'



function about() {
  return (

    <div className="">
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 ">

        <div className="rt-img1 px-2 relative ">

          <div className="md:px-10 lg:pt-11 lg:pb-4 md:py-10 xl:py-36 py-10 mx-0">

            <div className="pb-10 pt-0 mt-4 lg:mt-0">
              <Image className="  absolute" src={icon1} alt="" />
            </div>

            <div className="md:py-10 px-10 lg:py-0 lg:px-0 py-10">
              <h1 className="text-center md:text-2xl leading-4  text-xl text-orange-500">
                Live stream
              </h1>
              <h1 className=" text-sky-200 text-[18px] md:px-20 md:text-md lg:px-0">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </h1>
            </div>
          </div>

        </div>

        <div className="rt-img2 px-2 relative">

          <div className=" md:px-10 lg:pt-11 lg:pb-4 md:py-10 xl:py-36 py-10 mx-0">

            <div className="pb-10 pt-0 mt-4 lg:mt-0">
              <Image className="absolute" src={icon2} alt="" />
            </div>
            <div className="md:py-10 px-10 lg:py-0 lg:px-0 py-10">
              <h1 className="text-center md:text-2xl leading-4  text-xl text-orange-500">
                Gaming
              </h1>
              <h1 className="text-sky-200 text-[18px] md:px-20 md:text-md lg:px-0">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </h1>
            </div>
          </div>
        </div>
        <div className="rt-img3 px-2 relative">

          <div className="md:px-10 lg:pt-11 lg:pb-4 md:py-10 xl:py-36 py-10 mx-0">

            <div className="pb-10 pt-0 mt-4 lg:mt-0">
              <Image className="absolute" src={icon3} alt="" />
            </div>
            
            <div className="md:py-10 px-10 lg:py-0 lg:px-0 py-10">
              <h1 className="text-center md:text-2xl leading-4  text-xl text-orange-500">
                Tournaments
              </h1>
              <h1 className="text-sky-200 text-[18px] md:px-20 md:text-md lg:px-0">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </h1>
            </div>
          </div>
        </div>
      </div> */}
  {/* <Card /> */}
      <div>
        <h1 className="revamp text-[36px] md:my-20 md:text-[46px] ">
          About Event
          <span className="flex justify-center text-2xl ">
            Know about Gamer days
          </span>
          <div className="eth-card mx-[24vw] h-2 w-[40vw] justify-center px-20" />
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-evenly xl:grid-cols-2 ">
        <div className="kdam py-5 px-2 text-center text-lg md:px-20 md:text-2xl">
          <p>
            Gamer days 2.0 is a successor of Gamer Days. This event is held
            every year. This is a week events in which every participant enjoy
            the games during this period of time. there are various games we
            played like BGMI(BattleGround mobile india), chess, ludo , etc.
          </p>
          <p>
            games can be played Individual and in team. For{' '}
            <Link
              href="/register"
              to={<Register />}
              className="text-indigo-400"
            >
              <span className="text-yellow-400">registration</span>
            </Link>{' '}
            click on the button above.
          </p>
        </div>
        <div className="animate-pulse px-10 py-3 transition-transform">
          <Image
            src={EventLogo}
            className=" rounded-3xl   hover:ease-in-out "
            alt=""
          />
        </div>
      </div>

      {/*  */}
    </div>
  )
}

export default about