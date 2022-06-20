import { Router } from 'express';
import { insert, deleteBook, getBook, update} from '../database/queries';
import user from './user';
import book from './book';

const router: Router = Router();

router.use('/user', user);
router.use(book);

export default router;