import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";

const images = [img1, img2, img3, img4];

const Gallery = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={img}
                alt="Couple moment"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
