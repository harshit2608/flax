const Footer = () => (
  <footer
    className="bg-[#172B4D] w-full text-white p-3"
    data-testid="footer-component"
  >
    <section className="p-5">Section1</section>
    <div className="border-solid border-[#505E79] border-[0.5px]" />
    <section className="p-5 flex items-center justify-between text-sm">
      <div className="flex items-center gap-5">
        <a href="#privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:underline">
          Terms
        </a>
        <p>Copyright © 2024 Flax</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#fb">facebook</a>
        <a href="#insts">instagram</a>
        <a href="#linkedin">linkedin</a>
        <a href="#youtibe">youtube</a>
      </div>
    </section>
  </footer>
);

export default Footer;
