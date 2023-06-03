var userResult = [
    {
        name: "John Doe",
        results: [
            { subject: "Math", marks: 85 },
            { subject: "English", marks: 92 },
            { subject: "Science", marks: 78 },
            // Add more subjects and marks for John Doe
        ]
    },
    {
        name: "Jane Smith",
        results: [
            { subject: "Math", marks: 90 },
            { subject: "English", marks: 88 },
            { subject: "Science", marks: 76 },
            // Add more subjects and marks for Jane Smith
        ]
    },
    {
        name: "Alice Johnson",
        results: [
            { subject: "Math", marks: 82 },
            { subject: "English", marks: 95 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Alice Johnson
        ]
    },
    {
        name: "Robert Davis",
        results: [
            { subject: "Math", marks: 78 },
            { subject: "English", marks: 82 },
            { subject: "Science", marks: 79 },
            // Add more subjects and marks for Robert Davis
        ]
    },
    {
        name: "Emily Wilson",
        results: [
            { subject: "Math", marks: 92 },
            { subject: "English", marks: 86 },
            { subject: "Science", marks: 94 },
            // Add more subjects and marks for Emily Wilson
        ]
    },
    {
        name: "Michael Brown",
        results: [
            { subject: "Math", marks: 87 },
            { subject: "English", marks: 90 },
            { subject: "Science", marks: 83 },
            // Add more subjects and marks for Michael Brown
        ]
    },
    {
        name: "Olivia Taylor",
        results: [
            { subject: "Math", marks: 79 },
            { subject: "English", marks: 91 },
            { subject: "Science", marks: 84 },
            // Add more subjects and marks for Olivia Taylor
        ]
    },
    {
        name: "James Anderson",
        results: [
            { subject: "Math", marks: 86 },
            { subject: "English", marks: 84 },
            { subject: "Science", marks: 90 },
            // Add more subjects and marks for James Anderson
        ]
    },
    {
        name: "Sophia Martinez",
        results: [
            { subject: "Math", marks: 93 },
            { subject: "English", marks: 79 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Sophia Martinez
        ]
    },
    {
        name: "Benjamin Thomas",
        results: [
            { subject: "Math", marks: 88 },
            { subject: "English", marks: 83 },
            { subject: "Science", marks: 91 },
            // Add more subjects and marks for Benjamin Thomas
        ]
    }
];
 
myTable = document.getElementById('my-table')
percentages = []
for (var i = 0; i < userResult.length; i++) {
    total = userResult[i].results[0].marks + userResult[i].results[1].marks + userResult[i].results[2].marks
    percentage = ((total / 300) * 100).toFixed(2) + "%"
    userResult[i].percentage = percentage
    myTable.innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${userResult[i].name}</td>
    <td>${userResult[i].results[0].marks}</td>
    <td>${userResult[i].results[1].marks}</td>
    <td>${userResult[i].results[2].marks}</td>
    <td>${total}</td>
    <td>${percentage}</td>
    </tr>
    `
    percentages.push(percentage)
}


userResult.sort(function (a, b) {
    return parseFloat(b.percentage) - parseFloat(a.percentage)
});

for(var i=0; i<3; i++){
    document.write(`${i+1} ${userResult[i].name} <br />`)
}
console.log(userResult);