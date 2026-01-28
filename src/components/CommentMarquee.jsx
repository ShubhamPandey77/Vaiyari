import React from 'react';

const CommentMarquee = () => {
  const reviews = [
    {
      id: 1,
      name: 'Aishanya Trivedi',
      rating: 5,
      comment: "Amazing Experience with Vaiyari Travels. The trip was absolutely superb and truly one of the best trips I’ve ever been on. Every moment was enjoyable and well-managed. The captains were very professional, friendly and supportive—they took care of everything, including safety and time management.",
    },
    {
      id: 2,
      name: 'Akash Kashyap',
      rating: 5,
      comment: 'Hey team Vayari Travel, Manali trip ka experience amazing tha! Aapki hospitality aur service sach mein kaafi badiya thi. Rooms bhi kaafi spacious aur comfortable the. Sab kuch itne ache se manage karne ke liye thank you.',
    },
    {
      id: 3,
      name: 'Nilkamal',
      rating: 5,
      comment: 'Everything was well-planned and stress-free. The captains were professional, friendly, and very supportive—special thanks to Aarav and Tushar. Highly recommended for unforgettable trips! 🌟🌟🌟🌟🌟',
    },
    {
      id: 4,
      name: 'Suhani Tyagi',
      rating: 5,
      comment: 'The stay was absolutely beautiful and truly enjoyable. The bonfire and DJ night added so much fun and created a great vibe. Everyone was extremely sweet and welcoming, which made the experience even better.',
    },
    {
      id: 5,
      name: 'Jiya',
      rating: 5,
      comment: 'I went on a trip to Manali and it was truly a wonderful experience. Everything was well managed, and the trip was full of fun and beautiful memories. Aarav and Tushar treated me extremely well and made sure I was comfortable.',
    }
  ];

  const doubleReviews = [...reviews, ...reviews];

  return (
    <section className="w-full bg-[#0a0a0a] py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-20">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
          What our <span className="text-red-500">Travelers</span> Say
        </h2>
      </div>

      <div className="relative group z-20">
        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

        <div className="animate-marquee flex whitespace-nowrap py-4">
          {doubleReviews.map((review, index) => (
            <div 
              key={`${review.id}-${index}`}
              className="flex-shrink-0 flex flex-col mx-4 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md min-w-[320px] max-w-[400px] whitespace-normal hover:bg-white/[0.06] transition-all duration-500 hover:border-red-500/30 group/card"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <div className="relative mb-8">
                <p className="text-gray-300 font-medium leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/20 rotate-3 group-hover/card:rotate-0 transition-transform duration-300">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight group-hover/card:text-red-500 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">Verified Traveler</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentMarquee;
