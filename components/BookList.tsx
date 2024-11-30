import React from 'react';

// Typescript interface define
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

interface BookListProps {
    books: Book[];
    onDelete: (id: number) => void;
    onEdit: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Available: {book.available ? 'Yes' : 'No'}</p>
                        <button onClick={() => onEdit(book)}>Edit</button>
                        <button onClick={() => onDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
