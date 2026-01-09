const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-3">

        <p className="text-lg font-semibold">
          Sradha Krishna & Ram Mohan
        </p>

        <p className="text-sm">
          Thank you for being part of our special day
        </p>

        <p className="text-sm">
          With blessings from <br />
          <span className="font-medium">
            K.C. Unnikrishnan & Shaija Unnikrishnan
          </span>
        </p>

        {/* Added Respect Line */}
        <p className="text-sm italic mt-4">
          With respect, <br />
          <span className="font-medium not-italic">
            Yadhu Krishna
          </span>
        </p>

        <p className="text-xs mt-4 opacity-80">
          © 2026 | Wedding Invitation
        </p>

      </div>
    </footer>
  );
};

export default Footer;