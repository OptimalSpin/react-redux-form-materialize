import {expect} from 'chai'

import omit  from '../../src/helpers/omit'

describe('Omit', () => {
    it('should return an object', () => {
        const obj = {
            'one': '1',
            'two': '2'
        }

        const result = omit(obj, 'one')
        expect(result).to.exist
    })

    it('should remove omitted properties from the result', () => {
        const obj = {
            'one': '1',
            'two': '2'
        }

        const result = omit(obj, 'one')
        expect(result).to.deep.equal({
            'two': '2'
        })
    })
})