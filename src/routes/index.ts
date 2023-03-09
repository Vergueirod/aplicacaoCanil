import {Router} from 'express';
import * as pageControllers from '../controllers/pageControllers';
import * as searchControllers from '../controllers/searchControllers';

const router = Router();

router.get('/', pageControllers.home);
router.get('/dogs', pageControllers.dogs);
router.get('/cats', pageControllers.cats);
router.get('/fishes', pageControllers.fishes);

router.get('/search', searchControllers.search);


export default router;