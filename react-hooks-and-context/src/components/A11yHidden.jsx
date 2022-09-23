import React from 'react';
import classNames from 'classnames';
import styles from './A11yHidden.module.scss';

export const A11yHidden = ({
  as: ComponentName,
  className,
  children,
  focusable,
  ...restProps
}) => {
  return (
    <ComponentName
      className={classNames(
        styles.invisible,
        { [styles.focusable]: focusable },
        className
      )}
      {...restProps}
    >
      {children}
    </ComponentName>
  );
};

A11yHidden.defaultProps = {
  as: 'span',
};
