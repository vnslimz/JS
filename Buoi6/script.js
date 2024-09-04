const inputJob = document.getElementById('inputJob')
const jobTable = document.getElementById('jobTable')

function getJobsFromLocalStorage() {
    const jobsString = localStorage.getItem('jobs');
    return jobsString ? JSON.parse(jobsString) : [];
}

function saveJobsToLocalStorage(jobs) {
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

let jobs = getJobsFromLocalStorage();

function add(){
    if (!inputJob.value.trim()) {
        alert("Vui lòng nhập tên công việc!");
        return;
    }
    let newJob = {
        idJob: inputJob.value,
        timeJob: Date(),
        statusJob: "pending",
    };

    inputJob.value = '';

    jobs.unshift(newJob);
    saveJobsToLocalStorage(jobs);

    displayJobs()

    document.getElementById('jobTableBody').prepend(newRow);

    console.log(newJob);
}

function createDeleteButton(job) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
    deleteJob(job.idJob);
    });
    return deleteButton;
}
  
function deleteJob(id) {
    jobs = jobs.filter(job => job.idJob !== id);
    saveJobsToLocalStorage(jobs);
    displayJobs();
}

function createDoneButton(job) {
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
        markJobAsDone(job.idJob);
    });
    return doneButton;
}

function markJobAsDone(id) {
    jobs = jobs.map(job => {
        if (job.idJob === id) {
            job.statusJob = "done";
        }
        return job;
    });
    saveJobsToLocalStorage(jobs);
    displayJobs();
}

function displayJobs() {
    const jobTableBody = document.getElementById('jobTableBody');
  
    jobTableBody.innerHTML = '';

    if (jobs.length === 0) {
        const emptyRow = document.createElement('tr');
        for (let i = 0; i < 5; i++) {
            const emptyCell = document.createElement('td');
            emptyRow.appendChild(emptyCell);
        }
        jobTableBody.appendChild(emptyRow);
    } else { jobs.forEach(job => {
        const newRow = document.createElement('tr');
    
        const idCell = document.createElement('td');
        idCell.textContent = job.idJob;
        const timeCell = document.createElement('td');
        timeCell.textContent = job.timeJob;
        const statusCell = document.createElement('td');
        statusCell.classList.add('pending');
        statusCell.textContent = job.statusJob;
        const deleteCell = document.createElement('td');
        deleteCell.appendChild(createDeleteButton(job));
        const doneCell = document.createElement('td');
        doneCell.appendChild(createDoneButton(job));
    
        newRow.appendChild(idCell);
        newRow.appendChild(timeCell);
        newRow.appendChild(statusCell);
        newRow.appendChild(deleteCell);
        newRow.appendChild(doneCell);
    
        jobTableBody.appendChild(newRow);
    })};
}

displayJobs();


inputJob.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        add();
    }
})



