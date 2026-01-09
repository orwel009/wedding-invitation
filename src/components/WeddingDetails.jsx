import EventCard from "./EventCard";

const WeddingDetails = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Wedding Details
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">

          <EventCard
            icon="💍"
            title="Wedding Ceremony"
            time="06 Feb 2026 • 12:37 PM – 12:55 PM"
            venue="Chendamangalam Nayar Samajam Auditorium"
            address="Chendamangalam, North Paravur, Ernakulam"
          />

          <EventCard
            icon="🍽️"
            title="Reception & Lunch"
            time="Immediately after the ceremony"
            venue="Same Venue"
            address="Chendamangalam, North Paravur, Ernakulam"
          />

        </div>

        {/* Hosted By */}
        <div className="mt-12 text-center text-gray-700">
          <p className="font-semibold">With blessings of</p>
          <p className="mt-2">
            K.C. Unnikrishnan & Shyja Unnikrishnan
          </p>
          <p className="text-sm mt-1">
            Kadavilparambil House, Puthenvelikkara
          </p>
        </div>

      </div>
    </section>
  );
};

export default WeddingDetails;