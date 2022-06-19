import { Router } from 'express';
import { insert, deleteBook, getBook, update} from '../database/queries';

const router: Router = Router();

router.post('/insert', (req, res) => {
  const { bookName } = req.body;
  insert(bookName)
    .then((data) => {
      res.send('Inserted');
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/get', (req, res) => {
  const { bookName } : {bookName?: string} = req.query;
  if (!bookName) {
    res.send('No book name');
  }

  getBook(bookName)
    .then(result => {
      res.send(result[0]);
    })
    .catch(err => {
      res.send(err);
    });
});

router.delete('/delete', (req, res) => {
  const { bookName } = req.body;
  deleteBook(bookName)
    .then(() => {
      res.send('Deleted');
    }
    ).catch((err) => {
      res.send(err);
    }
    );
}
);

router.patch('/update', (req, res) => {
  const { bookName, newName }: {bookName: string, newName: string} = req.body;
  
  if(!bookName || !newName) {
    res.send('Missing parameters');
  }

  update(bookName, newName)
    .then(() => {
      res.send('Updated');
    }
    ).catch((err) => {
      res.send(err);
    }
    );
}
);

export default router;