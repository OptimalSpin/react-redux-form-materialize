import React, {Component} from 'react'
import classNames from 'classnames'
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

        const btnClassName = classNames('btn', {
            'disabled': props.disabled
        })

        const textInputClassName = classNames('file-path', 'validate', {
            [props.textClassName]: props.textClassName
        })

        const inputProps = omit(props, ['placeholder', 'innerState', 'textClassName', 'messages', 'buttonText', 'onFileClick'])

        return (
            <div className="file-field input-field">
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
