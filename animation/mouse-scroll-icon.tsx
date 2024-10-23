import React from 'react'

const MouseScroll = () => {
  return (
    <div className="relative w-[50px] h-[90px] border-4 border-gray-800 rounded-full">
      {/* Scroll Wheel */}
      <div className="scroll-wheel absolute w-[12px] h-[12px] bg-gray-800 rounded-full"></div>
    </div>
  );
}

export default MouseScroll