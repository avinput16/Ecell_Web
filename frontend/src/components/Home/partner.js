import React, { useEffect, useRef } from "react";
import img1 from '../../assets/spons/50knetwork.jpeg';
import img2 from '../../assets/spons/10000startup.png';
import img3 from '../../assets/spons/venturecatalysts.png';
import img4 from '../../assets/spons/startuphyderabad.jpeg';
import img5 from '../../assets/spons/thub.png';
import img6 from '../../assets/spons/turbostart.jpeg';
import img7 from '../../assets/spons/googlecloud.png';
import img8 from '../../assets/spons/cloudesign.png';
import img9 from '../../assets/spons/catechnologies.jpeg';
import img10 from '../../assets/spons/sciofoundation.png';
import img11 from '../../assets/spons/badabuisness.png';
import img12 from '../../assets/spons/learnngwhile travelling.jpeg';
import img13 from '../../assets/spons/ncore.png';
import img14 from '../../assets/spons/enactus.png';
import img15 from '../../assets/spons/lemon.png';
import img16 from '../../assets/spons/fundsindia.png';
import img17 from '../../assets/spons/jaarvis.png';
import img18 from '../../assets/spons/sucseed.png';
import img19 from '../../assets/spons/leada.png';
import img20 from '../../assets/spons/yourstartupol.jpeg';
import img21 from '../../assets/spons/cosmos.png';
import img22 from '../../assets/spons/nirmaan.png';
import img23 from '../../assets/spons/ecell.jpeg';
import img24 from '../../assets/spons/thristypelican.jpeg';

const items = [
  { name: "Thirsty Pelican", image: img24 },
  { name: "Innovation", image: img1 },
  { name: "Technology", image: img2 },
  { name: "Future", image: img3 },
  { name: "Revolution", image: img4 },
  { name: "Progress", image: img5 },
  { name: "Progress", image: img6 },
  { name: "Progress", image: img7 },
  { name: "Progress", image: img8 },
  { name: "Progress", image: img9 },
  { name: "Progress", image: img10 },
  { name: "Progress", image: img11 },
  { name: "Progress", image: img12 },
  { name: "Progress", image: img13 },
  { name: "Progress", image: img14 },
  { name: "Progress", image: img15 },
  { name: "Progress", image: img16 },
  { name: "Progress", image: img17 },
  { name: "Progress", image: img18 },
  { name: "Progress", image: img19 },
  { name: "Progress", image: img20 },
  { name: "Progress", image: img21 },
  { name: "Progress", image: img22 },
  { name: "Progress", image: img23 },
];

const DisruptCarousel = () => {

  const containerRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrame;

    const smoothScroll = () => {
      if (scrollContainer && !isPaused.current) {
        // Move the scroll position to the left
        scrollContainer.scrollLeft -= 2.5; // Speed adjustment

        // Reset to the end once the content scrolls halfway through
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Smooth reset to end
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h3 className="text-center text-5xl font-extrabold text-blue-500 mb-12 tracking-tight">
          Past Partners
        </h3>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden w-full">
          <div
            ref={containerRef}
            className="flex items-center gap-8 whitespace-nowrap overflow-hidden"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex-none w-48 h-48 flex items-center justify-center rounded-lg bg-white shadow-lg shadow-gray-500 hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy" src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Fades for Better Look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10" />
    </div>
  );
};

export default DisruptCarousel;
