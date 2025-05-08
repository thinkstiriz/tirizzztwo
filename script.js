// Create flying meme coins
        function createFlyingCoins() {
            const emojis = ['💰', '🪨', '🎨', '🚀', '💎', '🤑'];
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const coin = document.createElement('div');
                    coin.className = 'meme-coin';
                    coin.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    coin.style.left = '-100px';
                    coin.style.top = Math.random() * window.innerHeight + 'px';
                    coin.style.animationDuration = (10 + Math.random() * 20) + 's';
                    coin.style.animationDelay = Math.random() * 5 + 's';
                    coin.style.fontSize = (3 + Math.random() * 5) + 'rem';
                    document.body.appendChild(coin);
                    
                    // Remove after animation completes
                    setTimeout(() => {
                        coin.remove();
                    }, 30000);
                }, i * 3000);
            }
        }
        
        // Create confetti effect
        function createConfetti() {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
                confetti.style.width = (10 + Math.random() * 10) + 'px';
                confetti.style.height = (10 + Math.random() * 10) + 'px';
                confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
                confetti.style.animationDelay = Math.random() * 5 + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }
        
        function copyToClipboard() {
            const address = "5uiEw5iaZaW7hz7H9fSCWii2vZrDWBhHv371t6yXKSDR";
            navigator.clipboard.writeText(address);
            
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            
            // Create confetti when copying
            createConfetti();
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }
        
        // Start animations when page loads
        window.onload = function() {
            createFlyingCoins();
            setInterval(createFlyingCoins, 15000);
            
            // Add floating emoji animation
            const emojis = ['🚀', '💎', '🎨', '🪨', '💰', '🤑', '😂', '👑'];
            for (let i = 0; i < 10; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'floating-emoji';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = Math.random() * 100 + '%';
                emoji.style.top = Math.random() * 100 + '%';
                emoji.style.animationDelay = Math.random() * 5 + 's';
                emoji.style.fontSize = (2 + Math.random() * 4) + 'rem';
                document.body.appendChild(emoji);
            }
        };
