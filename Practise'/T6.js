const instructors = [
    {name: 'Nodi', age:27 , position: 'Senior'},
    {name: 'Akil', age:21 , position: 'Junior'},
    {name: 'Hasib', age:28 , position: 'Senior'},
];

const seniorInstructors = instructors.filter(instructor => instructor.position === 'Senior');
const seniorInstructors2 = instructors.find(instructor => instructor.position === 'Senior');

console.log(seniorInstructors.map(instructor => instructor.name)); // Output: ['Nodi', 'Hasib']

if(seniorInstructors2){
    console.log(seniorInstructors2.name);
}
else{
    console.log('No senior instructor found');
}
