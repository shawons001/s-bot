document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value.trim();
    
    if (userInput !== '') {
        // Display user's message
        displayMessage(userInput, 'user');
        
        // Bot response
        let botResponse = getBotResponse(userInput);
        
        // Display bot's response
        displayMessage(botResponse, 'bot');
        
        // Clear the input field
        document.getElementById('user-input').value = '';
    }
});

// Function to display messages
function displayMessage(message, sender) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get bot's response based on user input
function getBotResponse(input) {
    input = input.toLowerCase();
    
    const responses = {
        'কেমন আছো?': 'আমি ভাল আছি, ধন্যবাদ! আপনি কেমন আছেন?',
        'নাম কি?': 'আমার নাম আফিয়া ২.০।',
        'কি সাহায্য করতে পারি?': 'আপনি যা জানতে চান তা আমাকে জিজ্ঞাসা করতে পারেন।',
        'ধন্যবাদ': 'আপনাকেও ধন্যবাদ!',
        'হ্যালো': 'হ্যালো! কিভাবে সাহায্য করতে পারি?'
    };
    
    return responses[input] || 'দুঃখিত, আমি বুঝতে পারিনি।';
}
