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
    <div className={`mt-5 text-gray-400 text-2xl font-mono ${className || ''}`}>
      {contacts.map((contact, index) => {
        return (
          <Contact key={index} {...contact} index={index} final={index === contacts.length - 1} />
        );
      })}
    </div>
  );
};

export default Contacts;
