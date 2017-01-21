import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import DatePicker from '../../src/controls/datePicker.js'

chai.use(chaiEnzyme())
const {expect} = chai

const PrefixIcon = () => (<img></img>)
const PrefixIconFactory = (iconPrefix) => {
    return PrefixIcon
}

function setupNew(){
    const props = {
        id: '1',
        type: 'text',
        innerState: {},
        placeholder: 'Input'
    }

    const enzymeWrapper = shallow(<DatePicker {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

function setupIconPrefix(){
    const props = {
        id: '1',
        type: 'text',
        innerState: {},
        placeholder: 'Input',
        iconPrefix: 'phone',
        iconFactory: PrefixIconFactory
    }

    const enzymeWrapper = shallow(<DatePicker {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

function setupTouched(){
    const props = {
        id: '1',
        type: 'text',
        innerState: {
            touched: true,
            errors: {
                required: 'requiredMes'
            }
        },
        messages: {
            'requiredMes': 'Required!'
        },
        placeholder: 'Input'
    }

    const enzymeWrapper = shallow(<DatePicker {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('DatePicker', () => {
    it('should render itself', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper).to.have.length(1)
    })

    it('should render prefix icon when it is set', () => {
        const {enzymeWrapper} = setupIconPrefix()
        expect(enzymeWrapper.find('[className="input-field"]').children()).to.have.length(4)
    })

    it('should add data-error attribute for error messages', () => {
        const {enzymeWrapper} = setupTouched()
        expect(enzymeWrapper.find('label')).to.have.data('error', 'Required!')
    })
})