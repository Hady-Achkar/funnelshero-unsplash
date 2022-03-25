import express from 'express';
import { GetRandomImages, SearchForCategory } from '../controller';
import { Validateuser } from '../middlewares';
const router = express.Router();

router.route('/').get(Validateuser, GetRandomImages);
router.route('/search').get(Validateuser, SearchForCategory);
export default router;
