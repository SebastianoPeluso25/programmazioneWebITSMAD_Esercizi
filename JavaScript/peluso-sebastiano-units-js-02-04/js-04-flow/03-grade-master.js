/**Write a function named assignGrade that:
○ takes 1 parameter, a number score.
○ returns a grade for the score, either "A", "B", "C", "D", or "F".
● Call that function for a few different scores and log the result to make sure it
works.
 */


let NumberScore = 28;

function assignGrade(NumberScore) {

    let LetterScore = ''
    
    if (NumberScore == 30) {
        LetterScore = 'A';
        return LetterScore;
    }else if (30 > NumberScore && NumberScore >= 26 ) {
        LetterScore = 'B';
        return LetterScore;
    }else if (26 > NumberScore && NumberScore >= 20) {
        LetterScore = 'C';
        return LetterScore;
    }else if (20 > NumberScore && NumberScore >= 18) {
        LetterScore = 'D';
        return LetterScore;
    }else if (NumberScore < 18 ) {
        LetterScore = 'F';
        return LetterScore;
    }
        
    }


let LetterScore = assignGrade(NumberScore)

console.log("Your Score is: ",LetterScore)