import usesStyles from '../../styles/uses.module.scss';
import coolBgStyles from '../../styles/cool-bg.module.scss';
import Container from '../../components/Container';
import UsesContent from './uses';

export const metadata = {
  title: 'Uses - yashsingh.us',
  description: "My developer setup. Inspired by Wess Bos' uses.tech.",
};

export default function UsesPage() {
  return (
    <main className={`${coolBgStyles['cool-bg']} ${usesStyles['cool-bg']}`}>
      <Container className='bg-black/5'>
        <UsesContent />
      </Container>
    </main>
  );
}
