async function editEntryHandler (event){
    event.preventDefault();
    
    const blog_title = document.querySelector('#entry-title').value;
    const blog_text = document.querySelector('#entry-text').value;
    const author_id = document.querySelector('form[name="edit-blog"]').id;
    const id = document.querySelector('form[name="edit-blog"]').getAttribute('blogid');
    
    console.log("title", blog_title)
    console.log("text", blog_text)
    console.log("author id", author_id)
    console.log("entry id", id)
    
    
    const response = await fetch ('/api/entries/:id',{
        method: 'PUT',
        body: JSON.stringify({
            author_id,
            blog_title,
            blog_text,
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

document.querySelector('.edit-entry-form').addEventListener('submit', editEntryHandler);