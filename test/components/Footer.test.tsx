import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from '@/components/Footer.tsx';

describe('FOOTER_TEST_SUITE', () => {
  test('Renders without crashing', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-component');
    expect(footerElement).toBeInTheDocument();
  });

  test('Should render with correct contents', () => {
    render(<Footer />);
    expect(screen.getByText('Flax')).toBeInTheDocument();
    expect(screen.getByText('About Flax')).toBeInTheDocument();
    expect(screen.getByText(/What's behind the boards/i)).toBeInTheDocument();
    expect(screen.getByText('Jobs')).toBeInTheDocument();
    expect(
      screen.getByText(/Hold your horses bro!! Let me get one first/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Apps')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Download the Flax app for your desktop or mobile devices/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(
      screen.getByText(/Need anything\? Get in touch with us./i)
    ).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
    expect(screen.getByText('Copyright © 2024 Flax')).toBeInTheDocument();
    expect(screen.getByText('facebook')).toBeInTheDocument();
    expect(screen.getByText('instagram')).toBeInTheDocument();
    expect(screen.getByText('linkedin')).toBeInTheDocument();
    expect(screen.getByText('youtube')).toBeInTheDocument();
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
      expect(window.location.hash).toEqual('#legal/privacy');
    });

    const termsLink = screen.getByText('Terms');
    fireEvent.click(termsLink);
    await waitFor(() => {
      expect(window.location.hash).toEqual('#legal/terms');
    });
  });
});
