'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const Accordion = ({ title, message }) => {
  const accordionVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { opacity: { delay: 0.3 } },
    },
    collapsed: { opacity: 0, height: 0 },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      animate={{
        height: !isOpen ? 'auto' : '100%',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className=' bg-white text-[#1D1D1D] w-full border-b border-[#E6E6E6] flex flex-col relative lg:w-[590px]'
    >
      <div
        className='hover:cursor-pointer flex gap-x-3 justify-between items-center p-6'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className='font-bold text-xl'>{title}</h1>
        <motion.svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <path
            d='M5 7.5L10 12.5L15 7.5'
            stroke='#1E1E1E'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </motion.svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={accordionVariants}
            // transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='flex flex-col px-6'
          >
            <p className='pb-2 font-medium'>{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
