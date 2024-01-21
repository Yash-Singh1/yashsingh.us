const Paragraph = (props: any) => {
  return (
    <p
      {...Object.assign({ ref: undefined }, props)}
      type='secondary'
      className='text-base sm:text-lg md:text-xl max-w-[clamp(45ch,100%,75ch)]'
    />
  );
};

export default Paragraph;
