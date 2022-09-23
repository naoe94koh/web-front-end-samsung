import { A11yHidden } from './A11yHidden';
import { useRef } from 'react';
import { oneOf, string, bool, func, shape, any } from 'prop-types';
import classNames from 'classnames';

export const FormControl = ({
  id,
  type,
  label,
  labelInvisible,
  className,
  inputProps,
  ...restProps
}) => {
  const inputRef = useRef(null);
  // const id = useId();

  return (
    <div className={classNames('formControl', className)} {...restProps}>
      {labelInvisible ? (
        <A11yHidden as="label" htmlFor={id}>
          {label}
        </A11yHidden>
      ) : (
        <label htmlFor={id}>{label}</label>
      )}
      <input ref={inputRef} id={id} type={type} {...inputProps} />
    </div>
  );
};

FormControl.defaultProps = {
  type: 'text',
  labelInvisible: false,
  inputProps: {},
};

FormControl.propTypes = {
  type: oneOf(['text', 'number', 'email', 'checkbox', 'radio']),
  id: string.isRequired,
  label: string.isRequired,
  labelInvisible: bool,
  className: string,
  inputProps: shape({
    checked: bool,
    onChange: func,
  }),
  restProps: any,
};
