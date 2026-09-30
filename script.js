const products=[
{name:"Classic Cotton Kurta",price:449,old:599,tag:"MEN"},
{name:"Royal Festive Kurta",price:499,old:699,tag:"MEN"},
{name:"Elegant Women's Kurta",price:459,old:599,tag:"WOMEN"},
{name:"Comfort Short Kurta",price:399,old:549,tag:"MEN"}
];
let cart=[];
function render(list=products){const g=document.getElementById("productGrid");g.innerHTML=list.map((p,i)=>`<article class="product"><div class="product-img">${p.tag}<br>KURTA</div><div class="product-info"><h3>${p.name}</h3><div class="stars">★★★★★</div><div class="price">₹${p.price} <del>₹${p.old}</del></div><button class="buy" onclick="addCart(${i})">Buy Now</button></div></article>`).join("")}
function addCart(i){cart.push(products[i]);document.getElementById("cartCount").textContent=cart.length;toast("Added to cart ✓")}
function openCart(){const box=document.getElementById("cartItems");box.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}</span><b>₹${p.price}</b></div>`).join(""):"<p>Your cart is empty.</p>";document.getElementById("cart").classList.add("show")}
function closeCart(){document.getElementById("cart").classList.remove("show")}
function checkout(){if(!cart.length){toast("Add a product first");return}let msg="Hello Maruti Kurta, I want to order:%0A"+cart.map(p=>`• ${p.name} - ₹${p.price}`).join("%0A");window.open("https://wa.me/?text="+msg,"_blank")}
function whatsappOrder(item){window.open("https://wa.me/?text="+encodeURIComponent("Hello Maruti Kurta, I want to enquire about "+item)," _blank")}
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1800)}
function showAll(){render(products)}
document.getElementById("search").addEventListener("input",e=>{const q=e.target.value.toLowerCase();render(products.filter(p=>(p.name+p.tag).toLowerCase().includes(q)))})
render();