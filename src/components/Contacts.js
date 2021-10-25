import React from 'react';
import PropTypes from 'prop-types';

function Contacts({ contacts, className }) {
  return (
    <p className={`mt-5 text-gray-400 text-2xl font-mono ${className || ''}`}>
      {contacts.map((contact, index) => (
        <React.Fragment key={index}>
          {index === 0 ? null : '· '}
          <a className='underline' href={contact.href}>
            {contact.name}
          </a>{' '}
        </React.Fragment>
      ))}
    </p>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

export default Contacts;
