import { useState } from 'react'; 

const App = () => {

    const [books, setBooks] = useState([]); 

    const [newBook, setNewBook] = useState({
        title: '',
        author: '', 
    }); 

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setBooks([...books, newBook]); 
        setNewBook({ title: '', author: ''});
    }

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit = {handleSubmit}>
                <label htmlFor='title'>Title: </label>
                <input
                id='title'
                name='title'
                value={newBook.title}
                onChange= {handleInputChange}
                />
                <label htmlFor='author'>Author: </label>
                <input
                id='author'
                name='author'
                value={newBook.author}
                onChange= {handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index} className="bookCard">
                <h3>{book.title}</h3>
                <h3>{book.author}</h3>
        </div>
        ))}
      </div>
    </div>
    ); 
    }; 


export default App; 