function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Input arrays must have be in capital letters.");
    }

    let idCounter = 1;
    const userProfiles = [];

    for (let i = 0; i < names.length; i++) {
        const originalName = names[i];
        const modifiedName = modifiedNames[i];

        const userProfile = {
            originalName,
            modifiedName,
            id: idCounter
        };

        userProfiles.push(userProfile);
        idCounter++;
    }

    return userProfiles;
}

// Example usage:
const names = ["Huge”,  “Strong”, “Small”, “weak"];
const modifiedNames = ["HUGE”,  “STRONG”, “SMALL”, “WEAK"];
const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);