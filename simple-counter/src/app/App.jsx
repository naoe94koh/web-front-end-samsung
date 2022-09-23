// import './App.css'; // import css file (class GLOBAL)
import classes from './App.module.css'; // import css modules (class UNIQUE(LOCAL): GLOBAL)

import { useState, useEffect } from 'react';
import { Counter } from '../components/Counter/Counter';
import { Counter2 } from '../components/Counter2/Counter2'

// React 함수 컴포넌트 중심 설계
// useState()
// 상태 관리 (업데이트 시점 → 업데이트 이후 콜백: 특정 상태에 의존하는 이펙트 콜백 함수 설정)
// 사이드 이펙트 관리
// useEffect()

function App() {
  /* 관심사: products ------------------------------------------------------------ */

  const [products, setProducts] = useState([
    {
      id: 'product-1',
      price: 1000,
      amount: 0,
    },
    {
      id: 'product-2',
      price: 1200,
      amount: 1,
    },
  ]);

  useEffect(() => {
    setTotalPrice(
      products.reduce((total, { price, amount }) => {
        return total + price * amount;
      }, 0)
    );
  }, [products]);

  /* 관심사: totalPrice ------------------------------------------------------------ */

  const [totalPrice, setTotalPrice] = useState(0);

  /* 업데이트 함수 ------------------------------------------------------------------ */

  const updateProductItem = (productId, isInc) => {
    setProducts((products) => {
      let updateValue = isInc ? 1 : -1;

      return products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            amount: product.amount + updateValue,
          };
        }
        return product;
      });
    });
  };

  return (
    <>
      <div className={classes.container}>
        {/* Redering Lists */}
        {products.map((product, index) => (
          <Counter
            key={product.id}
            data-id={product.id}
            count={product.amount}
            onUpdate={updateProductItem}
          />
        ))}
      </div>
      <output className={classes.output}>{totalPrice}원</output>
    </>
  );
}

export default App;
