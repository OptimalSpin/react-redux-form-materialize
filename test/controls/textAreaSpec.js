import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import TextArea from '../../src/controls/textArea.jsx'

chai.use(chaiEnzyme())
const {expect} = chai

function setupNew(){
    const props = {
        id: '1',
        innerState: {},
        placeholder: 'Input'
    }

    const enzymeWrapper = shallow(<TextArea {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

function setupTouched(){
    const props = {
        id: '1',
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

    const enzymeWrapper = shallow(<TextArea {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('TextArea', () => {
    it('should render itself', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper).to.have.length(1)
    })

    it('should add data-error attribute for error messages', () => {
        const {enzymeWrapper} = setupTouched()
        expect(enzymeWrapper.find('label')).to.have.data('error', 'Required!')
    })
})