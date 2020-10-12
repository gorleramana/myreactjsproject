import React from 'react';

// function Greet(){
//     return <h1>Hello Ramana, This is your first functional component</h1>
// }

/**
 * you can do the above fucntion as below
 */
const Greet = (props) => {
return <h1>Hello {props.name}, This is your functional component</h1>
}
/**props are immutable, only handles the data that can't be modified/updated,
 * 
 * if the value render in the screen to be updated/modified, we should go for state
 */
export default Greet;
/**
 * 2nd way of exporting the component, in the below case this must be imported as Greet only, 
 * cant be renamed while importing
 */
//export const Greet = () => <h1>Hello Ramana</h1>
/**
 * Functional components are simple functions 
 * receiving props and returning delcarations
 * use these as much as possible
 * absence of this keyword in functional components is an advanatage (it's complex to use this keyword)
 * solutions without having to use state, maintaing state for each component is kind of complex
 * These are aslo called 'stateless/dumb/presentational', 
 * but from version 16.7 functional components also can use state means can be stateful
 */