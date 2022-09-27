import "./welcome.scss"


let welcome = document.createElement("div");
welcome.className = "welcome";
welcome.textContent = "welcome"
function change(){
    welcome.textContent="welcome home";
}
welcome.addEventListener("click" , change)
export default welcome