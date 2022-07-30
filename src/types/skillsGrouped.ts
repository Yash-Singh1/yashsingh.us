import Home from './Home';

export interface SkillsGrouped {
  [key: string]: Home['skills'];
}

export default SkillsGrouped;
