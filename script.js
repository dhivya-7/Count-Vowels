
    function countVowels() {
        const inputString = document.getElementById('inputString').value;
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let count = 0;
    
        for (let char of inputString) {
            if (vowels.includes(char)) {
                count++;
            }
        }
    
        document.getElementById('result').innerText = `Number of vowels: ${count}`;
    }