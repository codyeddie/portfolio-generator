const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     // for (let i = 0; i < profileDataArr.length; i++) {
//     //     console.log(profileDataArr[i]);
//     // }
//     // the forEach statement operates the sane as the for loop that has been commented out above
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

// console.log(name, github)
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout index.html to see the output!');
});