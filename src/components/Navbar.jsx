const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        <h1 className="text-lg font-semibold">
          Sradhakrishna <span className="text-pink-300">&</span> Ram Mohan
        </h1>

        <p className="text-sm opacity-90">
          06 February 2026
        </p>

      </div>
    </nav>
  );
};

export default Navbar;