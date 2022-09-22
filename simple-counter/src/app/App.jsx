import { useState } from 'react';
import classes from './App.module.css';
import { Counter } from '../components/Counter/Counter';
import { Counter2 } from '../components/Counter2/Counter2'

function App() {
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

  const [totalPrice, setTotalPrice] = useState(0);

  const updateProductItem = (productId, isInc) => {
    // const updateProducts = products.map(product => {
    //   if (product.id === productId) {
    //     product.amount
    //   }
    //   return product;
    // })

    if (isInc) {
      console.log('inc');
    } else {
      console.log('dec');
    }
  };

  return (
    <>
      <div className={classes.container}>
        {/* Redering Lists */}
        {products.map((product, index) => (
          <Counter
            key={product.id}
            product={product}
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
