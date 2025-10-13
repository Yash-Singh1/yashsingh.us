'use client';

import type RepoInfo from '../../types/RepoInfo';
import 'atropos/css';
import { Atropos } from '@/components/Atropos';
import { GitFork, Star } from 'lucide-react';

interface RepoCardProps {
  repo: RepoInfo;
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.repository.url}
      target='_blank'
      className='[-webkit-user-drag:none] select-none'
      draggable='false'
    >
      <Atropos
        rotateXMax={15}
        rotateYMax={15}
        highlight={false}
        shadowOffset={0}
        shadowScale={1}
        stretchX={3}
        stretchY={3}
        rotateTouch={false}
        scaleClassName='rounded-lg'
        innerClassName='rounded-lg w-max'
        className='rounded-lg cursor-pointer'
        rotateClassName='rounded-lg'
        alwaysActive={false}
      >
        <div
          className='w-full h-full absolute border-2 border-black/80 rounded-lg'
          data-atropos-offset='-1'
        ></div>
        <div
          className='w-full h-full absolute border-2 border-black/80 rounded-lg'
          data-atropos-offset='-0.5'
        ></div>
        <div
          className='w-full h-full absolute border-2 border-black/80 rounded-lg'
          data-atropos-offset='0'
        ></div>
        <div
          className='w-full h-full absolute border-2 border-black/80 rounded-lg'
          data-atropos-offset='0.5'
        ></div>
        <div
          className='p-5 active:border-gray-600 active:transition-all sm:active:border-gray-800 h-full pb-5 lg:pb-10 flex flex-col relative bg-[#343a40]/75 rounded-lg border-2 border-gray-800'
          data-atropos-offset='1'
        >
          <h3 className='mb-2 text-base sm:text-lg md:text-xl lg:text-2xl'>
            {repo.repository.name}
          </h3>
          <p className='line-clamp-1 max-w-[25ch] sm:max-w-none sm:line-clamp-2 par font-thin text-base sm:text-lg lg:text-xl sm:h-14'>
            {repo.repository.description}
          </p>
          <br />
          <div className='absolute bottom-3 lg:bottom-5 text-base sm:text-lg lg:text-xl'>
            <span
              className={`w-3 h-3 sm:w-4 sm:h-4 inline-block mr-1 align-[-2.5%] rounded-full`}
              style={{ backgroundColor: repo.repository.primaryLanguage.color }}
            ></span>
            <span>{repo.repository.primaryLanguage.name}</span>
          </div>
          <div className='absolute bottom-3 lg:bottom-5 right-3 lg:right-5 flex flex-nowrap gap-3 sm:gap-4'>
            {repo.repository.stargazerCount > 1 ? (
              <div className='inline-block'>
                <Star className='mr-1 w-4 inline-block fill-current align-text-top md:w-5' />
                <span className='par text-xl sm:text-2xl leading-[0px]'>
                  {repo.repository.stargazerCount}
                </span>
              </div>
            ) : null}
            {repo.repository.forkCount > 0 ? (
              <div className='hidden mid:inline-block'>
                <GitFork className='mr-1 w-3 md:w-5 inline-block stroke-[2px]' />
                <span className='par text-xl sm:text-2xl leading-[0px]'>
                  {repo.repository.forkCount}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </Atropos>
    </a>
  );
}

export default RepoCard;
