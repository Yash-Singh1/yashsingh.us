import { Metadata } from 'next';
import { RESUME_DATA } from '@/data/resume-data';
import '../../../styles/cv.scss';
import CV from './cv';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}'s Resume | yashsingh.us/cv`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return <CV />;
}
