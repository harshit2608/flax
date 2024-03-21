import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar.tsx';

describe('NAVBAR_TEST_SUITE', () => {
  test('Renders without crashing', () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole('banner');
    expect(navbarElement).toBeInTheDocument();
  });

  test('Should render with correct contents', () => {
    render(<Navbar />);
    expect(screen.getByText('Flax')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  test('Should have right elements', () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole('banner');
    expect(navbarElement).toContainHTML('<header');
    expect(navbarElement).toContainHTML('<section');
    expect(navbarElement).toContainHTML('<div');
    expect(navbarElement).toContainHTML('<img');
    expect(navbarElement).toContainHTML('<p');
    expect(navbarElement).toContainHTML('<button');
  });

  test('Should have correct styles', () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole('banner');
    expect(navbarElement).toHaveClass('fixed');
    expect(navbarElement).toHaveClass('top-0');
    expect(navbarElement).toHaveClass('w-screen');
    expect(navbarElement).toHaveClass('z-50');
    expect(navbarElement).toHaveClass('bg-slate-50');
    expect(navbarElement).toHaveClass('px-32');
  });
});
