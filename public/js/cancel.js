async function cancelEntryHandler (event){
    event.preventDefault();
        
    document.location.replace('/dashboard')
    
}

document.querySelector('#cancel-btn').addEventListener('submit', editEntryHandler);