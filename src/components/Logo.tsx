import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://res.cloudinary.com/dcd81ymqx/image/upload/v1755466311/leilaolovers_preta_ok6axy.png"
        alt="LeilãoLovers Logo"
        className="h-[62px] w-auto"
      />
      <span className="font-semibold text-gray-800 text-2xl">
        leilaolovers.com.br
      </span>
    </div>
  );
};

export default Logo;
