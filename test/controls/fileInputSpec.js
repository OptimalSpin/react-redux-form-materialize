import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import FileInput from '../../src/controls/fileInput.js'

chai.use(chaiEnzyme())
const {expect} = chai

function setupNew(){
    const props = {
        id: '1', 
        buttonText: 'Click',
        innerState: {
            value: [
                {
                    name: 'file.png'
                }
            ]
        },
        placeholder: 'Input'
    }

    const enzymeWrapper = shallow(<FileInput {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('FileInput', () => {
    it('should render itself', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper).to.have.length(1)
    })

    it('should populate inner text input', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper.find('input[type="text"]')).to.have.value('file.png')
    })
})