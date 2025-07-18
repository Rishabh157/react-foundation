import React from "react";
import ReactDOM from 'react-dom/client';



const TitleHeading = () => <h1>This is going to be a title</h1>

// JSX Heading
const HeadingComponent = () => (
    <>
        <h1>Helllo World From JSX</h1>
        <TitleHeading />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)

{/* 
    <div id="parent">
        <div id="child">
            <h1>Hello I'm H1 tag</h1>
            <h2>Hello I'm H1 tag</h2>
        </div>
        <div id="child2">
            <h1>Hello I'm H1 tag</h1>
            <h2>Hello I'm H1 tag</h2>
        </div>
    </div>
*/}

// const parent = React.createElement('div',
//     { id: 'parent' },
//     [
//         React.createElement('div',
//             { id: 'child' },
//             [
//                 React.createElement('h1', {}, "Hello I'm H1 tag"),
//                 React.createElement('h2', {}, "Hello I'm H1 tag")
//             ]
//         ),
//         React.createElement('div',
//             { id: 'child2' },
//             [
//                 React.createElement('h1', {}, "Hello I'm H1 tag"),
//                 React.createElement('h2', {}, "Hello I'm H1 tag")
//             ]
//         )
//     ]
// )
// console.log('parent: ', parent);

// const header = React.createElement('h1', { id: 'name', className: '' }, 'Hello React Bro :)');
// console.log('header: ', header);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

// const user = {
//     name: 'rishabh',
//     greet: function () {
//         // console.log(this.name);
//         setTimeout(function () {
//             console.log(this.name);
//         }, 1000)
//     }
// }

// user.greet();
