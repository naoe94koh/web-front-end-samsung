import React from 'react';
import classNames from 'classnames';
import styles from './A11yHidden.module.css';

export const A11yHidden = ({
  as: ComponentName,
  className,
  children,
  ...restProps
}) => {
  return (
    <ComponentName
      className={classNames(styles.invisible, className)}
      {...restProps}
    >
      {children}
    </ComponentName>
  );
  // return React.createElement(
  //   ComponentType,
  //   {
  //     className: classNames(styles.invisible, className),
  //     ...restProps,
  //   },
  //   children
  // );
};

A11yHidden.defaultProps = {
  as: 'span',
};
