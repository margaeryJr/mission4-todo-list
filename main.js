
const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const today = days[date.getDay()];
const year = date.getFullYear();


document.getElementById('today').innerHTML = today + ', ' + day + ' ' + month + ' ' + year;

// Form handling demo
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const taskName = document.getElementById('todo').value;
        const priority = document.getElementById('level').value;
        
        if (taskName && priority) {
            // Create visual feedback
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Task Added! ✨';
            button.style.background = 'linear-gradient(145deg, #68d391, #48bb78)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(145deg, #81e6d9, #4fd1c7)';
            }, 2000);
            
            // Reset form
            this.reset();
        } else {
            // Soft error message
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Please fill all fields 🌸';
            button.style.background = 'linear-gradient(145deg, #fed7d7, #feb2b2)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(145deg, #81e6d9, #4fd1c7)';
            }, 2000);
        }
    });