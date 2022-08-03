import { Text } from '@geist-ui/core';

const Paragraph = (props: any) => {
  return (
    <Text
      {...Object.assign({ ref: undefined }, props)}
      className='text-base sm:text-lg md:text-xl'
    />
  );
};

export default Paragraph;
