'use client';

import coolBgStyles from '../../../styles/cool-bg.module.scss';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PostList from '../../../types/PostList';
import { type FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Popover, Switch, Transition } from '@headlessui/react';
import localizedKeywords from '../../../data/localizedKeywords';
import { ChevronDown, Search } from 'lucide-react';

const BlogContent: FC<{ data: PostList }> = function BlogContent(props) {
  const router = useRouter();
  const pathname = usePathname();

  const [posts, setPosts] = useState<PostList>(props.data);
  const [search, setSearch] = useState<string>('');
  const [keywords, setKeywords] = useState<string[]>(Object.keys(localizedKeywords));

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('search')) {
      setSearch(params.get('search')!);
    }
    if (params.get('keywords') !== null) {
      setKeywords(params.get('keywords') ? params.get('keywords')!.split(',') : []);
    }
  }, []);

  useEffect(() => {
    let endQuery: { [key: string]: string } = {};
    if (search) {
      endQuery.search = search;
    }
    if (keywords && keywords.length !== Object.keys(localizedKeywords).length) {
      endQuery.keywords = keywords.join(',');
    }
    router.push(
      `${pathname}${Object.keys(endQuery).length > 0 ? '?' : ''}${Object.entries(endQuery)
        .map((queryPart) => queryPart.join('='))
        .join('&')}`,
    );
    setPosts(
      props.data.filter((post) => {
        return (
          (post.title.toLowerCase().includes(search.toLowerCase().trim()) ||
            post.subtitle.toLowerCase().includes(search.toLowerCase().trim())) &&
          ((post.keywords && post.keywords?.find((keyword) => keywords.includes(keyword))) ||
            (!post.keywords && keywords.length === Object.keys(localizedKeywords).length))
        );
      }),
    );
  }, [props.data, search, keywords]);

  return (
    <main className='box-content p-0'>
      <Container
        className={`${coolBgStyles['cool-bg']} lg:pl-[12.5%] lg:pr-[12.5%] min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]`}
      >
        <Header
          title="Yash Singh's Blog"
          intro='Welcome to'
          className={`flex flex-col flex-wrap flex-grow-0 flex-shrink-0 justify-center items-start mb-6 md:mb-10`}
        />
        <div className='flex flex-wrap sm:flex-nowrap gap-y-2 flex-row mb-2 text-lg'>
          <div className='grid grid-cols-[max-content_1fr] w-full sm:w-max bg-slate-600/75 py-1 px-2 rounded-md'>
            <Search className='mr-2 w-4 md:w-5 pointer-events-none self-center text-gray-300' />
            <input
              type='text'
              value={search}
              placeholder='Search posts'
              className='bg-transparent self-center leading-6 text-gray-400 outline-none w-full'
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <Popover
            as='div'
            className='relative inline-block text-left w-full sm:w-max sm:ml-3 z-20 rounded-md'
          >
            {({ open }) => (
              <>
                <div>
                  <Popover.Button className='inline-flex w-full sm:justify-center items-center rounded-md bg-slate-400/40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                    Keywords
                    <ChevronDown
                      className={`sm:ml-2 -mr-1 h-5 w-5 text-amber-200 hover:text-amber-100 transition-transform ${open ? '-rotate-180' : ''}`}
                      aria-hidden='true'
                    />
                  </Popover.Button>
                </div>
                <Transition
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Popover.Panel className='absolute left-0 sm:right-0 mt-1 z-20 w-44 sm:w-56 origin-top-right divide-y divide-gray-100 divide-dotted rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {(Object.keys(localizedKeywords) as (keyof typeof localizedKeywords)[]).map(
                      (keyword) => {
                        const enabled = keywords.includes(keyword);

                        function toggle() {
                          if (enabled) {
                            setKeywords(keywords.filter((k) => k !== keyword));
                          } else {
                            setKeywords([...keywords, keyword]);
                          }
                        }

                        return (
                          <button
                            onClick={toggle}
                            onKeyPress={(event) => {
                              if (event.code === 'Space') {
                                toggle();
                              }
                            }}
                            className='block w-full text-left cursor-pointer p-2 z-20 relative bg-slate-600 text-white first:rounded-t-md last:rounded-b-md text-base'
                            key={keyword}
                          >
                            <Switch
                              checked={enabled}
                              onChange={() => {}}
                              className={`${
                                enabled ? 'bg-teal-900' : 'bg-slate-500'
                              } relative inline-flex h-[1.5rem] mr-2 align-bottom w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                              <span
                                aria-hidden='true'
                                className={`${
                                  enabled ? 'translate-x-3' : 'translate-x-0'
                                } pointer-events-none inline-block h-[calc(1.5rem-4px)] w-[calc(1.5rem-4px)] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                              />
                            </Switch>
                            {localizedKeywords[keyword]}
                          </button>
                        );
                      },
                    )}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <div
          className={`w-full flex flex-wrap flex-grow-0 flex-shrink-0 ${
            posts && posts.length > 0 ? 'justify-center items-center' : ''
          }`}
        >
          {posts && posts.length > 0 ? (
            posts.map((edge) => {
              return (
                <Link
                  href={edge.link || `/blog/post/${edge.filename}`}
                  key={edge.filename}
                  passHref
                  legacyBehavior
                >
                  <motion.a
                    whileHover={{ scale: 1.03, type: 'tween' }}
                    whileTap={{ scale: 1, type: 'tween' }}
                    className='p-4 border-[3px] border-gray-300/60 active:border-gray-300/60 hover:border-gray-200/80 rounded-md m-3 mx-0 bg-black/20 group shadow-md basis-full cursor-pointer hover:ring-4 hover:bg-black/30 hover:ring-blue-900 hover:shadow-xl hover:transition-all transition-all active:shadow-md active:ring-0 active:transition-none relative z-10'
                  >
                    <h1 className='text-amber-200 uppercase font-mono font-bold md:text-2xl sm:text-xl text-lg group-hover:text-amber-100 transition mr-2 line-clamp-2'>
                      {edge.title!}
                    </h1>
                    <p className='par text-gray-400 group-hover:text-gray-300 transition line-clamp-2'>
                      {edge.subtitle!}
                    </p>
                  </motion.a>
                </Link>
              );
            })
          ) : (
            <span className='text-gray-400 par text-xl mt-1'>
              No posts found matching that query
            </span>
          )}
        </div>
      </Container>
    </main>
  );
};

export default BlogContent;
