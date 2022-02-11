import 'mocha';
import {expect} from 'chai';
import './index';

describe('String extension functions', () => {
    before(() => {
    });
    describe('"123".toInt', () => {
        const testList = {
            '123': 123,
            '123ddd': 123,
            '123.456': 123
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to ${dst}`, () => {
                expect(src.toInt()).to.be.a('number');
                expect(src.toInt()).to.be.equal(dst);
            })
        );
    });
});
