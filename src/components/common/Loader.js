import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
            style={{
              borderTopColor: '#19b39a',
              borderRightColor: '#19b39a',
              animationDuration: '1s'
            }}
          />
          <div 
            className="absolute inset-2 rounded-full border-4 border-transparent animate-spin"
            style={{
              borderBottomColor: '#0d7866',
              borderLeftColor: '#0d7866',
              animationDuration: '1.5s',
              animationDirection: 'reverse'
            }}
          />
        </div>

        {/* Logo or text */}
       
      </div>
    </div>
  );
};

export default Loader;
