
{/* <div id="parent">
    <div id="child">
        <h1>Hello I'm H1 tag</h1>
    </div>
</div>
 */}


const parent = React.createElement('div',
    { id: 'parent' },
    React.createElement('div',
        { id: 'child' },
        React.createElement('h1',
            {}, "Hello I'm H1 tag"))
)
console.log('parent: ', parent);

const header = React.createElement('h1', { id: 'name', className: '' }, 'Hello React Bro :)');
console.log('header: ', header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
