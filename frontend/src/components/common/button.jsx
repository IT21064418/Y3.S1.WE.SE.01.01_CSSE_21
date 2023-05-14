import { twMerge } from 'tailwind-merge'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={twMerge(`${props.disabled ? 'bg-green-800' : 'bg-green-800 w-full hover:bg-green-700 text-white'} rounded-md flex items-center justify-center text-base font-normal transition duration-300`, props.className)}>
      {children}
    </button>
  )
}

export default Button
