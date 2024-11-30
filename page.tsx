 "use client"; 

import React, { useState, useEffect } from "react";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

const initialBooks: Book[] = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", available: true },
];

export default function Home() {

    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [editingBook, setEditingBook] = useState<Book | null>(null);

    useEffect(() => {

    }, []);

    const addBook = (book: Omit<Book, "id">) => {
        setBooks([...books, { ...book, id: Date.now() }]); 
    };

    const updateBook = (book: Omit<Book, "id">) => {
        if (editingBook) {
            setBooks(
                books.map((b) =>
                    b.id === editingBook.id ? { ...book, id: editingBook.id } : b
                )
            );
            setEditingBook(null); 
        }
    };

    const deleteBook = (id: number) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <div>
            <h1>Book Manager</h1>
            {/* Form aur book list ko yahan add karna hai */}
            {/* <BookForm onSubmit={editingBook ? updateBook : addBook} initialData={editingBook} /> */}
            {/* <BookList books={books} onDelete={deleteBook} onEdit={setEditingBook} /> */}
        </div>
    );
}