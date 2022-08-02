import type RepoInfo from '../../types/RepoInfo';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import 'atropos/css';
import Atropos from 'atropos/react';
import profileStyles from '../../styles/profile.module.scss';

config.autoAddCss = false;

interface RepoCardProps {
  repo: RepoInfo;
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <Atropos
      rotateXMax={15}
      rotateYMax={15}
      highlight={false}
      shadowOffset={0}
      shadowScale={1}
      stretchX={3}
      stretchY={3}
      scaleClassName={profileStyles['repo-card-scale']}
      innerClassName='rounded-lg'
      className='rounded-lg'
      rotateClassName='rounded-lg'
    >
      <div
        className='w-full h-full absolute bg-transparent border-2 border-black/80 rounded-lg'
        data-atropos-offset='-1'
      ></div>
      <div
        className='w-full h-full absolute bg-transparent border-2 border-black/80 rounded-lg'
        data-atropos-offset='-0.5'
      ></div>
      <div
        className='w-full h-full absolute bg-transparent border-2 border-black/80 rounded-lg'
        data-atropos-offset='0'
      ></div>
      <div
        className='w-full h-full absolute bg-transparent border-2 border-black/80 rounded-lg'
        data-atropos-offset='0.5'
      ></div>
      <a
        href={repo.repository.url}
        target='_blank'
        className='p-5 pb-10 block relative bg-[#343a40]/75 rounded-lg shadow-xl active:duration-75 cursor-pointer hover:shadow-2xl hover:transition-all transition-all border-2 border-gray-800'
        rel='noreferrer'
        data-atropos-offset='1'
      >
        <h3 className='mb-2'>{repo.repository.name}</h3>
        <p className='max-w-full par font-thin text-xl h-14'>{repo.repository.description}</p>
        <br />
        <div className='absolute bottom-5'>
          <span
            className={`w-4 h-4 inline-block mr-1 align-[-5%] rounded-full`}
            style={{ backgroundColor: repo.repository.primaryLanguage.color }}
          ></span>
          <span>{repo.repository.primaryLanguage.name}</span>
        </div>
        <div className='absolute bottom-5 right-5 flex flex-nowrap gap-4'>
          {repo.repository.stargazerCount > 1 ? (
            <div className='inline-block'>
              <FontAwesomeIcon icon={faStar} className='mr-1' />
              <span className='par text-2xl'>{repo.repository.stargazerCount}</span>
            </div>
          ) : null}
          {repo.repository.forkCount > 0 ? (
            <div className='inline-block'>
              <FontAwesomeIcon icon={faCodeBranch} className='mr-1' />
              <span className='par text-2xl'>{repo.repository.forkCount}</span>
            </div>
          ) : null}
        </div>
      </a>
    </Atropos>
  );
}

export default RepoCard;
