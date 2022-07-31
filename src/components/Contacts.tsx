import type { ReactNode } from 'react';
import Contact from './Contact';

interface ContactProps {
  contacts: {
    name: string;
    href: string;
    internal?: boolean;
    logo?: ReactNode;
  }[];
  className?: string;
}

const Contacts = function Contacts({ contacts, className }: ContactProps) {
  return (
    <div
      className={`mt-5 text-gray-400 text-2xl font-mono overflow-hidden w-full flex flex-row flex-wrap gap-x-8 ${
        className || ''
      }`}
    >
      {contacts.map((contact, index) => {
        return <Contact key={index} {...contact} />;
      })}
    </div>
  );
};

export default Contacts;
