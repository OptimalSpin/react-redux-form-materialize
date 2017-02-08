import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import cn from 'classnames'
import moment from 'moment'

import {getErrors, getIconColor, getLabelClassName} from '../helpers/inputHelpers'

const defaultCalendarProps = {
    keyboardSupport: true,
    width: 350,
    height: 300
}

const calendarContainerDefaultStyle = {
    position: 'absolute',
    zIndex: -100,
    opacity: 0.01,
    display: 'block',
    transition: 'opacity 0.3s linear'
}

const defaultDateFormat = 'DD/MM/YYYY'

export default class DatePicker extends React.Component {
    static propTypes = {
        innerState: React.PropTypes.object.isRequired,
        iconPrefix: React.PropTypes.string,
        iconFactory: React.PropTypes.func,
        calendarProps: React.PropTypes.object
    };

    constructor(props) {
        super(props)
        this.state = {showCalendar: false, skipRender: true}        
    }

    componentDidMount() {
        window.addEventListener('click', this.onPageClick, false)
        this.setState({skipRender: false})
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onPageClick)
    }

    onPageClick = () => {
        this.setState({showCalendar: false})
    }

    onShow = () => {
        if(this.props.disabled){
            return
        }
        this.setState({showCalendar: true})
    }

    onSelect = (date) => {
        this.setState({showCalendar: false})
        this.props.onChange(date.toDate())
    }

    onCalendarClick = (evnt) => {
        evnt.stopPropagation()
    }

    render(){
        const props = this.props
        const {showCalendar, skipRender} = this.state

        const errors = getErrors(props)
        const iconColor =  getIconColor(props)            

        const fieldClassName = cn('input-field', props.className)

        const inputClassName = cn('datepicker', 'picker__input', 'validate', {
            'invalid': errors.length
        })

        const labelClassName = getLabelClassName(props, errors)

        const calendarProps = Object.assign({
            onSelect: this.onSelect
        }, defaultCalendarProps, props.calendarProps)

        const calerdarContainerStyle = Object.assign({
            left: props.iconPrefix ? '3rem' : '0'
        }, calendarContainerDefaultStyle, {
            top: props.showUp ? '-26rem' : '2.5rem'
        })

        if(showCalendar) {
            calerdarContainerStyle.opacity = 1
            calerdarContainerStyle.zIndex = 100
        }

        const inputValue = props.innerState.value
            ? moment(props.innerState.value).format(props.dateFormat || defaultDateFormat)
            : ''
        const disabled = props.disabled ? 'disabled' : false

        return (
            <div className={fieldClassName} onClick={this.onCalendarClick}>
                {
                    (() => {
                        if(props.iconPrefix){
                            const PrefixIcon = props.iconFactory(props.iconPrefix)
                            return <PrefixIcon className="prefix" color={iconColor} onClick={this.onShow}/>
                        }
                    })()
                }
                <input type="text" value={inputValue} readOnly={true} className={inputClassName} disabled={disabled} onClick={this.onShow}/>
                <label htmlFor={props.id} className={labelClassName} data-error={errors}>{props.placeholder}</label>
                <div style={calerdarContainerStyle} className="collapsible">
                    {skipRender && <InfiniteCalendar {...calendarProps} selectedDate={props.innerState.value}/>}
                </div>
            </div>
        )
    }
}

