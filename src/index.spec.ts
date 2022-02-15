import 'mocha';
import {expect} from 'chai';
import './index';

const now = Date.now;
const timestamp = 1644568675402;

describe('Date get*() functions', () => {
    before(() => {
        Date.now = () => timestamp;
    });
    after(() => {
        Date.now = now;
    });
    describe('(new Date()).getyyyyMMddHHmmssSSS()', () => {
        const testList = {
            [timestamp]: '2022-02-11 09:37:55.402',
        };

        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getyyyyMMddHHmmssSSS()).to.be.a('string');
                expect(date.getyyyyMMddHHmmssSSS()).to.be.equal(dst);
            })
        );
    });
    describe('(new Date()).getyyyyMMddHHmmss()', () => {
        const testList = {
            [timestamp]: '2022-02-11 09:37:55',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getyyyyMMddHHmmss()).to.be.a('string');
                expect(date.getyyyyMMddHHmmss()).to.be.equal(dst);
            })
        );
    });
    describe('(new Date()).getyyyyMMdd()', () => {
        const testList = {
            [timestamp]: '2022-02-11',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));
                expect(date.getyyyyMMdd()).to.be.a('string');
                expect(date.getyyyyMMdd()).to.be.equal(dst);
            })
        );
    });
    describe('(new Date()).getHHmmssSSS()', () => {
        const testList = {
            [timestamp]: '09:37:55.402',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getHHmmssSSS()).to.be.a('string');
                expect(date.getHHmmssSSS()).to.be.equal(dst);
            })
        );
    });
    describe('(new Date()).getHHmmss()', () => {
        const testList = {
            [timestamp]: '09:37:55',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getHHmmss()).to.be.a('string');
                expect(date.getHHmmss()).to.be.equal(dst);
            })
        );
    });
    describe('(new Date()).getHHmm()', () => {
        const testList = {
            [timestamp]: '09:37',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                const date = new Date(parseInt(src, 10));

                expect(date.getHHmm()).to.be.a('string');
                expect(date.getHHmm()).to.be.equal(dst);
            })
        );
    });
    describe('Date.nowyyyyMMddHHmmssSSS()', () => {
        const testList = {
            [timestamp]: '2022-02-11 09:37:55.402',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                // const date = new Date(parseInt(src, 10));

                expect(Date.nowyyyyMMddHHmmssSSS()).to.be.a('string');
                expect(Date.nowyyyyMMddHHmmssSSS()).to.be.equal(dst);
            })
        );
    });
    describe('Date.nowyyyyMMddHHmmss()', () => {
        const testList = {
            [timestamp]: '2022-02-11 09:37:55',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                expect(Date.nowyyyyMMddHHmmss()).to.be.a('string');
                expect(Date.nowyyyyMMddHHmmss()).to.be.equal(dst);
            })
        );
    });

    describe('Date.nowyyyyMMdd()', () => {
        const testList = {
            [timestamp]: '2022-02-11',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                expect(Date.nowyyyyMMdd()).to.be.a('string');
                expect(Date.nowyyyyMMdd()).to.be.equal(dst);
            })
        );
    });
    describe('Date.nowHHmmssSSS()', () => {
        const testList = {
            [timestamp]: '09:37:55.402',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                expect(Date.nowHHmmssSSS()).to.be.a('string');
                expect(Date.nowHHmmssSSS()).to.be.equal(dst);
            })
        );
    });
    describe('Date.nowHHmmss()', () => {
        const testList = {
            [timestamp]: '09:37:55',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                expect(Date.nowHHmmss()).to.be.a('string');
                expect(Date.nowHHmmss()).to.be.equal(dst);
            })
        );
    });
    describe('Date.nowHHmm()', () => {
        const testList = {
            [timestamp]: '09:37',
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert ${src} to ${dst}`, () => {
                expect(Date.nowHHmm()).to.be.a('string');
                expect(Date.nowHHmm()).to.be.equal(dst);
            })
        );
    });
});
