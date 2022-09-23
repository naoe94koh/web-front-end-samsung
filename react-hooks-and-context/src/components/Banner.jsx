import { A11yHidden } from './A11yHidden';

export const Banner = ({ url, width, height, children, ...restProps }) => {
  return (
    <figure {...restProps}>
      <img src={url} alt="" width={width} height={height} />
      <A11yHidden as="figcaption">{children}</A11yHidden>
    </figure>
  );
};
