import type { GetServerSideProps, NextPage } from 'next';

const TechCovid: NextPage = function () {
  return null;
};

export default TechCovid;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    notFound: true,
  };
};
