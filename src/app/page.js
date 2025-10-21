/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <main className='w-full h-full'>
        <section id='hero' className='flex w-full'>
          <section id='left' className='flex w-1/2 justify-center shrink-0'>
            <div className='flex flex-col pt-10'>
              <img id='logo' src='/logo.svg' className='w-[228px]' />
              <h1 className='font-bold text-[4rem] mt-[10.75rem] leading-[120%]'>
                Build community. <br />
                Join Kommune
              </h1>
              <p className='font-medium text-lg text-[#5D5E5D] mt-5'>
                Be the first to know when Kommunne launches
              </p>
              <form action={null} className='mt-12 flex items-center gap-x-3'>
                <input
                  className='bg-[#F1F1F1] px-4 py-5 placeholder:text-[#6C726F] rounded-xl flex-1'
                  placeholder='Your email address'
                ></input>
                <button className='shrink-0 bg-[#ADEC76] rounded-xl py-5 px-6 font-semibold'>
                  Join the waitlist
                </button>
              </form>
              <section
                id='testimonials'
                className='mt-12 flex items-center gap-x-3'
              >
                <div id='avatars' className='flex items-center'>
                  {/* make three avatars that slide into each other that are 36px in height and width */}

                  <span className='w-8 h-8 rounded-full border-white border-4 overflow-clip'>
                    <img src='/e1.png' />
                  </span>
                  <span className='w-8 h-8 rounded-full border-white border-4 overflow-clip -ml-3'>
                    <img src='/e2.png' />
                  </span>
                  <span className='w-8 h-8 rounded-full border-white border-4 overflow-clip -ml-3'>
                    <img src='/e3.png' />
                  </span>
                </div>
                <span className='text-[#6C726F] font-medium'>
                  Join 500 people to get early access on Kommunne
                </span>
              </section>
            </div>
            {/* will likely put next two components in seperate client file */}
          </section>
          <section id='right'>
            <img src='/hero.png' className='w-full' />
          </section>
        </section>
        <section id='about us' className='flex w-full bg-[#F6F5EB]'>
          <section id='left'>
            <img src='/mission.png' />
          </section>
          <section
            id='righht'
            className='flex w-1/2 justify-center shrink-0 items-center'
          >
            <div className='flex flex-col pt-10 max-w-[449px]'>
              <span className='bg-[#E5E4D2] rounded-[14.2px] font-bold w-fit p-3'>
                Our Mission
              </span>
              <h2 className='font-bold leading-[120%] text-[3.25rem] mt-8'>
                We believe in community built by everyone
              </h2>
              <p className='text-lg font-medium mt-8'>
                Our mission is to foster a digital haven where every voice
                matters, participation is universal, and everyone reaps the
                rewards of shared knowledge and collaboration.
              </p>
            </div>
          </section>
        </section>
        <section id='faqs' className='flex flex-col items-center py-[4.6rem]'>
          <h2 className='font-bold text-[3.5rem] leading-[120%]'>FAQs</h2>
        </section>
      </main>
      <footer id='footer' className='bg-[#102100] py-16 px-24'>
        <img src='/footer.png' />
        <section className='mt-10 flex justify-between items-center text-white'>
          <div id='links' className='font-medium flex items-center gap-x-4'>
            <a>Linkedin</a>
            <a>Instagram</a>
            <a>X</a>
          </div>
          <span id='copyright' className='text-lg font-medium'>
            © 2025 Kommunne
          </span>
        </section>
      </footer>
    </div>
  );
}
