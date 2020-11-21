import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});
});





// test('renders the component', () => {
//   const component = shallow(<App />);
//   expect(component).toMatchSnapshot();
// });

// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';



// test('renders header-one', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Your application has been successfully deplyed with travis cicd.../i);

//   expect(linkElement).toBeInTheDocument();
// });

// test('renders header-one', () => {
//   const renderObj = render(<App />);
//   // console.log(renderObj);

//   const linkElement = renderObj.getByText(/Your application has been successfully deplyed with travis cicd.../i);
//   expect(linkElement).toBeInTheDocument();
 
//   const imageAlt= renderObj.getByAltText("image-one");
//   expect(imageAlt).toBeInTheDocument();
// });

// test('renders image', () => {
//   const renderObj = render(<App />);
//   // const linkElement = renderObj.getByText(/Your application has been successfully deplyed with travis cicd.../i);
//   // expect(linkElement).toBeInTheDocument();

//   const  imageAlt = renderObj.getByAltText(/image-one/);
//   expect(imageAlt).toBeInTheDocument();
// });