import { createContext,useContext } from 'react';

export const CartContext = createContext({
    title: '장바구니',
    products: null,
    totalPrice: 0,
    handleUpdateAmount : () =>{}
});

export const CartProvider = ({ value, children }) => {
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
  

export const useCart = () => {
    const value = useContext(CartContext)
    if (!value) {
      throw new Error(
        'useAuth 훅은 AuthProvider 컴포넌트 내부에서만 사용 가능합니다.'
      );
    }
    return value;
};