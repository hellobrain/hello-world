// https://www.freecodecamp.com/challenges/pig-latin

function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'],
        consonantCount = 0,
        i;

    for (i = 0; i < str.length; i++) {
      
        // vowels check
        if (vowels.indexOf(str[i]) !== -1) {
            
            if (!consonantCount) {
                return str + 'way';
            } else { 
              
                // enter here if we meet vowels after consonant
                return str.substr(consonantCount, str.length) + str.substr(0, consonantCount) + 'ay';
            }
          
        //counting consonant
        } else if (vowels.indexOf(str[i]) == -1) {
            consonantCount++;
        }
    }
}

translatePigLatin("california");
