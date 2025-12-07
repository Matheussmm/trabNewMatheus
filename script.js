const btnTema=document.getElementById("btnTema");
btnTema.addEventListener("click",()=>{document.body.classList.toggle("dark");btnTema.textContent=document.body.classList.contains("dark")?"☀️":"🌙";});
const form=document.getElementById("formContato");
const msg=document.getElementById("msgSucesso");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const nome=document.getElementById("nome").value.trim();
    const email=document.getElementById("email").value.trim();
    const mensagem=document.getElementById("mensagem").value.trim();
    if(nome===""||email===""||mensagem===""){alert("Preencha todos os campos!");return;}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){alert("Email inválido!");return;}
    msg.classList.remove("hidden");
    msg.textContent="Mensagem enviada com sucesso!";
    form.reset();
    setTimeout(()=>msg.classList.add("hidden"),3000);
});
