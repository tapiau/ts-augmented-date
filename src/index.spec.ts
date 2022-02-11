import 'mocha';
import {expect} from 'chai';
import './index';

describe('String extension functions', () => {
    before(() => {
    });
    describe('Date().getyyyyMMdd()', () => {
        const testList = {
            1644568675402: '2022-02-11',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));
                expect(date.getyyyyMMdd()).to.be.a('string');
                expect(date.getyyyyMMdd()).to.be.equal(dst);
            })
        );
    });
    describe('Date().getyyyyMMddHHmmss()', () => {
        const testList = {
            1644568675402: '2022-02-11 09:37:55',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getyyyyMMddHHmmss()).to.be.a('string');
                expect(date.getyyyyMMddHHmmss()).to.be.equal(dst);
            })
        );
    });
    describe('Date().getyyyyMMddHHmmssSSS()', () => {
        const testList = {
            1644568675402: '2022-02-11 09:37:55.402',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getyyyyMMddHHmmssSSS()).to.be.a('string');
                expect(date.getyyyyMMddHHmmssSSS()).to.be.equal(dst);
            })
        );
    });
    describe('Date().getHHmmss()', () => {
        const testList = {
            1644568675402: '09:37:55',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getHHmmss()).to.be.a('string');
                expect(date.getHHmmss()).to.be.equal(dst);
            })
        );
    });
    describe('Date().getHHmm()', () => {
        const testList = {
            1644568675402: '09:37',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getHHmm()).to.be.a('string');
                expect(date.getHHmm()).to.be.equal(dst);
            })
        );
    });
    describe('Date().getHHmmssSSS()', () => {
        const testList = {
            1644568675402: '09:37:55.402',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getHHmmssSSS()).to.be.a('string');
                expect(date.getHHmmssSSS()).to.be.equal(dst);
            })
        );
    });
});
