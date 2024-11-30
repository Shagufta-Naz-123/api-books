import { NextResponse } from "next/server";

// Books ka simulated database
let books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", available: true },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", available: true },
];

// GET method - Sari books ko list karna
export async function GET() {
    return NextResponse.json(books, { status: 200 });
}

// POST method - Nayi book add karna
export async function POST(request: Request) {
    const { title, author, available } = await request.json();
    const newBook = {
        id: Date.now(), // Unique ID generate karna
        title,
        author,
        available,
    };
    books.push(newBook);
    return NextResponse.json(newBook, { status: 201 });
}

// PUT method - Maujooda book ko update karna
export async function PUT(request: Request) {
    const { id, title, author, available } = await request.json();
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
        return NextResponse.json(
            { message: "Book not found" },
            { status: 404 }
        );
    }

    books[bookIndex] = { id, title, author, available };
    return NextResponse.json(books[bookIndex], { status: 200 });
}

// DELETE method - Book ko delete karna
export async function DELETE(request: Request) {
    const { id } = await request.json();
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
        return NextResponse.json(
            { message: "Book not found" },
            { status: 404 }
        );
    }

    const deletedBook = books.splice(bookIndex, 1);
    return NextResponse.json(deletedBook[0], { status: 200 });
}                                                                          // src/components/BookList.tsx

