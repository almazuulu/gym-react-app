import React from 'react'

export default function ExcersizeCard() {
    return (
        <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'></h2>
                <p className='text-sm text-slate-400 capitalize'></p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
                <p className='capitalize'></p>
            </div>

            <div className='flex flex-col bg-slate-950 rounded gap-2 '>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
            </div>
        </div>
    )
}
