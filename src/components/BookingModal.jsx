import React, { useState, useEffect } from 'react';

function BookingModal({ isOpen, onClose, tripTitle }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    destination: 'Manali',
    itinerary: 'Adventure Pack (4D/3N)',
    date: '',
    passengers: '1',
    name: '',
    phone: ''
  });

  const destinations = [
    { id: 'manali', name: 'Manali', status: 'active' },
    { id: 'spiti', name: 'Spiti Valley', status: 'soon' },
    { id: 'ladakh', name: 'Ladakh', status: 'soon' },
    { id: 'kerala', name: 'Kerala', status: 'soon' },
  ];

  const itineraries = [
    { id: 'adventure', name: 'Adventure Pack (4D/3N)', price: '₹12,999', icon: '🏔️' },
    { id: 'leisure', name: 'Leisure & Luxury (5D/4N)', price: '₹18,999', icon: '🏨' },
    { id: 'backpack', name: 'Backpacker Special (6D/5N)', price: '₹9,999', icon: '🎒' },
  ];

  const febSlots = [
    { id: 'feb5', label: 'Feb 5 - Feb 10', availability: 'High' },
    { id: 'feb12', label: 'Feb 12 - Feb 17', availability: 'Filling Fast' },
    { id: 'feb19', label: 'Feb 19 - Feb 24', availability: 'Sold Out', disabled: true },
    { id: 'feb26', label: 'Feb 26 - Mar 3', availability: 'Medium' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Inquiry:', formData);
    alert('🎉 Adventure Awaits! Our travel expert will contact you on WhatsApp within 15 minutes.');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 max-h-[95vh] overflow-y-auto custom-scrollbar">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-400 hover:text-white transition-all hover:rotate-90 duration-300 z-10 p-2 bg-white/5 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-10 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Booking Now Open
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-[0.9]">
              START YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 italic">JOURNEY</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-md">
              Fill the form below to unlock the detailed itinerary and exclusive offers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Destination Selection */}
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">1. Where to go?</label>
                <span className="text-[10px] font-bold text-red-500 italic">* Manali is currently active</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    disabled={dest.status === 'soon'}
                    onClick={() => setFormData(prev => ({ ...prev, destination: dest.name }))}
                    className={`relative p-5 rounded-2xl border transition-all text-center group ${
                      formData.destination === dest.name
                        ? 'bg-red-600 border-red-500 text-white shadow-[0_10px_20px_rgba(220,38,38,0.3)]'
                        : dest.status === 'soon'
                        ? 'bg-white/5 border-white/5 opacity-40 cursor-not-allowed'
                        : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20'
                    }`}
                  >
                    <span className="block font-black text-xs uppercase tracking-tight">{dest.name}</span>
                    {dest.status === 'soon' && (
                      <span className="text-[8px] uppercase tracking-tighter text-red-400/80 font-bold mt-1 block">SOON</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Itinerary Selection */}
            <div className="space-y-5">
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">2. Select Your Vibe</label>
              <div className="grid grid-cols-1 gap-3">
                {itineraries.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, itinerary: it.name }))}
                    className={`group w-full p-5 rounded-2xl border transition-all flex justify-between items-center ${
                      formData.itinerary === it.name
                        ? 'bg-white/10 border-red-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{it.icon}</span>
                      <div className="text-left">
                        <span className="block font-black text-sm uppercase tracking-tight">{it.name}</span>
                        <span className="text-[10px] text-gray-500 font-medium">Customizable as per your needs</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`block font-black ${formData.itinerary === it.name ? 'text-red-500' : 'text-gray-500'}`}>
                        {it.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Number of People */}
              <div className="space-y-5">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">3. How many Explorers?</label>
                <div className="relative">
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:border-red-500 transition-all appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                      <option key={num} value={num} className="bg-[#0a0a0a] text-white py-4">{num} {num === 1 ? 'Explorer' : 'Explorers'}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-5">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">4. When in February?</label>
                <div className="relative">
                  <select
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:border-red-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0a0a0a]">Select Batch</option>
                    {febSlots.map(slot => (
                      <option 
                        key={slot.id} 
                        value={slot.label} 
                        disabled={slot.disabled}
                        className={`bg-[#0a0a0a] ${slot.disabled ? 'text-gray-600' : 'text-white'}`}
                      >
                        {slot.label} {slot.disabled ? '(Sold Out)' : `(${slot.availability})`}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-8">
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">5. Final Details</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-transparent focus:outline-none focus:border-red-500 transition-all pt-7"
                  />
                  <label className="absolute left-6 top-3 text-[10px] font-black text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-[10px] pointer-events-none">Full Name</label>
                </div>
                <div className="relative group">
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-transparent focus:outline-none focus:border-red-500 transition-all pt-7"
                  />
                  <label className="absolute left-6 top-3 text-[10px] font-black text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-[10px] pointer-events-none">WhatsApp Number</label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full py-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-xl transition-all active:scale-[0.98] shadow-[0_20px_40px_rgba(225,29,72,0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                SEND INQUIRY
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
}

export default BookingModal;
