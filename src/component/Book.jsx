import { useState } from 'react';
import './book.css';

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const[apiKey,setApiKey]=useState("AIzaSyBFjCpbi0TrqN-l_rlvASJHPeeFppctDF8")

  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setResult(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
  
    <div>

<div class="custom-shape-divider-bottom-1711553941">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

<img className ="p1" src="./pucture/logo.png" alt="" />

      <form onSubmit={handleSubmit}>
        <div className='wrapper'>
          <div className='text-box'>
          <img  className='imgs' src="./pucture/puc2.png" alt="" />
          <h1>Welcome to the world of books</h1>
      <h3>Go ahead and search for your favorite book</h3>
     <input placeholder="Search..." class="input" name="text" type="text" onChange={handleChange}/>
          </div>
        </div>
    
      </form>
     

<div className='res'> 
  {result.map(book => (
    <div key={book.id} className="book">
      <a href={book.volumeInfo.previewLink}>
        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className='imgbook' />
        )}
      </a> 
      <h2 className="title">{book.volumeInfo.title}</h2>
    </div>
  ))}
</div>

    </div>
   
  );
}

export default App;
