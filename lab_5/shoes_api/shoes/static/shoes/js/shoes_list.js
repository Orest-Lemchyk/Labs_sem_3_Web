function sortTable(columnIndex) {
    const table = document.getElementById("shoesTable");
    const rows = Array.from(table.tBodies[0].rows);
    const isNumeric = columnIndex === 1 || columnIndex === 2;
  
    rows.sort((a, b) => {
      const cellA = a.cells[columnIndex].textContent.trim();
      const cellB = b.cells[columnIndex].textContent.trim();
      return isNumeric ? parseFloat(cellA) - parseFloat(cellB) : cellA.localeCompare(cellB);
    });
  
    rows.forEach(row => table.tBodies[0].appendChild(row));
    calculateTotal();
  }
  
  function calculateTotal() {
    const rows = document.querySelectorAll("#shoesTable tbody tr");
    let total = 0;
    rows.forEach(row => {
      if(row.style.display !== "none") {
        const priceCell = row.cells[1].textContent.trim();
        total += parseFloat(priceCell) || 0;
      }
    });
    document.getElementById("totalPrice").textContent = `Total price: ${total} grn`;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    calculateTotal();
    document.getElementById("searchInput").addEventListener("input", function() {
      const query = this.value.trim().toLowerCase();
      document.querySelectorAll("#shoesTable tbody tr").forEach(row => {
        row.style.display = Array.from(row.cells)
          .some(cell => cell.textContent.toLowerCase().includes(query)) ? "" : "none";
      });
      calculateTotal();
    });
  });
  