import React from 'react'
import cn from 'classnames'

const switchStyle = {
    height: '3rem'
}

const SwitcherInput = ({id, name, className, checked, onChange, offLabel, onLabel}) => {
    const inputClass = cn('input-field', className)

    return (
        <div className={inputClass}>
            <div className="switch" style={switchStyle}>
                <label>
                    {offLabel}
                    <input id={id} type="checkbox" name={name} checked={checked} readOnly={true}/>
                    <span htmlFor={id} className="lever" onClick={onChange}/>
                    {onLabel}
                </label>
            </div>
        </div>
    )
}

SwitcherInput.propTypes = {
    onLabel: React.PropTypes.string,
    offLabel: React.PropTypes.string    
}

export default SwitcherInput