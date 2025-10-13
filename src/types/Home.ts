interface Home {
  projects: string[];
  skills: {
    status: 'proficient' | 'good' | 'learning';
    name: string;
    icon: string;
    link: string;
    circlize?: boolean;
  }[];
}

export default Home;
