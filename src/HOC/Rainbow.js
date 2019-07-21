import React from 'react';


const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'yellow', 'pink', 'orange', 'blue', 'green'];
    const randomColors = colors[Math.floor((Math.random())*(colors.length))];
    const className = randomColors + '-text';

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}


export default Rainbow;