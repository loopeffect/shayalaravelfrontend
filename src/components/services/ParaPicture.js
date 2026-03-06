import React from 'react'
import parapic from '../../images/parapic.png'

function ParaPicture() {
  return (
    <section 
      className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to right, #0a1628, #0d1b2a, #0f1e29)',
        minHeight: '400px'
      }}
    >
      {/* Circular glow effect */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(25, 179, 154, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <p className="text-white text-lg md:text-xl leading-relaxed" style={{ fontSize: '16pt', lineHeight: '1.8' }}>
            You don't need a sales team, an assistant, or AI expertise. 
            SCIVO finds the right people, starts conversations, responds 
            instantly to inbound call inquiries, and books meetings 
            automatically so you can focus on closing deals.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-md">
            <img 
              src={parapic}
              alt="AI Sales Assistant" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParaPicture