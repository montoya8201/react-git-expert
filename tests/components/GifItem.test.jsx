const { render } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe('Pruebas en <GifItem.jsx/>', () => { 
    
    const title ='Saitama';
    const url='https://one-punch.com/saitama.jpg';
    
    test('Debe de hacer match con el snapshot', () => { 

        const { container }= render( <GifItem title={ title } url= { url }/>);
        expect( container ).toMatchSnapshot();

     });
 });