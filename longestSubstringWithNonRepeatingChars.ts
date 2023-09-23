function lengthOfLongestSubstring(s: string): number {
    for(let i=s.length; i>=1; i++){
        const longestStringSizeI = getLongestNonRepatingStringInWindow(s, i)
        if(longestStringSizeI){
            return longestStringSizeI.length;
        }
    }
    return s.length ? 1 : 0;

};


function getLongestNonRepatingStringInWindow(input:string, windowSize: number): string{
    let maxNonRepatingString: string  = '';
    // first window
    let currentNonRepatingString: string  = '';
    

    for(let i=0; i + windowSize -1 < input.length; i++ ){
        // currentNonRepatingString = do something;
        if(currentNonRepatingString.length > maxNonRepatingString.length){
            maxNonRepatingString = currentNonRepatingString;
        }
    }
    
    return maxNonRepatingString;
}

function checkIfAllCharsAreUnique(str: string): boolean{
    
}