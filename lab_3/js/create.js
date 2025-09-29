const createForm = document.getElementById("createForm");
const textPattern = /^[A-Za-z\s]+$/;

createForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const producer = createForm.producer.value.trim();
  const price = parseFloat(createForm.price.value);
  const size = parseInt(createForm.size.value);
  const color = createForm.color.value.trim();

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
    showModal("Shoes added successfully!");
    createForm.reset();

  // const newShoe = new Shose(producer, price, size, color);
  // shoesList.push(newShoe);
  // localStorage.setItem("shoesList", JSON.stringify(shoesList));


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