import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/** In-app scheduling calendar (no third party). User picks date and time slot. */
function ScheduleActivation() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Example time slots for a day (dummy data)
  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedSlot) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Schedule Your Activation Call
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Choose a date and time that works for you. We’ll send a confirmation to your email.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Select date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-2">
                Select time
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                      selectedSlot === slot
                        ? 'bg-teal-500 text-white border-teal-500'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-teal-400'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={!selectedDate || !selectedSlot}
              className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Confirm activation call
            </button>
          </form>
        ) : (
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <p className="text-teal-800 font-semibold mb-1">Request received</p>
            <p className="text-gray-700 text-sm">
              Your activation call is requested for <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong>.
              We’ll confirm via email shortly.
            </p>
          </div>
        )}

        <p className="text-center mt-8">
          <Link to="/exact-quote-results" className="text-teal-600 hover:text-teal-700 font-medium">
            ← Back to quote results
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ScheduleActivation;
