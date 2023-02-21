async function newEntryHandler (event){
    event.preventDefault();
    
    const entry_title = document.querySelector('#entry-title-m').value;
    const entry_text = document.querySelector('#entry-text-m').value;
    const author_id = document.querySelector('form[name="new-blog-m"]').id;
    
    console.log("title", entry_title)
    console.log("text", entry_text)
    console.log("author id", author_id)
    
    
    const response = await fetch ('/api/entries/',{
        method: 'POST',
        body: JSON.stringify({
            author_id,
            entry_title,
            entry_text
            
        }),
        headers: {'Content-Type': 'application/json',
    },
    });
    
//if entry is added then the blog detail page will be rerendered 
if (response.ok){
    // document.location.replace('/blog/')
    document.location.reload();
} else {
    alert('failed to load blog entry')
}


}

document.querySelector('.new-entry-form-m').addEventListener('submit', newEntryHandler);