import React from 'react'

interface ButtonProps {
 text: string,
 type: 'button' | 'submit' | 'reset';
handleClick?: () => void;
}
const CustomButton = (props: ButtonProps) => {
  return (
    <button type={props.type} className="w-[16rem] mt-8 cursor-pointer shadow-[inset_0_0_0_2px_#156165] px-8 py-3 rounded-full tracking-widest uppercase  bg-transparent hover:bg-[#156165] hover:text-white transition duration-200 text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl" onClick={props.handleClick}>
  {props.text}
</button>
  )
}

export default CustomButton