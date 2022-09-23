import classNames from 'classnames';
import { A11yHidden } from './A11yHidden';

export function SkipToContent({ className, ...props }) {
  return (
    <div className={classNames('skipToContent', className)} {...props}>
      <A11yHidden
        as="a"
        href="#section-1"
        style={{
          position: 'fixed',
          left: 120,
          top: 0,
        }}
        focusable
      >
        Go Section 1
      </A11yHidden>
      <A11yHidden
        as="a"
        href="#section-2"
        style={{
          position: 'fixed',
          left: 120,
          top: 0,
        }}
        focusable
      >
        Go Section 2
      </A11yHidden>
      <A11yHidden
        as="a"
        href="#section-3"
        style={{
          position: 'fixed',
          left: 120,
          top: 0,
        }}
        focusable
      >
        Go Section 3
      </A11yHidden>
    </div>
  );
}
