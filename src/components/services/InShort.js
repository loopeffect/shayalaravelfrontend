import React from "react";

function InShort() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        <div 
          className="rounded-3xl text-white text-center px-10 py-14 shadow-2xl"
          style={{
            background: 'linear-gradient(to right, #19b39a, #0d7866)'
          }}
        >

          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            In short:
          </h3>

          <p className="text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            You focus on selling. SCIVO handles everything needed to get the right people into real conversations with you.
          </p>

        </div>

      </div>
    </section>
  );
}

export default InShort;
