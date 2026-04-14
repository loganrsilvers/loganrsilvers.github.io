const bubbleText = document.getElementById('bubbletext');
const text = bubbleText.textContent;
bubbleText.textContent = '';

[...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.animation = `bounce 0.6s ease-in-out infinite`;
    span.style.animationDelay = `${index * 0.1}s`;
    bubbleText.appendChild(span);
});

const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);