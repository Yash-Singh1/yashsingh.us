import type { GetServerSideProps } from 'next';

function TechCovid() {}

export default TechCovid;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    notFound: true,
  };
};
