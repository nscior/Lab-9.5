// We can import assets and React functionality up here
// Oh, and I'm a JavaScript comment. You'll see
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Fake login state to test conditionals. You wouldn't do this in real life :)
const isLoggedIn = true;

// Working with data
// - Here we define a single object called book'
// - The book object has properties (title, author, etc.)
// - Each property has a name (title) and value (A Farewell to Arms)
// - We're "hard coding" the data here, but this could also come from a database or API
const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

// - Here we have an array of objects
// - We might see this when we have multiple rows of results from our database or API
const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

// React Components
// - React applications are built out of components
// - Components are JavaScript functions that return markup (JSX)
// - Components are UI elements that have their own logic and appearance
// - React Components always start with a capital letter
// - In this example, we could use the JSX markup <Bookshelf /> to display our component
function Bookshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

// - This component displays the list of magazines
// - Because we're reading and displaying multiple objects, we need to use the .map method
// - magazines.map _maps_ each array item to the zine object until there are no more objects to map (it loops)
// - We then display properties from zine object in each iteration
function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'green'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

// Hooks
// - Functions starting with use are called Hooks
// - useState is a built-in Hook provided by React
// - You can find other built-in Hooks in the API reference
// - You can also write your own Hooks by combining the existing ones
// - Hooks are more restrictive than other functions
// - You can only call Hooks at the top of your components (or other Hooks)
// - If you want to use useState in a condition or a loop, extract a new component and put it there

// Respond to events
function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
    alert('Are you not entertained?');
  }

  return (
    <button onClick={doMagic}>
      Magic {count} times
    </button>
  );
}

// This is the main component in the file
// It's called below using the 'export default' keywords
function App() {
  return (
    // Use className for CSS and HTML classes
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        {isLoggedIn ? (
          // React components start with a capital letter to distinguish them from HTML elements
          <MagicButton />
        ) : (
          <p>Please login.</p>
        )}
        </div>
        
      </header>
    </div>
  );
}

// The export default keywords specifiy the main component in the file
export default App;
