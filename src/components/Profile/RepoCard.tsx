interface RepoCardProps {
  repo: string;
  onLoad?(): void;
}

function RepoCard({ repo, onLoad = () => {} }: RepoCardProps) {
  return (
    <a
      href={`https://github.com/${repo}`}
      aria-label={`Yash-Singh1/${repo}`}
      target='_blank'
      rel='noreferrer noopener'
    >
      <img
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${repo.split('/')[0]}&repo=${
          repo.split('/')[1]
        }&theme=nord`}
        width={400}
        height={120}
        onLoad={onLoad}
        alt={`Badge for Yash-Singh1/${repo}`}
      />
    </a>
  );
}

export default RepoCard;
