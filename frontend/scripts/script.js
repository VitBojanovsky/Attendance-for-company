let ArrayemployeeId = new Array(256);
let ArrayemployeeIdCount = new Array(256);
//256 moznych id zamestnancu
//pozdeji pridat kontrolu na maximalni pocet zamestnancu
let Max=256;
let promenna=0;
//256 zaznamu na jedno id zamestnance
//celkem 65536 zaznamu
//pozdeji pridat kontrolu na maximalni pocet zaznamu na jedno id zamestnance
//a pridat cele smazani dat
//a popup ze se vsechno smazalo a ze maji smulu
let Arraystatus = new Array(65536);
let Arraydate = new Array(65536);


document.addEventListener('DOMContentLoaded', function() {
    const attendanceForm = document.getElementById('attendance-form');
    attendanceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const employeeId = document.getElementById('employee-id').value;
        const date = document.getElementById('date').value;
        const status_temp = document.getElementById('status').value;
        console.log(`Employee ID: ${employeeId}, Date: ${date}, Status: ${status_temp}`);
        ArrayemployeeId[promenna]=employeeId;
        ArrayemployeeIdCount[employeeId]=+1;
        Arraystatus[256*employeeId+ArrayemployeeIdCount[employeeId]]=status_temp;
        Arraydate[256*employeeId+ArrayemployeeIdCount[employeeId]]=date;
        promenna++;

        alert('Docházka zaznamenána!');
        attendanceForm.reset();
    });
    
});