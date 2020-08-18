import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatIndex from '../CatIndex.js';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

// This tests that the page compiles.
it('CatIndex renders without crashing', () => {
    const h2 = document.createElement('h2')
    ReactDOM.render(<CatIndex />, h2)
  })
  
// This tests that our content is rendering.
  it('CatIndex renders content', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('h2').text()).toEqual('Meet the Cats!')
  })

// This tests that state is working.
// it('CatIndex can access state', () => {
//   const catIndex = shallow(<CatIndex />)
//   expect(catIndex.find('h4').text()).toEqual('Mittens')
// })

