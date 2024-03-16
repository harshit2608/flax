import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from '@/components/Footer.tsx';

describe('FOOTER_TEST_SUITE', () => {
  test('Renders without crashing', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-component');
    expect(footerElement).toBeInTheDocument();
  });

  test('Should render with corret contents', () => {
    render(<Footer />);

    expect(screen.getByText('Section1')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /privacy policy/i })
    ).toHaveAttribute('href', '#privacy');
    expect(screen.getByRole('link', { name: /terms/i })).toHaveAttribute(
      'href',
      '#terms'
    );
    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute(
      'href',
      '#fb'
    );
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute(
      'href',
      '#insts'
    );
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      '#linkedin'
    );
    expect(screen.getByRole('link', { name: /youtube/i })).toHaveAttribute(
      'href',
      '#youtibe'
    );
    expect(screen.getByText('Copyright © 2024 Flax'));
  });

  test('Should have right elements', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-component');

    expect(footerElement).toContainHTML('<section');
    expect(footerElement).toContainHTML('<footer');
    expect(footerElement).toContainHTML('<div');
  });

  test('Should have correct styles', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-component');

    expect(footerElement).toHaveClass('bg-[#172B4D]');
    expect(footerElement).toHaveClass('text-white');
  });

  test('Should navigate correctly', async () => {
    render(<Footer />);

    const privacyLink = screen.getByText('Privacy Policy');
    fireEvent.click(privacyLink);
    await waitFor(() => {
      expect(window.location.hash).toEqual('#privacy');
    });

    const termsLink = screen.getByText('Terms');
    fireEvent.click(termsLink);
    await waitFor(() => {
      expect(window.location.hash).toEqual('#terms');
    });
  });
});
