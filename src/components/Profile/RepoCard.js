import PropTypes from 'prop-types';

function RepoCard({ repo, onLoad }) {
  return (
    <a href={`https://github.com/${repo}`} aria-label={`Yash-Singh1/${repo}`}>
      <img
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.split('/')[0]}&repo=${
          repo.split('/')[1]
        }&theme=nord`}
        width={400}
        onLoad={onLoad || (() => null)}
        alt={`Badge for Yash-Singh1/${repo}`}
      />
    </a>
  );
}

RepoCard.propTypes = {
  repo: PropTypes.string.isRequired,
  onLoad: PropTypes.func
};

export default RepoCard;
