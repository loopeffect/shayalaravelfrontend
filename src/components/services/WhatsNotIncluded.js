import React from "react";
import { X } from "lucide-react";

function WhatsNotIncluded() {
  return (
    <section className="py-20 bg-[#f5f6f8]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-red-200 bg-[#faf6f6] p-10">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-10 h-10 rounded-full bg-red-100 
                            flex items-center justify-center">
              <X className="text-red-500" size={18} />
            </div>

            <h3 className="text-xl font-semibold text-gray-900" style={{ fontSize: '18pt' }}>
              What's not included:
            </h3>

          </div>

          {/* Pills */}
          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Closing the sale",
              "Running paid ads",
              "Heavy custom CRM builds",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 
                           border border-red-200 
                           bg-white 
                           rounded-xl 
                           px-6 py-4"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <p className="text-gray-700 font-medium" style={{ fontSize: '14pt' }}>
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhatsNotIncluded;
