import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Lens from '../../src/shaded-lens/Lens';

describe('Image Lens', () => {
    it('applies computed style', () => {
        const expected = 'width:auto;height:auto;top:auto;right:auto;bottom:auto;left:auto;display:block;position:absolute;opacity:0;transition:opacity 0ms ease-in';

        const c = render(<Lens />);

        expect(c.attr('style')).to.equal(expected);
    });

    it('applies supplied style', () => {
        const expected = 'width:1px;height:2px;top:3px;right:4px;bottom:5px;left:6px;display:inline-block;background-color:#fff;cursor:pointer;'

        const c = render(
            <Lens {...{
                style: {
                    width: '1px',
                    height: '2px',
                    top: '3px',
                    right: '4px',
                    bottom: '5px',
                    left: '6px',
                    display: 'inline-block',
                    backgroundColor: '#fff',
                    cursor: 'pointer'
                }
            }}/>
        );

        expect(c.attr('style').startsWith(expected)).to.be.true;
    });

    it('applies a value of 0 to CSS opacity property when isActive is unset', () => {
        const c = render(<Lens />);

        expect(c.css('opacity')).to.equal('0');
    });

    it('applies a value of 1 to CSS opacity property when isActive is set', () => {
        const c = render(<Lens isActive />);

        expect(c.css('opacity')).to.equal('1');
    });

    it('applies default CSS opacity transition of 0 milliseconds', () => {
        const c = render(<Lens />);

        expect(c.css('transition')).to.equal('opacity 0ms ease-in');
    });

    it('applies supplied CSS opacity transition', () => {
        const c = render(<Lens fadeDurationInMs={ 100 } />);

        expect(c.css('transition')).to.equal('opacity 100ms ease-in');
    });
});
