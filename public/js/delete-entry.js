async function deleteEntryHandler (event){
    event.preventDefault();
    
    // const blog_title = document.querySelector('#entry-title').value;
    // const blog_text = document.querySelector('#entry-text').value;
    // const author_id = document.querySelector('form[name="edit-blog"]').id;
    const id = document.getElementById('delete-btn').getAttribute('blog_ID');
    
    // console.log("title", blog_title)
    // console.log("text", blog_text)
    // console.log("author id", author_id)
    console.log("entry id", id)
    
    
    const response = await fetch ('/api/entries/:id',{
        method: 'DELETE',
        body: JSON.stringify({
            
            id
            
        }),
        headers: {'Content-Type': 'application/json',
    },
    });
    
//if entry is added then the blog detail page will be rerendered 
if (response.ok){
    document.location.replace('/dashboard')
    // document.location.reload();
} else {
    alert('failed to load blog entry')
}


}

document.querySelector('#delete-btn').addEventListener('click', deleteEntryHandler);