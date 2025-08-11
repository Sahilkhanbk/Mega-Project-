import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...Props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor='id' className=''> </label>}
            <select
                {...Props}
                id={id}
                ref={ref}
                className={`px-3 my-2 rounded-ls bg-white text-black outline-none focus:bg-gray-50
                    duration-200 border border-gray-200 w-full ${className}`}>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {options}
                    </option>
                ))}

            </select>
        </div>
    )
}

export default React.forwardRef(Select)
