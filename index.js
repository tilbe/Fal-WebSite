

const plusBtns = document.querySelectorAll(".plusBtn");
const menuOpen = document.querySelector(".menuOpen");
const linesBtn = document.querySelector(".lines");
const closeBtn = document.querySelector(".close");
const singUpBtn = document.querySelector(".button");
const singUpPage = document.querySelector(".singUp");
const startcloseBtn = document.querySelector(".startclose");
const fortuneCart = document.querySelector(".fortuneCart");
const startBtn = document.querySelector(".startBtn");
const blogBtn = document.querySelector(".blogBtn");
const blogPage = document.querySelector(".blogPage");
const firstpage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondPage");
const thirdPage = document.querySelector(".thirdPage");
const lastPage = document.querySelector(".lastPage");
const backBtn = document.querySelector(".back");
const taraotPage = document.querySelector(".taraotPage");
const tarotBtn = document.querySelector(".tarotBtn");
const taraot = document.querySelector(".pagetar");
const paymentpage = document.querySelector(".paymentpage");
const shoppingbag = document.querySelector(".bag");
const bagPage = document.querySelector(".bagPage");
const bagCloseBtn = document.querySelector(".BagcloseBtn");
const shoppingBackBtn = document.querySelector(".shoppingBack");
const homepage = document.querySelector(".homepage");
const payBtn = document.querySelector(".payButton");
const paymentSyf = document.querySelector(".cartpage");
const cartPageBackBtn = document.querySelector(".cartback");
const Payinfo = document.querySelector("Payinfo")
const infoInput = document.querySelector("infoInput")
const paytitle = document.querySelector("paytitle")






for (let i = 0; i < plusBtns.length; i++) {
    $(plusBtns[i]).on("click", function () {
        const metin = $(this).parent().next();
        metin.css("display", "block");
    });

    $(plusBtns[i]).on("dblclick", function () {
        const metin = $(this).parent().next();
        metin.css("display", "none");
    });
}




bagCloseBtn.addEventListener("click", () => {
    bagPage.style.display = "none"
})
shoppingbag.addEventListener("click", () => {
    bagPage.style.display = "block"
})

shoppingbag.addEventListener("dblclick", () => {
    bagPage.style.display = "none"
})


linesBtn.addEventListener("click", () => {
    menuOpen.style.display = "block"
})
linesBtn.addEventListener("dblclick", () => {
    menuOpen.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    singUpPage.style.display = "none"
})

singUpBtn.addEventListener("click", () => {
    singUpPage.style.display = "block"
})

startBtn.addEventListener("click", () => {
    fortuneCart.style.display = "block"
})

startcloseBtn.addEventListener("click", () => {
    fortuneCart.style.display = "none"
})

blogBtn.addEventListener("click", () => {
    blogPage.style.display = "block"
    firstpage.style.display = "none"
    secondPage.style.display = "none"
    thirdPage.style.display = "none"
    lastPage.style.display = "none"
    taraot.style.display = "none"

})
tarotBtn.addEventListener("click", () => {
    taraot.style.display = "block"
    blogPage.style.display = "none"
    firstpage.style.display = "none"
    secondPage.style.display = "none"
    thirdPage.style.display = "none"
    lastPage.style.display = "none"


})


backBtn.addEventListener("click", () => {
    blogPage.style.display = "none"
    taraot.style.display = "none"
    firstpage.style.display = "block"
    secondPage.style.display = "block"
    thirdPage.style.display = "block"
    lastPage.style.display = "block"
})


shoppingBackBtn.addEventListener("click", () => {
    firstpage.style.display = "block"
    secondPage.style.display = "block"
    thirdPage.style.display = "block"
    lastPage.style.display = "block"
    blogPage.style.display = "none"
    taraot.style.display = "none"

})



cartPageBackBtn.addEventListener("click", () => {
    taraot.style.display = "block";
    blogPage.style.display = "none";
    firstpage.style.display = "none";
    secondPage.style.display = "none";
    thirdPage.style.display = "none";
    lastPage.style.display = "none";
    paymentSyf.style.display = "none";

    const productElements = document.querySelectorAll(".productt");
    productElements.forEach((productElement) => {
        productElement.remove();
    });

    const totalpay = document.querySelectorAll(".totalpay")
    totalpay.forEach((total) => {
        total.remove()

    })


});

