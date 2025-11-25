import { CreateBookDTO } from "../dtos/book.dto";
import { Book } from "../types/book.type";
import { IBookRepository, BookRepository} from "../repositories/booko.repository";

// let BookRepository: IBookRepository = new BookRepository();

export class BookService {
    createBook(book : CreateBookDTO) {
        // business logic
        const exist = BookRepository.findBookById(book.id);
        if (exist) {
            throw new Error("Book ID already exists");

        }
        const newBook: Book = {
            id: book.id,
            title: book.title
        };

        let created: Book = BookRepository.createBook(newBook);

        // latter transform/map
        // ...

        return created;
    }
}