import type RepoInfo from '../../types/RepoInfo';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

interface RepoCardProps {
  repo: RepoInfo;
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={repo.repository.url}
      className='p-5 pb-10 block relative bg-[#343a40]/75 rounded-lg shadow-xl cursor-pointer hover:shadow-2xl hover:mt-[-0.5rem] hover:mb-2 hover:transition-all transition-all border-2 border-gray-800'
    >
      <h3 className='mb-1'>{repo.repository.name}</h3>
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
  );
}

export default RepoCard;
