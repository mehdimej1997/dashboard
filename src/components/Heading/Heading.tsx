import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

function Heading({ ...props }: HeadingProps) {
  return (
    <h1
      {...props}
      className={`${props?.className} text-5xl font-medium text-gray`}
    >
      {props?.children}
    </h1>
  );
}

export default Heading;
