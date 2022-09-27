import "./main.scss"
let main = document.createElement("main");
let src="https://cwpeng.github.io/live-records-samples/data/products.json";
        fetch(src).then((response)=>{
            return response.json();
        }).then((data)=>{
            let main = document.querySelector("main");
            for(let i=0; i<data.length;i++){
                let product = data[i];
                let box = document.createElement("div");
                box.className="box"
                box.textContent = product.name;
                box.textContent = product.name;
                main.appendChild(box)
            }
        })
export default main