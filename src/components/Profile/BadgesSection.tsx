import type SkillsGrouped from '../../types/skillsGrouped';
import BadgeSection from './BadgeSection';
import Section from './Section';

interface BadgesSectionProps {
  skillsGrouped: SkillsGrouped;
}

function BadgesSection({ skillsGrouped }: BadgesSectionProps) {
  return (
    <Section title='Skills'>
      <BadgeSection description='I am proficient in' badges={skillsGrouped['proficient']} />
      <BadgeSection description='I am good at' badges={skillsGrouped['good']} />
      <BadgeSection description='I am learning' badges={skillsGrouped['learning']} />
    </Section>
  );
}

export default BadgesSection;
