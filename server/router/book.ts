import { Router } from 'express';
import { insertBook, getBookFunc, updateBook, deleteBookFunc } from '../controller';
import checkLogin from '../middlewares/checkLogin';
const router: Router = Router();

router.post('/insert', checkLogin, insertBook);
router.get('/get', getBookFunc);
router.patch('/update', checkLogin, updateBook);
router.delete('/delete', checkLogin, deleteBookFunc);

export default router;