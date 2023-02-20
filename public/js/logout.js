const logOutHandler = async () => {
    
        const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.ok) {
          document.location.replace('/');
        
        } else {
          alert('Failed to log out');
        }
      };


document.querySelector('#log-out-btn').addEventListener('click', logOutHandler);