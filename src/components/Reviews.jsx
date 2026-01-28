import React, { useState } from 'react'

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      comment: 'Amazing experience with Vaiyari! The Manali trip was perfectly organized.',
      date: 'Jan 15, 2024'
    },
    {
      id: 2,
      name: 'Priya Singh',
      rating: 4,
      comment: 'Great group of people and beautiful locations. Highly recommended!',
      date: 'Dec 28, 2023'
    }
  ]);

  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newReview = {
      id: Date.now(),
      name: newName,
      rating: newRating,
      comment: newComment,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setReviews([newReview, ...reviews]);
    setNewName('');
    setNewComment('');
    setNewRating(5);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Side: Form */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase">
              SHARE YOUR <br />
              <span className="text-red-500">EXPERIENCE</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
              <div>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
                >
                  <option value="5" className="bg-[#0a0a0a]">5 Stars - Excellent</option>
                  <option value="4" className="bg-[#0a0a0a]">4 Stars - Very Good</option>
                  <option value="3" className="bg-[#0a0a0a]">3 Stars - Good</option>
                  <option value="2" className="bg-[#0a0a0a]">2 Stars - Fair</option>
                  <option value="1" className="bg-[#0a0a0a]">1 Star - Poor</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Your Review"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.2)]"
              >
                Post Review
              </button>
            </form>
          </div>

          {/* Right Side: Reviews List */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-white font-bold text-lg">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-white/20'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-white/40 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
