import { notFound } from 'next/navigation';

export const revalidate = false;

export const metadata = {
  title: '404 - Not Found',
};

export default async function TechCovid() {
  notFound();
}
