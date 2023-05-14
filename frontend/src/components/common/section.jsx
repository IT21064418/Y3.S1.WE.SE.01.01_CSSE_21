import { twMerge } from 'tailwind-merge'

const Section = ({ children, ...props }) => {
  return (
    <div {...props} className={twMerge('py-10 px-20  h-[40rem]', props.className)}>
      {children}
    </div>
  )
}

export default Section
