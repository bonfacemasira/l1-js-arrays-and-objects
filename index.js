// Utility
function print(value){
    console.info(value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
const marks = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
//const students =["Salma", "Sidney", "Titus", "Tonny", "Victor", "Veronica", "Bonface", "Purity", "Meshack", "Klaire", "Keisha"];
    // return the array
//return students;
return marks;
}
// display value
print(`Scores Array: ${scores()}`)


// TODO: Access an element from the array
function accessScore(){
    // using array above access the 3rd element
const values = scores();

return values[2]

    // return the elememt
}
// display value
print(`Third Score: ${accessScore()}`)


// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const family = [['Wilson','Joyce'], ['Meshack', 'Verah', 'Millicent'],'Bonface'];

    return family;

    // return the nested arrays
}
// display value
print(`Nested Score Array: ${nestedScores()}`)


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const nest = nestedScores();
    return nest.length;

    // return the number of elements

}
// display value
print(`Number of elements: ${getNumberOfScores()}`)


// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const family = nestedScores();
    const newList = [...family, 'Deborah'];

    family.unshift('Bochaberi');
    return family;

    // return the new array with the elements that have been added

}
// display value
print(`Added elements: ${addElement()}`)



// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object
    const studentDetails = {
        name: 'Bonface Masira',
        age: 50,
        email: 'bonface@moringaschool.com',
        studentNumber: 8018,
        isKenyan: true,
    };

    // return student object
    return studentDetails;
}
// display value
print(`Student: ${JSON.stringify(student())}`)

// TODO: Access student's age
function studentAge(){
    // access student age using key
    const studentDetailsX = student();
    const age = studentDetailsX["age"];

    // return student age
    return age;

}
// display value
print(`Student Age: ${studentAge()}`)


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator
    const studentDetailsX = student();
    const email = studentDetailsX.email;


    // return student email
    return email;

}
// display value
print(`Student Email: ${studentEmail()}`)


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    const systemUser = {
        id: 8018,
        name: "Nyachuba Masira",
        course: {
            name: 'Computer Technology',
            number: 1354,
        }
    }

    // return user object
    return systemUser;

}
// display value
print(`User: ${JSON.stringify(user())}`)


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries
    const entries = Object.entries(user());

    // return entries
    return entries;

}
// display value
print(`User Entries: ${JSON.stringify(getUserEntries())}`)


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys


    // return keys

}
// display value
// print(`User Keys: ${getUserKeys()}`)

