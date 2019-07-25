import React from 'react';

// const Greet = (props) => {
//     return(
//         <h1>Greet here {props.name} {props.heroName}</h1>
//     );
// }
const Greet = ({name, heroName}) => {
    return(
        <h1>Greet here {name} {heroName}</h1>
    );
}

export default Greet;