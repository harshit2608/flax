const Navbar = () => {
  const handleLogin = () => {
    console.log('handleLogin Clicked');
  };

  return (
    <header className="fixed top-0 w-screen z-50 hover:shadow-xl hover:cursor-pointer duration-500 bg-slate-50 px-32 scro">
      <section className="flex h-16">
        <div className="flex m-3 flex-none col-span-1 items-center justify-center">
          <img src="empty" alt="logo" className="m-2 mr-0" />
          <p className="flex text-4xl font-medium m-2">Flax</p>
        </div>
        <div className="flex m-3 grow"></div>
        <div className="flex m-3">
          <button
            className="flex items-center justify-center m-4 text-lg font-medium"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
