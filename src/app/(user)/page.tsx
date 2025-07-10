import React from 'react';
import HeroSection from '@/components/user/HeroSection';
import AvailableClasses from '@/components/user/AvailableClasses';
import ThreeDCard from '@/components/user/ThreeDCard';
import { Gallery } from '@/components/user/Gallery';
import Testimonials from '@/components/user/Testimonials';
import Contact from '@/components/user/Contact';
import Footer from '@/components/user/Footer';
import Header from '@/components/user/Header';

const page = () => {
  

  return (
    <main className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Header/>
      <HeroSection />
      {/* <section className="text-gray-600 body-font w-full">
        <div className="container py-24 mx-auto">
          <div className="lg:w-[1200px] mx-auto flex flex-wrap">
            <div className="w-[490px] relative">
              <div className="absolute left-0 top-0 w-[490px] h-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border"></div>
              <Image
                src="/images/users2-1.jpg"
                alt="users"
                width={500}
                height={400}
                className="w-full h-auto rounded-bl-[50px] rounded-tr-[50px]"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h2 className="pb-2">The Catcher in the Rye</h2>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric.
              </p>
              <div className="flex items-center gap-3 flex-wrap w-86 py-3">
                <div className="w-40 h-32 rounded-md text-[#9469db] bg-white hover:!text-white hover:bg-[#9469db] flex-center flex-col gap-2 shadow shadow-slate-300">
                  <h4 className="font-extrabold text-3xl">3+</h4>
                  <p className="text-[14px]">Our active teachers</p>
                </div>
                <div className="w-40 h-32 rounded-md text-[#9469db] bg-white hover:!text-white hover:bg-[#9469db] flex-center flex-col gap-2 shadow shadow-slate-300">
                  <h4 className="font-extrabold text-3xl">3+</h4>
                  <p className="text-[14px]">Our active teachers</p>
                </div>
                <div className="w-40 h-32 rounded-md text-[#9469db] bg-white hover:!text-white hover:bg-[#9469db] flex-center flex-col gap-2 shadow shadow-slate-300">
                  <h4 className="font-extrabold text-3xl">3+</h4>
                  <p className="text-[14px]">Our active teachers</p>
                </div>
                <div className="w-40 h-32 rounded-md text-[#9469db] bg-white hover:!text-white hover:bg-[#9469db] flex-center flex-col gap-2 shadow shadow-slate-300">
                  <h4 className="font-extrabold text-3xl">3+</h4>
                  <p className="text-[14px]">Our active teachers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <AvailableClasses />

      <section className=" px-10 py-10 md:px-5 w-full max-w-[1200px] mx-auto flex-center flex-col">
        <div className="text-center">
          <p>Good Luck</p>
          <h2>
            Business & Executive Coaching <br /> for Business Partnerships
          </h2>
        </div>
        <div className="flex-center gap-x-4 gap-y-3 flex-wrap py-10">
          <ThreeDCard />
          <ThreeDCard />
          <ThreeDCard />
          <ThreeDCard />
          <ThreeDCard />
          <ThreeDCard />
        </div>
      </section>

      <Testimonials />

      <section className=" px-10 py-20 md:px-5 w-full mx-auto flex-center flex-col">
        <div className="text-center">
          <p>Explore</p>
          <h2>Explore Our Gallery</h2>
        </div>
        <Gallery />
      </section>

      <Contact />
      <Footer />
    </main>
  );
};

export default page;
