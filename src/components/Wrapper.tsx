import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Wrapper = ({ children }: Props) => {
    return (
        <main className="bg-white max-w-full md:w-[725px] h-full p-6 rounded-xl">
            {children}
        </main>
    )
}

export default Wrapper
