import React from 'react'

// Higher Order Component to Randomize the color inside the component
const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomIndex = Math.floor(Math.random() * 5);
    const randomColor = colors[randomIndex];

    const className = randomColor + '-text';

    return(props)=> {
      return(
        <div className={className}>
          <WrappedComponent {...props}/>
        </div>
      )
    }
}

export default Rainbow;