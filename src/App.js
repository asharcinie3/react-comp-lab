import './App.css';

/**const magazines = [
  {id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true},
  {id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true},
  {id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false},
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style = {{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width:'264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
        className='bookCover'
        src= {book.image}
        alt={book.title + ' cover'}
        style = {{
          width: book.width,
          height: book.height
        }}
      />
    </div>
  );
}

function MagicButton() {
  return (
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}*/

const books = [
  {id: 1, title: 'Blood of elves', author: 'Andrzej Sapkowski', published: '1994', genre:'fantasy', image:'https://www.hachettebookgroup.com/wp-content/uploads/2021/12/9780316392099.jpg?fit=1727%2C2600', isAvailable: true, width:'250'},
  {id: 2, title: 'The Last Wish', author: 'Andrzej Sapkowski', published: '1993', genre:'fantasy', image:'https://m.media-amazon.com/images/I/81KYCaPYhRS._AC_UF1000,1000_QL80_.jpg', isAvailable: false, width:'250'},
  {id: 3, title: 'The Laws of Human Nature', author: 'Robert Greene', published: '2018', genre:'self-help', image:'https://pictures.abebooks.com/isbn/9780525561804-us.jpg', isAvailable: true, width:'250'},
  {id: 4, title: 'Twilight', author: 'Stephenie Meyer',  published: '2005', genre:'romance', image:'https://m.media-amazon.com/images/I/615ZIxEDozL._AC_UF1000,1000_QL80_.jpg', isAvailable: true, width:'250'},
];

function Bookshelf() {
  const listBooks = books.map(book =>
    <li
      key={book.id}
      style = {{
        color: book.isAvailable ? 'green' : 'red',
        listStyleType: 'none'
      }}
    >
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
        className='bookCover'
        src= {book.image}
        alt={book.title + ' cover'}
        style = {{
          width: 500
        }}
      />
    </li>
  );
  return (
    <ul>{listBooks}</ul>
  )
}

function SearchButton() {
  return (
    <div>
      <form action="https://www.google.com/search?q=libraries+near+me&oq=libraries+near+me&aqs=chrome..69i57j0i20i263i512j0i512l8.3107j1j9&sourceid=chrome&ie=UTF-8" method="get" target="_blank">
        <button type="submit" width='250' height='150'>Search other libraries</button>
      </form>
    </div>
  );
}

function Title() {
  return (
    <h1>Ash's Library</h1>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Bookshelf />
        <SearchButton />
      </header>
    </div>
  );
}

export default App;