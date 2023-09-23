function wordBreak(s: string, wordDict: string[]): boolean {
    wordDict.forEach((word: string) => {
        s = s.replaceAll(s, word); 
        console.log('updated',s);
    }); 


    return !Boolean(s.length);
};

console.log('final', wordBreak("leetcode", ["leet","code"])); 