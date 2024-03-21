import FlaxUIPreview from '@/assets/images/HomePagePreview.webp';
const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-[#964AAE] to-[#eb4fb4] px-48 w-screen select-none">
      <div className="h-full pt-16 flex flex-row">
        <section className="w-2/5 flex items-center">
          <div className="m-4 text-white flex flex-col gap-4">
            <div className="text-5xl items-center">
              Flax brings all your tasks, teammates, and tools together
            </div>
            <div className="text-lg">
              Keep everything in the same place—even if your team isn’t.
            </div>
            <div className="flex gap-4">
              <input
                className="rounded w-72 h-12 p-4"
                placeholder="Email"
              ></input>
              <button className="items-center content-center rounded bg-[#0164FF] w-40 h-12 hover:cursor-pointer hover:bg-[#0747A6] duration-500">
                Sign up - it's free!
              </button>
            </div>
          </div>
        </section>
        <section className="w-3/5">
          <div className="m-4 flex justify-center">
            <img
              src={FlaxUIPreview}
              alt="FlaxUIPreview"
              className="w-[40vw] h-auto"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
