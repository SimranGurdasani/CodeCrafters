
document.addEventListener("DOMContentLoaded", function () {
        const cartBody = document.getElementById("cart-body");
        let cartProducts =
          JSON.parse(localStorage.getItem("cartProducts")) || [];

        function addToCart(product) {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="btn remove" onclick="removeFromCart(this, ${cartProducts.indexOf(
                  product
                )})">Remove</button>
            </td>
        `;
          cartBody.appendChild(row);
          updateTotal();
        }

        cartProducts.forEach((product) => {
          addToCart(product);
        });

        window.removeFromCart = function (button, index) {
          if (index > -1) {
            cartProducts.splice(index, 1);
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            const row = button.parentNode.parentNode;
            cartBody.removeChild(row);
            updateTotal();
          }
        };

        function calculateTotal(cartProducts) {
          let total = 0;
          cartProducts.forEach((product) => {
            const price = parseFloat(product.price.replace(/[^\d]/g, "")); // Remove non-numeric characters
            const quantity = parseInt(product.quantity);
            total += price * quantity;
          });
          return total;
        }

        function updateTotal() {
          const totalPriceElement = document.getElementById("total-price");
          const total = calculateTotal(cartProducts);
          totalPriceElement.textContent = total;
        }

        function addProducts(event) {
          event.preventDefault();
          console.log("Checkout button clicked.");
          cartProducts.forEach((product) => {
            addProductsToDatabase(
              product.title,
              product.price,
              product.quantity
            );
          });
        }

        let checkoutbtn = document.querySelector("#checkoutbtn");
        checkoutbtn.addEventListener("click", addProducts);

        function addProductsToDatabase(title, price, quantity) {
          console.log("Adding products to database...");
          const body = {
            title: title,
            price: price,
            quantity: quantity,
          };

          fetch("http://localhost:8081/addProducts", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((val) => {
              console.log("Response from server:", val);
              if (val.status === "success") {
                console.log("Redirecting to payment page...");
                window.location.href = "../../viewProducts/payment.html";
              } else {
                alert("Please fill in all details.");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });