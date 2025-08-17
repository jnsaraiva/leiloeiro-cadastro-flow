import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-4 rounded-lg shadow-lg mb-8 flex items-center justify-center min-h-[120px] md:min-h-[180px] lg:min-h-[240px] overflow-hidden relative">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="relative z-10 text-center">
        {/* Removed text content as requested */}
        <img
          src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Auction banner background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
