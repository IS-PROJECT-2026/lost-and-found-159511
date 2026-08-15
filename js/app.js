// ========== FORM HANDLING ==========
const form = document.getElementById("itemForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const item = {
<<<<<<< HEAD
            id: Date.now(), // Unique identifier for each item
=======
            id: Date.now(),
>>>>>>> 42f6d721b6e2fce05250850ce6fe9f06cf964bca
            name: document.getElementById("itemName").value,
            category: document.getElementById("category").value,
            description: document.getElementById("description").value,
            location: document.getElementById("location").value,
            office: document.getElementById("office").value,
            dateFound: document.getElementById("dateFound").value,
            status: document.getElementById("status").value,
            createdAt: new Date().toISOString()
        };

        let items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));

        alert("Item successfully added!");
        form.reset();
    });
}

// ========== DISPLAY ITEMS ==========
const container = document.getElementById("items-container");

if (container) {
    function renderItems(items) {
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#666; padding:40px;">No items found. Add your first item!</p>';
            return;
        }

        items.forEach(item => {
            const statusClass = item.status.toLowerCase().replace(' ', '-');
            
            container.innerHTML += `
                <div class="item-card" data-id="${item.id}">
                    <h3>${item.name}</h3>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Description:</strong> ${item.description || 'No description provided'}</p>
                    <p><strong>Found Location:</strong> ${item.location}</p>
                    <p><strong>Office:</strong> ${item.office}</p>
                    <p><strong>Date Found:</strong> ${item.dateFound || 'Not specified'}</p>
                    <p>
                        <strong>Status:</strong>
                        <span class="status ${statusClass}">${item.status}</span>
                    </p>
                    <div style="margin-top: 10px;">
                        <button onclick="updateStatus(${item.id})" class="btn-update">Update Status</button>
                        <button onclick="deleteItem(${item.id})" class="btn-delete">Delete</button>
                    </div>
                </div>
            `;
        });
    }

<<<<<<< HEAD
    // ========== STATUS UPDATE FUNCTIONALITY (#6) ==========
    // Cycles through statuses: Available -> Claim Pending -> Collected -> Returned
    window.updateStatus = function(id) {
        let items = JSON.parse(localStorage.getItem("items")) || [];
        const itemIndex = items.findIndex(i => i.id === id);
        
        if (itemIndex === -1) {
            alert('Item not found!');
            return;
        }
        
        const statuses = ['Available', 'Claim Pending', 'Collected', 'Returned'];
        const currentIndex = statuses.indexOf(items[itemIndex].status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        items[itemIndex].status = statuses[nextIndex];
        
        localStorage.setItem("items", JSON.stringify(items));
        renderItems(items);
        updateDashboardStats();
        
        console.log(`Updated item ${id} status to: ${items[itemIndex].status}`);
    };

    // ========== DELETE ITEM FUNCTIONALITY ==========
    // Removes item after confirmation
    window.deleteItem = function(id) {
        if (!confirm('Are you sure you want to delete this item?')) return;
        
        let items = JSON.parse(localStorage.getItem("items")) || [];
        items = items.filter(i => i.id !== id);
        localStorage.setItem("items", JSON.stringify(items));
        renderItems(items);
        updateDashboardStats();
        
        console.log(`Deleted item ${id}`);
    };

    // ========== DASHBOARD STATS UPDATE ==========
    // Synchronizes dashboard card counts with current items
    function updateDashboardStats() {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        const total = items.length;
        const available = items.filter(i => i.status === 'Available').length;
        const collected = items.filter(i => i.status === 'Collected' || i.status === 'Returned').length;
        
        const cards = document.querySelectorAll('.dashboard-card');
        if (cards.length === 3) {
            cards[0].querySelector('p').textContent = total;
            cards[1].querySelector('p').textContent = available;
            cards[2].querySelector('p').textContent = collected;
        }
    }

=======
    // ========== SEARCH FUNCTIONALITY (#7) ==========
    // Filters items by name, category, location, or description
    window.searchItems = function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
        let items = JSON.parse(localStorage.getItem("items")) || [];
        
        if (searchTerm === '') {
            renderItems(items);
            return;
        }
        
        const filtered = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm) ||
            item.location.toLowerCase().includes(searchTerm) ||
            (item.description && item.description.toLowerCase().includes(searchTerm))
        );
        
        renderItems(filtered);
        
        // Display results count
        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            resultsCount.textContent = `Found ${filtered.length} item(s) matching "${searchTerm}"`;
        }
    };

    // ========== STATUS UPDATE ==========
    window.updateStatus = function(id) {
        let items = JSON.parse(localStorage.getItem("items")) || [];
        const itemIndex = items.findIndex(i => i.id === id);
        
        if (itemIndex === -1) {
            alert('Item not found!');
            return;
        }
        
        const statuses = ['Available', 'Claim Pending', 'Collected', 'Returned'];
        const currentIndex = statuses.indexOf(items[itemIndex].status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        items[itemIndex].status = statuses[nextIndex];
        
        localStorage.setItem("items", JSON.stringify(items));
        renderItems(items);
        updateDashboardStats();
    };

    // ========== DELETE ITEM ==========
    window.deleteItem = function(id) {
        if (!confirm('Are you sure you want to delete this item?')) return;
        
        let items = JSON.parse(localStorage.getItem("items")) || [];
        items = items.filter(i => i.id !== id);
        localStorage.setItem("items", JSON.stringify(items));
        renderItems(items);
        updateDashboardStats();
    };

    // ========== DASHBOARD STATS ==========
    function updateDashboardStats() {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        const total = items.length;
        const available = items.filter(i => i.status === 'Available').length;
        const collected = items.filter(i => i.status === 'Collected' || i.status === 'Returned').length;
        
        const cards = document.querySelectorAll('.dashboard-card');
        if (cards.length === 3) {
            cards[0].querySelector('p').textContent = total;
            cards[1].querySelector('p').textContent = available;
            cards[2].querySelector('p').textContent = collected;
        }
    }

>>>>>>> 42f6d721b6e2fce05250850ce6fe9f06cf964bca
    // ========== INITIALIZATION ==========
    let items = JSON.parse(localStorage.getItem("items")) || [];
    renderItems(items);
    updateDashboardStats();
}