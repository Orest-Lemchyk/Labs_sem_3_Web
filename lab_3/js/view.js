let selectedIndex = null;

function displayShoes() {
  const tableBody = document.querySelector("#shoesTable tbody");
  tableBody.innerHTML = "";

  shoesList.forEach((shoe, index) => {
    const row = document.createElement("tr");

    // Перший стовпець - radio для вибору
    const selectTd = document.createElement("td");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "selectedShoe";
    radio.value = index;
    radio.addEventListener("change", () => {
      selectedIndex = index;
      document.getElementById("editBtn").disabled = false;
      document.getElementById("deleteBtn").disabled = false;
    });
    selectTd.appendChild(radio);
    row.appendChild(selectTd);

    // Інші дані
    const producerTd = document.createElement("td");
    producerTd.textContent = shoe.producer;
    row.appendChild(producerTd);

    const priceTd = document.createElement("td");
    priceTd.textContent = shoe.price;
    row.appendChild(priceTd);

    const sizeTd = document.createElement("td");
    sizeTd.textContent = shoe.size;
    row.appendChild(sizeTd);

    const colorTd = document.createElement("td");
    colorTd.textContent = shoe.color;
    row.appendChild(colorTd);

    tableBody.appendChild(row);
  });

  calculateTotal();
}

function sortTable(columnIndex) {
  const tableBody = document.querySelector("#shoesTable tbody");
  const rows = Array.from(tableBody.rows);
  const isNumeric = columnIndex === 1 || columnIndex === 2;

  rows.sort((a, b) => {
    const cellA = a.cells[columnIndex].textContent.trim();
    const cellB = b.cells[columnIndex].textContent.trim();
    if (isNumeric) {
      return parseFloat(cellA) - parseFloat(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach(row => tableBody.appendChild(row));

  calculateTotal();
}

function filterTable() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#shoesTable tbody tr");

  rows.forEach(row => {
    const cells = Array.from(row.cells);
    const matches = cells.some(cell => cell.textContent.toLowerCase().includes(query));
    row.style.display = matches ? "" : "none";
  });

  calculateTotal();
}

function calculateTotal() {
  const rows = document.querySelectorAll("#shoesTable tbody tr");
  let total = 0;

  rows.forEach(row => {
    if (row.style.display !== "none") {
      const priceCell = row.cells[2].textContent.trim();
      total += parseFloat(priceCell) || 0;
    }
  });

  document.getElementById("totalPrice").textContent = `Total price: ${total} grn`;
}

window.addEventListener("DOMContentLoaded", () => {
  displayShoes();

  document.getElementById("searchInput").addEventListener("input", filterTable);
});

document.getElementById("editBtn").addEventListener("click", () => {
  if (selectedIndex !== null) {
    localStorage.setItem("editIndex", selectedIndex);
    window.location.href = "edit.html";
  }
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  if (selectedIndex !== null) {
    if (confirm("Ви впевнені, що хочете видалити цей елемент?")) {
      shoesList.splice(selectedIndex, 1);
      displayShoes();
      selectedIndex = null;
      document.getElementById("editBtn").disabled = true;
      document.getElementById("deleteBtn").disabled = true;
    }
  }
});