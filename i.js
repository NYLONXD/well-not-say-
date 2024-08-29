document.querySelector('.btn').addEventListener('click', function() {
    // Create a new div element for the message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "Call me if you free";
    
    // Style the message div
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '0';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.backgroundColor = '#ff6b6b';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '20px';
    messageDiv.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    messageDiv.style.fontFamily = "'Comic Sans MS', 'Comic Sans', cursive";
    messageDiv.style.zIndex = '1000';
    messageDiv.style.borderRadius = '0 0 15px 15px';

    // Add the message div to the body
    document.body.appendChild(messageDiv);

    // Remove the message after 3 seconds (optional)
    setTimeout(function() {
        document.body.removeChild(messageDiv);
    }, 3000);
});
