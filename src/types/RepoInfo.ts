interface RepoInfo {
  repository: {
    name: string;
    description: string;
    url: string;
    primaryLanguage: {
      color: string;
      name: string;
    };
    stargazerCount: number;
    forkCount: number;
  };
}

export default RepoInfo;
