import React from 'react';
import { shallow } from "enzyme";
import { GifsGridItem } from '../components/GifsGridItem';


describe('GifsGrid', () => { 

    test('se renderiza', () => { 

        const wrapper = shallow(<GifsGridItem />);

        expect( wrapper ).toMatchSnapshot();

    });

});