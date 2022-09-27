import "./nav.scss"
 let nav = document.createElement("nav");

 let title = document.createElement("div");
 title.className = "title";
 title.textContent = "My Website";

 let menu = document.createElement("div");
 menu.className="menu";
 let item1 = document.createElement("span");
 item1.className = "item";
 item1.textContent = "Item 1";
 let item2 = document.createElement("span");
 item2.className = "item";
 item2.textContent = "Item 2";
 menu.appendChild(item1)
 menu.appendChild(item2)

 nav.appendChild(title)
 nav.appendChild(menu)
 
 export default nav;