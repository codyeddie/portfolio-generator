const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
    // for (let i = 0; i < profileDataArr.length; i++) {
    //     console.log(profileDataArr[i]);
    // }
    // the forEach statement operates the sane as the for loop that has been commented out above
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);