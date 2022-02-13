import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Contacts({ contacts, className }) {
  return (
    <p className={`mt-5 text-gray-400 text-2xl font-mono ${className || ''}`}>
      {contacts.map((contact, index) => {
        const LinkComponent = contact.internal ? Link : 'a';

        return (
          <span key={index}>
            <LinkComponent
              className='underline'
              {...(contact.internal
                ? {
                    to: contact.href
                  }
                : {
                    href: contact.href
                  })}
            >
              {contact.name}
            </LinkComponent>
            {index === contacts.length - 1 ? null : ' · '}
          </span>
        );
      })}
    </p>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      internal: PropTypes.bool
    })
  ).isRequired,
  className: PropTypes.string
};

export default Contacts;
