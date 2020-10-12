import React from 'react'

const Hello = () => {
    // return (
    //     <div><h1>Hello Ramana, This is JSX</h1></div>
    // )

    return React.createElement('div', {id:'hello'},React.createElement('h1', null, "Hello Ramana, This is without JSX"))
}

export default Hello