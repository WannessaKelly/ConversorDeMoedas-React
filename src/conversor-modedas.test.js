import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('Dever renderizar o componente se erros', () => {
  render(<ConversorMoedas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
