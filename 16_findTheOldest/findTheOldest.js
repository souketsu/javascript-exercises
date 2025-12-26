const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    const peopleAge = people.map(person => {
        const deathYear = person.yearOfDeath || currentYear ;
        const age = deathYear - person.yearOfBirth;
        return {
            ...person,
            age
        };
    });
    return peopleAge.reduce((oldest,current) => {
        return current.age > oldest.age ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
