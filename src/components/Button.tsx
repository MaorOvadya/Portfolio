import { ReactNode } from "react"

interface Props {
    children: ReactNode
    props: unknown
}

function Button(props:Props) {
  return (
    <div className=" flex justify-center sm:justify-start items-center w-full h-fit pt-[5rem]">
        {props.children}
    </div>
  )
}

export default Button