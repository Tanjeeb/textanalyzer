const TextAnalyzer = require('../services/textAnalyzer');

const textAnalyzerController = {
    words: (req, res) => {
        const wordsCount = TextAnalyzer.countWords('./public/sample.txt');
        res.json({ words: wordsCount });
    },
    characters: (req, res) => {
        const charactersCount = TextAnalyzer.countCharacters('./public/sample.txt');
        res.json({ characters: charactersCount });
    },
    sentences: (req, res) => {
        const sentencesCount = TextAnalyzer.countSentences('./public/sample.txt');
        res.json({ sentences: sentencesCount });
    },
    paragraphs: (req, res) => {
        const paragraphsCount = TextAnalyzer.countParagraphs('./public/sample.txt');
        res.json({ paragraphs: paragraphsCount });
    },
    longestWordsInParagraphs: (req, res) => {
        const longestWords = TextAnalyzer.countLongestWordsInParagraphs('./public/sample.txt');
        res.json({ longestWordsInParagraphs: longestWords });
    }
};

module.exports = textAnalyzerController;
