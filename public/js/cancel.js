// This function handles the cancel button on the edit/delete page from the dashboard page
async function cancelEntryHandler (event){
    event.preventDefault();
        
    document.location.replace('/dashboard')
    
}

document.querySelector('#cancel-btn').addEventListener('submit', editEntryHandler);