import { FC, ReactNode } from "react"



interface  templateProps {
children:ReactNode
}
const template: FC<templateProps>=({children})=>{
    return <div>{children}</div>
}
export default template