import { Request, Response } from "express";
import { z } from "zod";

// let bookService = new BookService();

export class BookController {
    createBook(req: Request, res: Response) {
        try {
            const parsedBook = CreateBookDTO.safeParse(req.body);

            if (!parsedBook.success) {
                return res.status(400).json({ errors: parsedBook.error });
            }

            const { id, title } = parsedBook.date;
            const newBook: Book = bookService.createBook({id, title});
            return res.status(201) .json(newBook);
        }
    }
}