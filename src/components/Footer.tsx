const Footer = () => (
  <footer
    className="bg-[#172B4D] w-screen text-white px-48 select-none"
    data-testid="footer-component"
  >
    <section className="py-3">
      <div className="flex items-center gap-4 pl-4">
        <div className="flex w-1/6 gap-3 justify-start">
          <img src="TBD" alt="Flax logo" className="" />
          <div className="text-5xl font-semibold">Flax</div>
        </div>
        <div className="flex w-5/6 justify-end">
          <a href="/about" className="p-4  hover:bg-slate-700">
            <div>About Flax</div>
            <div className="mt-1 text-xs">What's behind the boards</div>
          </a>
          <a href="/jobs" className="p-4  hover:bg-slate-700">
            <div>Jobs</div>
            <div className="mt-1 text-xs">
              Woooh! Hold your horses bro!! Let me get one first
            </div>
          </a>
          <a href="/app" className="p-4 hover:bg-slate-700">
            <div>Apps</div>
            <div className="mt-1 text-xs">
              Download the Flax app for your desktop or mobile devices
            </div>
          </a>
          <a href="/contactus" className="p-4 hover:bg-slate-700">
            <div>Contact Us</div>
            <div className="mt-1 text-xs">
              Need anything? Get in touch with us.
            </div>
          </a>
        </div>
      </div>
    </section>
    <div className="border-solid border-[#505E79] border-[0.5px]" />
    <section className="p-5 flex items-center justify-between text-sm">
      <div className="flex items-center gap-5">
        <a href="#legal/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#legal/terms" className="hover:underline">
          Terms
        </a>
        <p>Copyright © 2024 Flax</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#fb">facebook</a>
        <a href="#insta">instagram</a>
        <a href="#linkedin">linkedin</a>
        <a href="#youtibe">youtube</a>
      </div>
    </section>
  </footer>
);

export default Footer;
