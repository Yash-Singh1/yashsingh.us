import Container from '../Container';
import Header from '../Header';
import Post from './Post';
import Contacts from '../Contacts';
import Loader from '../Loader';
import ButtonLink from './ButtonLink';
import '../../styles/blog.css';
import usePosts from '../../hooks/usePosts';
import { useLocation, useNavigate } from 'react-router';
import filenames from '../../data/filenames.json';
import badgeColorMap from '../../helpers/badgeColorMap.json';
import Mail from '../SimpleIconLogos/Mail';
import GitHub from '../SimpleIconLogos/GitHub';

function Blog() {
  const { info } = usePosts(false);
  const navigate = useNavigate();

  const params = new URLSearchParams(useLocation().search);
  const page = params.get('page') || 1;
  const realInfo = info
    ? Object.fromEntries(
        Object.entries(info).filter(([, info]) =>
          (params.get('keywords') || '')
            .split(',')
            .some((keyword) => !params.get('keywords') || (info.keywords || []).includes(keyword))
        )
      )
    : undefined;

  return info ? (
    <Container>
      <Header title="Yash Singh's Blog" intro='Welcome to' />
      <br />
      <div className='overall-container'>
        <div
          className='posts-container'
          style={
            Object.values(realInfo).slice(page * 5 - 5, page * 5).length == 0
              ? { verticalAlign: '-100%' }
              : {}
          }
        >
          {Object.values(realInfo)
            .slice(page * 5 - 5, page * 5)
            .map((info) => (
              <Post
                key={info.index}
                {...info}
                filename={/([^/]*?)(\.[^/.]*?)?$/.exec(filenames[info.index])[1]}
              />
            ))}
          {Object.values(realInfo).slice(page * 5 - 5, page * 5).length == 0 ? (
            <p className='par text-gray-400 text-xl w-3/4'>No posts found</p>
          ) : null}
          {page > 1 ? (
            <ButtonLink
              to={`/blog/?page=${Number(page) - 1}${
                params.get('keywords') ? '&keywords=' + params.get('keywords') : ''
              }`}
            >
              Newer Posts
            </ButtonLink>
          ) : null}
          {page * 5 >= Object.keys(realInfo).length ? null : (
            <ButtonLink
              to={`/blog/?page=${Number(page) + 1}${
                params.get('keywords') ? '&keywords=' + params.get('keywords') : ''
              }`}
              className={page > 1 ? 'ml-5' : ''}
            >
              Older Posts
            </ButtonLink>
          )}
        </div>
        <div className='keywords-container text-white text-2xl par'>
          <span className='mb-2 block'>Keywords</span>
          {Object.keys(badgeColorMap).map((keyword, index) => (
            <span
              key={index}
              className={`inline-flex items-center justify-center px-3 py-1 mr-2 text-xs font-bold leading-none text-red-100 ${badgeColorMap[keyword]} rounded-full relative h-6 bottom-1 cursor-pointer`}
              onClick={() => {
                navigate(
                  `${params.get('page') ? '?page=1' : ''}${
                    params.get('page') ? '&' : '?'
                  }keywords=${(params.get('keywords') || '')
                    .split(',')
                    .filter(
                      (str, _, paramKeywords) =>
                        str && (str === keyword && paramKeywords.includes(keyword) ? false : true)
                    )
                    .reduce((keywords, matchingKeyword) => {
                      if (!keywords.includes(matchingKeyword)) {
                        keywords.push(matchingKeyword);
                      }
                      return keywords;
                    }, [])
                    .concat(
                      (params.get('keywords') || '').split(',').includes(keyword) ? [] : keyword
                    )
                    .join(',')}`
                );
              }}
            >
              {keyword} {(params.get('keywords') || '').split(',').includes(keyword) ? '×' : ''}
            </span>
          ))}
        </div>
      </div>
      {Object.values(realInfo).slice(page * 5 - 5, page * 5).length == 0 ? null : (
        <>
          <br />
          <br />
        </>
      )}
      <Contacts
        contacts={[
          { name: 'About', href: '/', internal: true },
          { name: 'Contacts', href: '/contacts', internal: true },
          {
            name: 'Email',
            href: 'mailto:saiansh2525@gmail.com',
            logo: <Mail className='logo-small' />
          },
          {
            name: 'GitHub',
            href: 'https://github.com/Yash-Singh1',
            logo: <GitHub className='logo-small' />
          },
          { name: 'RSS Feed', href: '/feed.xml' }
        ]}
      />
    </Container>
  ) : (
    <Loader />
  );
}

export default Blog;
