document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        box.addEventListener('click', function(e) {
            // Don't toggle if clicking on options
            if (e.target.closest('.options') || e.target.closest('.size-btn') || e.target.closest('.color')) {
                return;
            }
            
            // Toggle expanded state
            const isExpanded = this.classList.contains('expanded');
            
            // Collapse all boxes first
            boxes.forEach(b => {
                b.classList.remove('expanded');
                b.querySelector('.options').classList.add('hidden');
            });
            
            // Expand current box if it wasn't already expanded
            if (!isExpanded) {
                this.classList.add('expanded');
                this.querySelector('.options').classList.remove('hidden');
            }
        });
    });
    
    // Color selection
    document.querySelectorAll('.color').forEach(color => {
        color.addEventListener('click', function() {
            const box = this.closest('.box');
            box.style.backgroundColor = this.dataset.color;
        });
    });
    
    // Size selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const box = this.closest('.box');
            box.style.width = this.dataset.size === 'small' ? '200px' : 
                             this.dataset.size === 'medium' ? '300px' : '400px';
        });
    });
});