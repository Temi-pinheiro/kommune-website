'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import axios from 'axios';

const MY_COUNT = 100;

export default function WaitlistForm() {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        '/api/waitlist',
        {
          email,
        },
        {
          'Content-Type': 'application/json',
        }
      );
      toast.success("You're on the list!");
      getCount();
      setEmail('');
    } catch (e) {
      const { error } = e.response.data;
      toast(error, {
        className: '!bg-red-100',
      });
    }

    setLoading(false);
  };

  const getCount = async () => {
    try {
      const { data } = await axios.get(
        '/api/waitlist',

        {
          'Content-Type': 'application/json',
        }
      );

      setCount(data.count ?? MY_COUNT);
    } catch (error) {
      console.log(error);
      setCount(MY_COUNT);
    }
  };

  useEffect(() => {
    getCount();

    return () => {
      setCount(MY_COUNT);
    };
  }, []);

  return (
    <>
      <form
        onSubmit={submit}
        className='lg:mt-12 mt-8 flex flex-col gap-y-3 lg:flex-row items-center gap-x-3 max-lg:w-full'
      >
        <input
          value={email}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#F1F1F1] px-4 py-5 placeholder:text-[#6C726F] outline-0 rounded-xl flex-1 max-lg:w-full'
          placeholder='Your email address'
        ></input>
        <motion.button
          disabled={email?.length < 1}
          className='cursor-pointer lg:shrink-0 bg-[#ADEC76] caret-[#ADEC76] disabled:pointer-events-none disabled:text-white disabled:bg-slate-300 rounded-xl py-5 px-6 font-semibold hover:bg-[#b8fa7d] duration-300 transition-colors'
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </motion.button>
      </form>
      <section id='testimonials' className='mt-12 flex items-center gap-x-3'>
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
          Join {count} people to get early access on Kommunne
        </span>
      </section>
    </>
  );
}
