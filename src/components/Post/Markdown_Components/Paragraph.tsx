import { Text } from '@geist-ui/core';

export const Paragraph = (props: any) => {
  return <Text {...Object.assign({ ref: undefined }, props)} font='1.25rem' />;
};

export default Paragraph;
