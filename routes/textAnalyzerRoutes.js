const express = require('express');
const textAnalyzerController = require('../controllers/textAnalyzerController');

const router = express.Router();

router.get('/words', textAnalyzerController.words);
router.get('/characters', textAnalyzerController.characters);
router.get('/sentences', textAnalyzerController.sentences);
router.get('/paragraphs', textAnalyzerController.paragraphs);
router.get('/longestWordsInParagraphs', textAnalyzerController.longestWordsInParagraphs);

module.exports = router;
