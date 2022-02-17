import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Contacts({ contacts, className }) {
  return (
    <p className={`mt-5 text-gray-400 text-2xl font-mono ${className || ''}`}>
      {contacts.map(({internal = false, href, name, logo: Logo = false}, index) => {
        const LinkComponent = internal ? Link : 'a';

        return (
          <p key={index} style={{ display: 'inline-block', marginLeft: index === 0 ? '0' : '1.5rem' }}>
            {Logo === false ? null : (
              <a target='_blank' href={href}>
                {Logo}
              </a>
            )}
            <LinkComponent
              className='underline'
              {...(internal
                ? {
                    to: href
                  }
                : {
                    href: href
                  })}
            >
              {name}
            </LinkComponent>
            {index === contacts.length - 1 ? null : ' · '}
          </p>
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
      internal: PropTypes.bool,
      logo: PropTypes.node
    })
  ).isRequired,
  className: PropTypes.string
};

export default Contacts;
