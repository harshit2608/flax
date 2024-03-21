import Home from '@/pages/Home';
import { render } from '@testing-library/react';

jest.mock(
  '@/assets/images/HomePagePreview.webp',
  () => '../assets/images/mockImage.png'
);
describe('HOME_TEST_SUITE', () => {
  test('Should render home page without a crash', () => {
    const { getByTestId } = render(<Home />);

    const homeComponent = getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });

  test('Should render Footer component', () => {
    const { getByTestId } = render(<Home />);
    const footerComponent = getByTestId('footer-component');
    expect(footerComponent).toBeInTheDocument();
  });
});
