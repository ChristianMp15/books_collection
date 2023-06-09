import Book from "../model/Book";
export const getAllBooks = async (req, res) => {
    
    let books;
    try {
       books = await Book.find();
    } catch (err) {
        return new Error(err);
    }
    if (!books) {
        return res.status(500).json({ message: "system error"});
    }
    if(books.length === 0) {
        return res.status(404).json({message: "No books found"});
    }
    
    return res.status(200).json(books);
};

export const addBook = async(req,res) => {
    const {title, author, imageUrl, comment, completed} = req.body;
    if(
        !title &&
        title.trim() === "" &&
        !author &&
        author.trim() === "" &&
        !imageUrl &&
        imageUrl.trim() === "" &&
        !comment &&
        comment.trim() === ""
    )
   {
    return res.status(422).json({ message: "Invalid input" });
}

let book;

try {
    book = new Book({title, author, imageUrl, comment, completed});
    book = await book.save();
} catch (err) {
    return new Error(err);
}
if(!book) {
    return res.status(500).json({ message: "Internal Serer Error"});
}

return res.status(201).json({ book })

};

export const updateBook = async (req, res) =>{
    const id = req.query.id;

    const {title, author, imageUrl, comment, completed} = req.body;
    if(
        !title &&
        title.trim() === "" &&
        !author &&
        author.trim() === "" &&
        !imageUrl &&
        imageUrl.trim() === "" &&
        !comment &&
        comment.trim() === ""

    )
   {
    return res.status(422).json({ message: "Invalid input" });
}

let book;
try {
    book = await Book.findByIdAndUpdate(id, {
        title, 
        author, 
        imageUrl, 
        comment, 
        completed
    })
} catch (err) {
    return console.log(err);
}
if (!book) {
    return res.status(500).json({ message:"Internal Server Error" })
}
return res.status(200).json({ message: "Book updated" });
};

export const deleteBook = async (req, res) => {
    const id = req.query.id;

    let book;

    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        return new Error(err);
    }

    if (!book) {
        return res.status(500).json({message: "unable to delete"});
    }
    return res.status(200).json({ message: "successfully deleted" });
};

export const getBookFromId = async (req,res) =>  {
    const id = req.query.id;

    let book;
    try{
        book = await Book.findById(id);
    } catch (err){
        return new Error(err)
    }

    if (!book){
        return res.status(404).json({message: "No Book Found"})
    }
    return res.status(200).json ({ book })
}