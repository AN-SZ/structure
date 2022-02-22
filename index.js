const studenten= [
    {
        name: "Tim",
        kurs: "Sport",
        prufung: [2, 3, 1, 5, 4, 3],
    },

    {
        name: "Tobias",
        kurs: "koch",
        prufung: [1, 1, 2, 1, 3, 2],
    },

    {
        name: "Oscar",
        kurs: "Sport",
        prufung: [3, 3, 2, 3, 2, 1],

    },

    {
        name: "leon",
        kurs: "Töpfer",
        prufung: [5, 4, 5, 2, 4, 2],
    },

    {
        name: "sabine",
        kurs: "koch",
        prufung: [1, 1, 1, 1, 1, 2],
    },

    {
        name: "Alexaner",
        kurs: "Töpfer",
        prufung: [2, 1, 2, 2, 1],
    }
];

// console.log(studenten);

// for(const student of studenten){
//     // console.log(student.prüfung);
//     let result = 0
//     for (const note of student.prufung){
//         // console.log(note);
//         result += note
//         result = result / student.prufung.length
//     }
//     console.log(student.name, result.toFixed(2));
// }

const studentNoten = (prufung) => {
    let result = 0
    for (const note of prufung){
        // console.log(note);
        result += note
        result = result / prufung.length
    }
    return result.toFixed(2)
}

for(const student of studenten){
    // console.log(student.prüfung);
    console.log(studentNoten(student.prufung))
    // console.log(student.name, studentNoten);
}


