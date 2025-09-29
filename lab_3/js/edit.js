const editForm = document.getElementById("editForm");
const editIndex = localStorage.getItem("editIndex");

if(editIndex !== null && shoesList[editIndex]) {
  const shoe = shoesList[editIndex];

  editForm.producer.value = shoe.producer;
  editForm.price.value = shoe.price;
  editForm.size.value = shoe.size;
  editForm.color.value = shoe.color;
}

editForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const producer = editForm.producer.value.trim();
  const price = parseFloat(editForm.price.value);
  const size = parseInt(editForm.size.value);
  const color = editForm.color.value.trim();

  const textPattern = /^[A-Za-z\s]+$/;

    if(!producer || !textPattern.test(producer) || !price || !size || !color || !textPattern.test(color)) {
        showModal("Please fill in all fields correctly!");
        return;
    }

    if(price < 100 || price > 10000  ) {
        showModal("price from 100 to 10,000");
        return;
    }
    
    if( size < 30 || size > 50 ) {
        showModal("size from 30 to 50");
        return;
    }

//   shoesList[editIndex].producer = producer;
//   shoesList[editIndex].price = price;
//   shoesList[editIndex].size = size;
//   shoesList[editIndex].color = color;

//   localStorage.setItem("shoesList", JSON.stringify(shoesList));

  showModal("Shoes updated successfully!");
  setTimeout(() => window.location.href = "index.html", 1500);
});

function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  modal.style.display = "block";

  document.getElementById("closeModal").onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
