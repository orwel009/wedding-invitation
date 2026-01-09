const EventCard = ({ icon, title, time, venue, address }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 mb-2">{time}</p>

      <p className="font-medium text-gray-700">{venue}</p>

      <p className="text-sm text-gray-500">{address}</p>
    </div>
  );
};

export default EventCard;