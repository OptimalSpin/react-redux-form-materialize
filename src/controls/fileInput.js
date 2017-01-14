import React, {Component} from 'react'
import cn from 'classnames'
import omit from '../helpers/omit'

export default class FileInput extends React.Component {
    static propTypes = {
        innerState: React.PropTypes.object.isRequired
    };

    onFileClick = (event) => {
        return this.props.onChange(null)
    };

    render(){
        const {props} = this

        const inputValue =  (props.innerState.value && props.innerState.value.length)
            ? props.innerState.value.reduce((prevVal, curVal) => prevVal.concat(curVal.name, ', '), [])
            : []

        if(inputValue.length) {
            inputValue.pop()
        }
        
        const fieldClass = cn('file-field', 'input-field', props.className)

        const btnClassName = cn('btn', {
            'disabled': props.disabled
        })       

        const textInputClassName = cn('file-path', 'validate', {
            [props.textClassName]: props.textClassName
        })

        const inputProps = omit(props, ['placeholder', 'innerState', 'textClassName', 'messages', 'buttonText', 'onFileClick', 'className'])

        return (
            <div className={fieldClass}>
                <div className={btnClassName}>
                    <span>{props.buttonText}</span>
                    <input {...inputProps} onClick={this.onFileClick} type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input disabled={props.disabled} value={inputValue.join('')} className={textInputClassName} type="text" readOnly={true} placeholder={props.placeholder}/>
                </div>
            </div>
        );
    }
}
