'use client';

import { Accordion } from './Accordion';

export default function FaqSection() {
  const faqs = [
    {
      title: 'What is kommunne ?',
      text: 'Kommune is building an online community that allows everyone share ideas, knowledge and also render services to people within their immediate local community ',
    },
    {
      title: 'Who is Kommunne for ?',
      text: "People who care about making human connection again. People who want to know people they live around and don't just want to be a number on a census count",
    },
    {
      title: 'Why use Kommunne ?',
      text: "There is no fluff, no bots, just human beings that are you've probably seen before on walks around your neighborhood",
    },
  ];

  return (
    <div className='flex flex-col gap-y-4 max-lg:px-6 w-full items-center'>
      {faqs.map((faq) => (
        <Accordion message={faq.text} title={faq.title} key={faq.title} />
      ))}
    </div>
  );
}
