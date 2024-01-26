import Home from './Home';

type SkillsGrouped = {
  [_ in Home['skills'][number]['status']]: Home['skills'];
};

export default SkillsGrouped;
