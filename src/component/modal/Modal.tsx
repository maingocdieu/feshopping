import React, { useState } from "react"
export type ModalProps = {
    element: React.ReactNode
} 
export const Modal = (props: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className={open? "": ""}>

        </div>
    )
}