import type SkillsGrouped from '../../types/skillsGrouped';
import BadgeSection from './BadgeSection';
import Section from './Section';

interface BadgesSectionProps {
  handleHashChange: () => void;
  skillsGrouped: SkillsGrouped;
}

function BadgesSection({ handleHashChange, skillsGrouped }: BadgesSectionProps) {
  return (
    <Section title='Skills' handleHashChange={handleHashChange}>
      <BadgeSection description='I am proficient in' badges={skillsGrouped['proficient']} />
      <BadgeSection description='I am good at' badges={skillsGrouped['good']} />
      <BadgeSection description='I am learning' badges={skillsGrouped['learning']} />
    </Section>
  );
}

export default BadgesSection;
