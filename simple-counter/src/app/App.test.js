import { render, screen } from '@testing-library/react';
import App from './App';

test('버튼 레이블의 접근성 준수 여부', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toHaveAttribute('title');
  expect(button).toHaveAttribute('aria-label');
});
