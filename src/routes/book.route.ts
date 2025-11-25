import { Router, Request, Response} from "express";
import { BookController, BookController } from "../controllers/book.controller";

const router: Router = Router();
const BookController = new BookController();

router.get('/', BookController.getBooks);

export default router;