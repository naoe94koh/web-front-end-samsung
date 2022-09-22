import { useState } from 'react';
import classes from './Counter2.module.css';

export function Counter2({contenthead, size, step, min, max}) {
    const [fsize,setSize] = useState(()=> {return (size < min ? min : size > max ? max: size)})

    const handlerSizeIncrease = () =>{
        size = fsize + step;
        setSize(() => {return (size >= max ? max : size)})
    }
    const handlerSizeDecrease = () =>{
        size = fsize - step;
        setSize(() => {return (size <= min ? min : size)})
    }

    return (
        <div className={classes.container}>
            <button className={`${classes.button} ${classes.increment}`}
            type="button"
            title="카운트 감소"
            aria-label="카운트 감소"
            disabled={fsize <= min}
            onClick={handlerSizeDecrease}>
                -
            </button>
            <output className={classes.output} style={{fontSize:fsize}}>{contenthead}</output>
            <button 
            className={`${classes.button} ${classes.increment}`}
            type="button"
            title="카운트 증가"
            aria-label="카운트 증가"
            disabled={fsize >= max }
            onClick={handlerSizeIncrease}>
                +
            </button>
        </div>
    )
}

Counter2.defaultProps = {
    size: 40,
    step:10,
    min: 20,
    max: 100,
  };