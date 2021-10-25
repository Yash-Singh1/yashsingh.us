import PropTypes from 'prop-types';

function RepoCard({ repo }) {
  return (
    <a href={`https://github.com/${repo}`}>
      <img src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.split('/')[0]}&repo=${repo.split('/')[1]}&theme=nord`} />
    </a>
  );
}

RepoCard.propTypes = {
  repo: PropTypes.string.isRequired
};

export default RepoCard;
