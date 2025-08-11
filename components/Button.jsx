import React from 'react'


function Button(
    { Children, type = "text", bgColor = "bg-blue-500", textColor = "text-White", className = "", ...props }) {
    return (
        <div>
            <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor} `} {...props}> 
                {Children}
            </button>
        </div>
    )
}

export default Button