payBtn.addEventListener("click", () => {
    taraot.style.display = "none";
    blogPage.style.display = "none";
    firstpage.style.display = "none";
    secondPage.style.display = "none";
    thirdPage.style.display = "none";
    lastPage.style.display = "none";
    paymentSyf.style.display = "block";




    const cartItems = document.querySelectorAll(".product");
    const totalPriceElement = document.querySelector(".total");
    const totalPriceCart = totalPriceElement.textContent;
    const payPage = document.querySelector(".prodactt"); // Yeni eklendi



    let totalPrice = 0;

    // Sepetteki ürünleri ödeme sayfasında gösterme
    cartItems.forEach((item) => {
        const name = item.querySelector(".name").textContent;
        const priceText = item.querySelector(".price").textContent;
        const price = parseFloat(priceText);

        const productElement = document.createElement("div");
        productElement.classList = "productt"; // Class ismi düzeltildi
        productElement.innerHTML = `
        <div class="productbag">
        <div class="productinfo">
          <p class="name">${name}</p>
          <p class="price">${priceText}</p>
        </div>
        </div>`;

        payPage.appendChild(productElement);

        totalPrice += price;
    });

    const totalpay = document.createElement("div");
    totalpay.classList = "totalpay";
    totalpay.innerHTML = `
   <p>TOTAL<p/>
   <p>${totalPriceCart}</p>
   `

    payPage.appendChild(totalpay);

    totalPriceElement.textContent = totalPrice.toFixed(2) + "£";
});






fetch("api.txt")
    .then((response) => response.json())
    .then((json) => {
        let totalPrice = 0; // Toplam fiyat değişkeni

        function updateTotal() {
            const totalElement = document.querySelector(".total");
            totalElement.textContent = totalPrice.toFixed(2) + "£";
        }

        json.forEach((item) => {
            const cart = document.createElement("div");
            cart.classList = "cart";
            cart.innerHTML = `
                <div class="cartInfo">
                    <div class="top">
                        <h3 class="baslik">${item.god}</h3>
                        <img class="img" src="img/priest-2833384_1280.jpg">
                    </div>
                    <div class="bottom">
                        <p class="fiyat">${item.price}£</p>
                        <a class="addBtn"><i class="fa-solid fa-plus"></i></a>
                      
                    </div>
                </div>`;

            taraotPage.appendChild(cart);
        });


        // Ürünleri sepete ekleme işlemi
        function addToCart(productInfo) {
            const name = productInfo.querySelector(".baslik").textContent;
            const price = parseFloat(productInfo.querySelector(".fiyat").textContent);

            const page = document.querySelector(".pagetarot");
            const payPage = document.querySelector(".payPage");

            const product = document.createElement("div");
            product.classList = "product";
            product.innerHTML = `
      <div class="productbag">
        <p class="name">${name}</p>
        <p class="price">${price.toFixed(2)}£</p>
        <div class="cartButton">
          <a class="remove"><i class="fa-solid fa-trash"></i></a>
        </div>
      </div>`;
            page.appendChild(product);

            const cartNumber = document.querySelector(".cartNumber");
            const currentNumber = parseInt(cartNumber.textContent);
            cartNumber.textContent = currentNumber + 1;
            totalPrice += price; // Ürün fiyatını toplama ekle
            updateTotal(); // Toplamı güncelle

            removeCart(product); // Remove düğmesini ekleme işlemi
        }

        // Sepetten ürünü kaldırma işlemi
        function removeCart(product) {
            const removeBtn = product.querySelector(".remove");
            removeBtn.addEventListener("click", () => {
                const price = parseFloat(product.querySelector(".price").textContent);
                product.remove();

                totalPrice -= price; // Ürün fiyatını toplamdan çıkar
                updateTotal(); // Toplamı güncelle

                const cartNumber = document.querySelector(".cartNumber");
                const currentNumber = parseInt(cartNumber.textContent);
                cartNumber.textContent = currentNumber - 1;
            });
        }

        // "addBtn" üzerindeki tüm ürünler için olay dinleyicisi ekleme
        const addBtns = document.querySelectorAll(".addBtn");
        addBtns.forEach((addBtn) => {
            addBtn.addEventListener("click", () => {
                const productInfo = addBtn.closest(".cartInfo");
                addToCart(productInfo);
            });
        });

    });

    const continuationBtn = document.querySelector(".continuationBtn");
    const backPage = document.querySelector(".backk");
    const front = document.querySelector(".front");
    const backBtnCart = document.querySelector(".backBtn");
    
    function validateForm() {
        var cardNumber = document.querySelector(".cart-info").value;
        var expirationDate = document.querySelector(".cart-date").value;
        var name = document.querySelector(".name").value;
    
        if (cardNumber === "" || expirationDate === "" || name === "") {
            alert("Please fill in the blank fields.");
            return false;
        } else {
            return true;
        }
    }
    
    continuationBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var isValid = validateForm();
        if (isValid) {
            backPage.style.display = "block";
            front.style.display = "none";
        }
    });
    
    backBtnCart.addEventListener("click", function (event) {
        event.preventDefault();
        backPage.style.display = "none";
        front.style.display = "block";
    });
    

$(document).ready(function () {
    $(".paytitle").hover(
        function () {
            $(this).css("cursor", "pointer");
        },
        function () {
            $(this).css("color", "gray");
        }
    );
    $(".paytitle").click(function () {
        $(".infoInput").toggle("slow")
    })

});


$(function () {
    $(".h2payment").click(
        function () {
            $(this).css("cursor", "pointer")
            $(".payment").slideToggle();
        });
});

