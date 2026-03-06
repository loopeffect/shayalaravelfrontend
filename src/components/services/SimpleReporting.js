import React from "react";
import { Mail, Calendar, TrendingUp } from "lucide-react";

function SimpleReporting() {
  return (
    <section className="py-20 bg-[#f5f6f8]">

      <div className="max-w-6xl mx-auto px-6">

        <div 
          className="rounded-3xl p-12 shadow-2xl text-white"
          style={{
            background: 'linear-gradient(to right, #0f1f3d, #112d4e, #0d3a3f)'
          }}
        >

          {/* Header */}
          <div className="flex items-start gap-6 mb-12">

            {/* Number Badge */}
            <div className="w-14 h-14 rounded-xl bg-[#19a38c] 
                            flex items-center justify-center 
                            text-white font-semibold text-lg shadow-lg">
              5
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Simple reporting
              </h3>

              <p className="text-gray-300">
                You receive a clear summary showing:
              </p>
            </div>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div 
              className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
              style={{
                background: 'rgba(17, 45, 78, 0.4)'
              }}
            >

              <Mail className="text-[#19a38c] mb-4" size={26} />

              <p className="font-medium text-gray-200">
                Opens and replies
              </p>
            </div>

            {/* Card 2 */}
            <div 
              className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
              style={{
                background: 'rgba(17, 45, 78, 0.4)'
              }}
            >

              <Calendar className="text-[#19a38c] mb-4" size={26} />

              <p className="font-medium text-gray-200">
                Meetings booked
              </p>
            </div>

            {/* Card 3 */}
            <div 
              className="backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
              style={{
                background: 'rgba(13, 58, 63, 0.4)'
              }}
            >

              <TrendingUp className="text-[#19a38c] mb-4" size={26} />

              <p className="font-medium text-gray-200">
                Which subject lines performed best
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SimpleReporting;
