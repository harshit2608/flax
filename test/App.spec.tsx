import { render } from '@testing-library/react';
import App from '@/App.tsx';

jest.mock(
  '@/assets/images/HomePagePreview.webp',
  () => '../assets/images/mockImage.png'
);

describe('APP_TEST_SUITE', () => {
  test('Should render App Component', () => {
    const { getByTestId } = render(<App />);
    const appComponent = getByTestId('app-component');
    expect(appComponent).toBeInTheDocument();
  });

  test('Should render home component', () => {
    const { getByTestId } = render(<App />);
    const homeComponent = getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });
});
