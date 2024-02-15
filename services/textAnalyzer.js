const fs = require('fs');

const TextAnalyzer = {
    readTextFromFile: (filePath) => {
        try {
            return fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            console.error('Error reading file:', error);
            return '';
        }
    },
    countWords: (filePath) => {
        const text = TextAnalyzer.readTextFromFile(filePath);
        return text.split(/\s+/).filter(word => word !== '').length;
    },
    countCharacters: (filePath) => {
        const text = TextAnalyzer.readTextFromFile(filePath);
        return text.replace(/\s+/g, '').length;
    },
    countSentences: (filePath) => {
        const text = TextAnalyzer.readTextFromFile(filePath);
        return text.split(/[.!?](\s|$)/).filter(sentence => sentence.trim() !== '').length;
    },
    countParagraphs: (filePath) => {
        const text = TextAnalyzer.readTextFromFile(filePath);
        return text.split('\n\n').filter(paragraph => paragraph.trim() !== '').length;
    },
    countLongestWordsInParagraphs: (filePath) => {
        const text = TextAnalyzer.readTextFromFile(filePath);
        const paragraphsArray = text.split('\n\n');
        
        return paragraphsArray.map(paragraph => {
            const wordsInParagraph = paragraph.split(/\s+/).filter(word => word !== '');
            
             // Handle empty paragraphs
            if (wordsInParagraph.length === 0) {
                return 0;
            }
            
            const longestWordLength = wordsInParagraph.reduce((longest, current) => Math.max(longest, current.length), 0);
            return wordsInParagraph.filter(word => word.length === longestWordLength).length;
        });
    },
};


module.exports = TextAnalyzer;
