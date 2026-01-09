const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">

        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Thank You! 💖
        </h1>

        <p className="text-gray-600 mb-6">
          Your RSVP has been received successfully.
          <br />
          We look forward to celebrating with you!
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 transition text-white font-semibold rounded-full"
        >
          Back to Home
        </a>

      </div>
    </section>
  );
};

export default ThankYou;