import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero.tsx';

jest.mock(
  '@/assets/images/HomePagePreview.webp',
  () => '../assets/images/mockImage.png'
);

describe('HERO_TEST_SUITE', () => {
  test('Renders without crashing', () => {
    render(<Hero />);
    const heroElement = screen.getByRole('main');
    expect(heroElement).toBeInTheDocument();
  });

  test('Should render with correct contents', () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Flax brings all your tasks, teammates, and tools together/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Keep everything in the same place—even if your team isn’t./i
      )
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByText(/Sign up - it's free!/i)).toBeInTheDocument();
  });

  test('Should have right elements', () => {
    render(<Hero />);
    const heroElement = screen.getByRole('main');
    expect(heroElement).toContainHTML('<main');
    expect(heroElement).toContainHTML('<section');
    expect(heroElement).toContainHTML('<div');
    expect(heroElement).toContainHTML('<input');
    expect(heroElement).toContainHTML('<button');
    expect(heroElement).toContainHTML('<img');
  });

  test('Should have correct styles', () => {
    render(<Hero />);
    const heroElement = screen.getByRole('main');
    expect(heroElement).toHaveClass('bg-gradient-to-r');
    expect(heroElement).toHaveClass('from-[#964AAE]');
    expect(heroElement).toHaveClass('to-[#eb4fb4]');
    expect(heroElement).toHaveClass('px-48');
    expect(heroElement).toHaveClass('w-screen');
    expect(
      screen.getByText(
        /Flax brings all your tasks, teammates, and tools together/i
      )
    ).toHaveClass('text-5xl');
    expect(
      screen.getByText(
        /Keep everything in the same place—even if your team isn’t./i
      )
    ).toHaveClass('text-lg');
    expect(screen.getByPlaceholderText('Email')).toHaveClass('rounded');
    expect(screen.getByText(/Sign up - it's free!/i)).toHaveClass('rounded');
  });

  test('Should display image correctly', () => {
    render(<Hero />);
    const imageElement = screen.getByAltText('FlaxUIPreview');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('alt', 'FlaxUIPreview');
  });
});
