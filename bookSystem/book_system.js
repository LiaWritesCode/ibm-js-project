// Book Array
let books = [];

// Add Book
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
   
    const editIndex = document.getElementById('addBookButton').getAttribute('data-edit-index');
    const indexToEdit = editIndex !== null ? parseInt(editIndex) : null;
    
    console.log("📚 Current Books Array:", books);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
    if (indexToEdit !== null && !isNaN(indexToEdit)) {
        books[indexToEdit] = book; // Replaces old book
        document.getElementById('addBookButton').removeAttribute('data-edit-index'); // Clears edit mode
    }
    else {
        books.push(book);
    }
        showbooks();
        clearInputs();
    } 
    else {
        alert('Please fill in all the fields correctly.');
    }
}

// Show Books 
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Descrption:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)
        <button onclick="editbook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('')    
}

// Edit Books
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    document.getElementById('addBookButton').setAttribute('data-edit-index', index)
    showbooks(); // Refreshes the list
}

// Clear Book Details
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}