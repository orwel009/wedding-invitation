const OurStory = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-4">
          Our Story
        </h2>

        {/* Decorative divider */}
        <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full mb-10"></div>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          What started as a simple meeting slowly turned into a beautiful
          journey of friendship, trust, and love. With the blessings of our
          families, we are excited to begin a new chapter together.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg">
          From shared smiles to countless memories, our engagement marked the
          beginning of forever. We can’t wait to celebrate this special day
          with all of you.
        </p>

      </div>
    </section>
  );
};

export default OurStory;