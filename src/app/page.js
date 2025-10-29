/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import WaitlistForm from '@/components/WaitlistForm';
import FaqSection from '@/components/FaqSection';
const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kommunne',
  description: 'Build community. Join Kommunne',
  openGraph: {
    title: 'Kommunne',
    description: 'Build community. Join Kommunne',
    url: 'https://kommunne.com',
    siteName: 'Kommunne',
    authors: ['Devinhio'],
    images: [
      {
        url: 'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1761604415/Kommune/icon_av7uv7.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1761604415/Kommune/icon_av7uv7.png',
    shortcut:
      'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1761604415/Kommune/icon_av7uv7.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kommunne - Community Made The Right Way',
    description: 'Build community. Join Kommunne',
    images: [
      'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1761604410/Kommune/logo_r1dflj.png',
    ],
    creator: '@ndmhjt',
  },
  bookmarks: ['https://kommunne.com'],
};
export default function Home() {
  return (
    <div className={`${nunito.className} w-full h-full`}>
      <main className='w-full h-full'>
        <section
          id='hero'
          className='flex lg:flex-row flex-col-reverse w-full max-lg:relative'
        >
          <section
            id='left'
            className='flex lg:w-1/2 justify-center lg:shrink-0'
          >
            <div className='flex flex-col pt-10 max-lg:py-10 max-lg:px-6'>
              <img
                id='logo'
                src='/logo.svg'
                className='w-[228px] max-lg:absolute max-lg:left-6 max-lg:top-6 max-lg:w-[140px]'
              />
              <h1 className='font-bold text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] lg:mt-[9.8rem] xl:mt-[10.75rem] lg:leading-[100%] xl:leading-[120%]'>
                Build community. <br />
                Join Kommunne
              </h1>
              <p className='font-medium lg:text-lg text-[#5D5E5D] lg:mt-5'>
                Be the first to know when Kommunne launches
              </p>
              <WaitlistForm />
            </div>
            {/* will likely put next two components in seperate client file */}
          </section>
          <section id='right'>
            <img src='/hero.png' className='w-full' />
          </section>
        </section>
        <section
          id='about us'
          className='flex flex-col-reverse lg:flex-row w-full bg-[#F6F5EB]'
        >
          <section id='left'>
            <img src='/mission.png' />
          </section>
          <section
            id='righht'
            className='flex lg:w-1/2 justify-center shrink-0 items-center'
          >
            <div className='flex flex-col py-12 max-lg:px-6 lg:pt-10 max-w-[449px]'>
              <span className='bg-[#E5E4D2] rounded-[14.2px] font-bold w-fit p-3'>
                Our Mission
              </span>
              <h2 className='font-bold leading-[120%] text-[2.5rem] lg:text-[3.25rem] mt-8'>
                We believe in community built by everyone
              </h2>
              <p className='lg:text-lg font-medium mt-8'>
                Our mission is to foster a digital haven where every voice
                matters, participation is universal, and everyone reaps the
                rewards of shared knowledge and collaboration.
              </p>
            </div>
          </section>
        </section>
        <section id='faqs' className='flex flex-col items-center py-[4.6rem]'>
          <h2 className='font-bold text-[3.5rem] leading-[120%]'>FAQs</h2>
          <FaqSection />
        </section>
      </main>
      <footer
        id='footer'
        className='bg-[#102100] p-3 lg:py-16 lg:px-24 max-lg:pt-[200px]'
      >
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
