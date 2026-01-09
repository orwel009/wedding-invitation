import { useEffect, useState } from "react";

const weddingDate = new Date("2026-02-06T12:37:00");

const Countdown = () => {
  const calculateTimeLeft = () => {
    const diff = weddingDate - new Date();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-center text-xl font-semibold text-pink-600">
        💍 It’s Wedding Time!
      </p>
    );
  }

  return (
    <section className="py-16 bg-pink-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Countdown to Our Big Day
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-white rounded-xl shadow-lg w-24 h-24 flex flex-col items-center justify-center"
          >
            <span className="text-3xl font-bold text-pink-600">
              {value}
            </span>
            <span className="text-sm uppercase text-gray-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;