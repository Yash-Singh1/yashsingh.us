import Paragraph from '../Paragraph';
import Badge from './Badge';
import profileStyles from '../../styles/profile.module.scss';
import Home from '../../types/Home';

interface BadgeSectionProps {
  description: string;
  badges?: Home['skills'];
}

function BadgeSection({ badges, description }: BadgeSectionProps) {
  return (
    <>
      <Paragraph>{description}</Paragraph>
      <div className={`flex flex-wrap gap-3 gap-x-5 mt-2 ${profileStyles['perspective-1000']}`}>
        {badges
          ? badges.map((skill) => {
              return (
                <Badge
                  key={skill!.name!}
                  link={skill!.link!}
                  icon={skill!.icon!}
                  text={skill!.name!}
                  circlize={skill!.circlize || false}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default BadgeSection;
