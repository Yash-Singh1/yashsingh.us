interface RepoCardProps {
  repo: string;
  onLoad?(): void;
}

function RepoCard({ repo, onLoad = () => {} }: RepoCardProps) {
  return (
    <a
      href={`https://github.com/Yash-Singh1/${repo}`}
      aria-label={repo}
      target='_blank'
      rel='noreferrer noopener'
    >
      <img
        src={`https://github-readme-stats.vercel.app/api/pin/?username=Yash-Singh1&repo=${repo}&theme=nord`}
        width={400}
        height={120}
        onLoad={onLoad}
        alt={`Badge for Yash-Singh1/${repo}`}
      />
    </a>
  );
}

export default RepoCard;
