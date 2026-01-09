const RSVP = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          RSVP
        </h2>

        <form
          name="rsvp"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="bg-pink-50 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Required hidden fields */}
          <input type="hidden" name="form-name" value="rsvp" />
          <input type="hidden" name="bot-field" />

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-1 font-medium">
              Email / Phone
            </label>
            <input
              type="text"
              name="contact"
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block mb-2 font-medium">
              Will you attend?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" value="Yes" required />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" value="No" />
                No
              </label>
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-1 font-medium">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">
              Message (optional)
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 transition text-white font-semibold rounded-full shadow-md"
          >
            Submit RSVP
          </button>

        </form>

      </div>
    </section>
  );
};

export default RSVP;