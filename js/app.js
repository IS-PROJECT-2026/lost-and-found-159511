const form = document.getElementById("itemForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const item = {
            id: Date.now(),
            name: document.getElementById("itemName").value,
            category: document.getElementById("category").value,
            description: document.getElementById("description").value,
            location: document.getElementById("location").value,
            office: document.getElementById("office").value,
            dateFound: document.getElementById("dateFound")?.value || 'Not specified',
            status: document.getElementById("status").value
        };

        let items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));

        alert("Item added successfully!");
        form.reset();
    });
}

const container = document.getElementById("items-container");

if (container) {
    function renderItems(items) {
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = '<p style="text-align:center; padding:40px;">No items found.</p>';
            return;
        }

        items.forEach(item => {
            const statusClass = item.status.toLowerCase().replace(' ', '-');
            
            container.innerHTML += `
                <div class="item-card">
                    <h3>${item.name}</h3>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Description:</strong> ${item.description || 'No description'}</p>
                    <p><strong>Location:</strong> ${item.location}</p>
                    <p><strong>Office:</strong> ${item.office}</p>
                    <p><strong>Date Found:</strong> ${item.dateFound || 'Not specified'}</p>
                    <p>
                        <strong>Status:</strong>
                        <span class="status ${statusClass}">${item.status}</span>
                    </p>
                </div>
            `;
        });
    }

    window.searchItems = function() {
        const term = document.getElementById('searchInput').value.toLowerCase();
        let items = JSON.parse(localStorage.getItem("items")) || [];
        
        if (term === '') {
            renderItems(items);
            return;
        }
        
        const filtered = items.filter(item => 
            item.name.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term) ||
            item.location.toLowerCase().includes(term)
        );
        
        renderItems(filtered);
    };

    let items = JSON.parse(localStorage.getItem("items")) || [];
    renderItems(items);
}