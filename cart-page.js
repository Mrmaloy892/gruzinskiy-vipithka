document.addEventListener("DOMContentLoaded", ()=> {
    let cart = JSON.parse(localStorage.getItem("cart")) ||[]
    let container = document.querySelector(".cart-items")
    let totalEL = document.querySelector(".total")

    function renderCart(){
        container.innerHTML = ''
        let total = 0

        if (cart.length == 0){
            container.innerHTML = "<h3>Кошик порожній 😭😭 </h3>"
            totalEL.textContent = ""
            return
        }

        cart.forEach(element => {
            total += element.price * element.qty

            container.innerHTML +=`
            <div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            
            <buuton onclick=changeQty(${item.id}, -1)>-</button>
            <span>${item.qty}</span>
            <button onclick=changeQty(${item.id}, 1)>+</button>
            <button onclick=removeItem(${item.id})Видалити</button>
            </div>
            `

        });

        totalEL.textContent = "Разом: " + total + "грн."
    }
    //продовження проекту
})