import { Query } from '../../.tina/__generated__/types';

export interface SkillsGrouped {
  [key: string]: Query['home']['skills'];
}

export default SkillsGrouped;
