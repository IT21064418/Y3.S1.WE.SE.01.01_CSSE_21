import { twMerge } from 'tailwind-merge'

const ButtonLink = ({ children, ...props }) => {
  return (
    <a {...props} className={twMerge(`${props.disabled ? 'bg-green-800' : 'bg-green-800 hover:bg-green-700 text-white '} rounded-md px-5 py-3 flex items-center justify-center text-base  transition duration-300`, props.className)}>
      {children}
    </a>
  )
}

export default ButtonLink
