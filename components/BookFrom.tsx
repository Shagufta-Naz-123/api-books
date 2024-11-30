import React, { useState, useEffect } from 'react';

// Book type ke liye interface
interface Book {
    title: string;
    author: string;
}

// Props ke liye interface
interface BookFormProps {
    onSubmit: (book: Book) => void;
    initialData?: Book;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialData = { title: '', author: '' } }) => {
    const [title, setTitle] = useState(initialData.title);
    const [author, setAuthor] = useState(initialData.author);

    useEffect(() => {
        setTitle(initialData.title);
        setAuthor(initialData.author);
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, author });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default BookForm;
