import React from 'react'

type SectionHeadingProps ={
    children: React.ReactNode
}
export default function SectionHeading({
    children}: SectionHeadingProps) {
    return (
        <h2 className="text-3xl mb-10 font-semibold capitalize text-center dark:text-slate-50">{children}</h2>
    )
}
