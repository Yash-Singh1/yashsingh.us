import { Query } from '../../../.tina/__generated__/types';
import Paragraph from '../Paragraph';
import Badge from './Badge';

interface BadgeSectionProps {
  description: string;
  badges?: Query['home']['skills'];
}

function BadgeSection({ badges, description }: BadgeSectionProps) {
  return (
    <>
      <Paragraph>{description}</Paragraph>
      <div className='flex flex-wrap gap-3 gap-x-5 mt-2'>
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
