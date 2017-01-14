import React from 'react'
import cn from 'classnames'

export default ({id, type, name, checked, className, onChange, placeholder}) => {
    const fieldClass = cn('input-field', className)
    
    return (
        <div className={fieldClass}>
            <input id={id} type={type} name={name} checked={checked} readOnly={true}/>
            <label htmlFor={id} className={className} onClick={onChange}>{placeholder}</label>
        </div>
    )
}