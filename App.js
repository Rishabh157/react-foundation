const header = React.createElement('h1', { id: 'name', className: '' }, 'Hello React Bro :)');
console.log('header: ', header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);
