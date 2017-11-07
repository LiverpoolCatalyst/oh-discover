var personProfile = require("./personProfile.html");
console.log(personProfile)

var fs = require('fs'); 
 
 function fileCreator (array) {
    return array.forEach(function (string) {
        return fs.writeFileSync(`${string}.js`,personProfile);
    })
}


fileCreator(['a', 'b', 'c']);