import coolBgStyles from '../../../styles/cool-bg.module.scss';
import contactStyles from '../../../styles/contacts.module.scss';
import Container from '../../../components/Container';
import { type Metadata } from 'next';
import ContactsContent from './contacts';

export const metadata: Metadata = {
  title: 'Contacts - yashsingh.us',
  description: "Yash Singh's Online Presence in one page.",
};

export default function ContactsPage() {
  return (
    <main className={`${coolBgStyles['cool-bg']} ${contactStyles['cool-bg']}`}>
      <Container>
        <ContactsContent />
      </Container>
    </main>
  );
}
