const form = document.getElementById('form');


form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let nome = document.getElementById('input-nome').value;
    let email = document.getElementById('input-email').value;
    console.log("Deu certo");
    let dataForm = {
        nome,
        email,
    }

    let convertDataForm = JSON.stringify(dataForm);

    localStorage.setItem('advertisement', convertDataForm);

    let mainPage = document.getElementById('teste');

    let onLoad = `<p>Carregando as informações...</p>`;

    let ready = `<p>Tudo certo, ${nome}! Muito obrigado pela inscrição. O e-mail foi enviado para o endereço eletrônico ${email}. Desejamos um ótimo dia!!</p>`;

    mainPage.innerHTML = onLoad;


    setTimeout( () => {
        console.log('Set Timeout');
        mainPage.innerHTML = ready;
    }, 1000);


    //Volta à página inicial
    // setTimeout( () => {
    //     mainPage.innerHTML = `<link rel="stylesheet" href="CSS/styleAfterCompletion"/>`;
    // }, 1000);

})