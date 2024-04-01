import './App.css';

const isLoggedIn = true;

const game = {
  title: 'Undertale',
  author: 'Toby Fox',
  published: '2015',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Undertale_cover.jpg',
  width: '264',
  height: '378'
};

const games = [
  { id: 1, title: 'Super Smash Bros. Ultimate', genre: 'Fighting', isOwned: true },
  { id: 2, title: 'The Binding of Isaac', genre: 'Rougelike', isOwned: true },
  { id: 3, title: 'Baldur\'s Gate 3', genre: 'RPG', isOwned: false },
];

function GameRack() {
  const listGames = games.map(game =>
    <li
      key={game.id}
      style={{
        color: game.isOwned ? 'green' : 'red',
        listStyle: 'none'
      }}
    >
      <strong>Game: </strong>{game.title} <strong>Genre: </strong> {game.genre}
    </li>
  );
  return (
    <div>
      <h2>Do I own these games?</h2>
      <ul>{listGames}</ul>
    </div>
  )
}

function FavoriteGame() {
  return (
    <div>
      <h1>This is my favourite game:</h1>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{game.title} ({game.published})</h2>
      <p>{game.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {game.image &&
      <img
        className="gameCover"
        src={game.image}
        alt={game.title + ' cover'}
        style={{
          width: game.width,
          height: game.height
        }}
      />
      }
    </div>
  );
}

// component
function MagicButton() {
  function doMagic() {
    alert('Magic!');
  }
  return (
    <div>
      <h3>This button does magic.</h3>
      <button onClick={doMagic}>Click Me!</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FavoriteGame />
        <GameRack />
        {isLoggedIn ? (
          <MagicButton />
        ) : (
          <p>Poof!</p>
        )}
      </header>

      
    </div>
  );
}

export default App;
