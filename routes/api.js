const router = require('express').Router();

const AuthController = require('../controllers/AuthController');
const ReportController = require('../controllers/ReportController');

// Routes
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

router.get('/test', AuthController.test);

router.get('/reports', ReportController.index);
router.post('/reports', ReportController.store);
router.get('/reports/:id', ReportController.show);
router.patch('/reports/:id', ReportController.edit);
router.delete('/reports/:id', ReportController.destroy);

module.exports = router;
