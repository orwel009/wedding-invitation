import heroBg from '../assets/images/bg1.jpg'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4">
          Together Forever
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Sradha Krishna <span className="text-pink-300">&</span> Ram Mohan
        </h1>

        <p className="text-lg md:text-xl mb-2">
          06 February 2026 • Friday
        </p>

        <p className="text-sm md:text-base mb-8">
          Muhurtham: 12:37 PM – 12:55 PM
        </p>

        <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-full text-white font-semibold shadow-lg">
          Save the Date
        </button>
      </div>
    </section>
  );
};

export default Hero;