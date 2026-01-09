const Location = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Wedding Location
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Venue Info Card */}
          <div className="bg-pink-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Chendamangalam Nayar Samajam Auditorium
            </h3>

            <p className="text-gray-600 mb-2">
              Chendamangalam, North Paravur
            </p>

            <p className="text-gray-600 mb-6">
              Ernakulam, Kerala
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Chendamangalam+Nayar+Samajam+Auditorium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 transition text-white font-semibold rounded-full shadow-md"
            >
              Get Directions
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Wedding Location Map"
              src="https://www.google.com/maps?q=Chendamangalam+Nayar+Samajam+Auditorium&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;