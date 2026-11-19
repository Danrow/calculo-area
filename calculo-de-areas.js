// Acina a função calcularArea ao precionar Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {calcularArea();}});

// Muda quais campos aparecem no formulario ao mudar a forma geometrica desejada no calculo
function alterarForma() {
    let forma = document.getElementById("formas").value // Lê o select id="formas" do html

    // Zera as configurações(escondendo) para ser configurado depois de acordo com a forma geométrica escolhida
    document.getElementById("instrução").textContent = "";
    document.getElementById("label1").style.display = "none";
    document.getElementById("campo1").style.display = "none";
    document.getElementById("campo2").style.display = "none";
    document.getElementById("label2").style.display = "none";
    document.getElementById("campo3").style.display = "none";
    document.getElementById("label3").style.display = "none";
    document.getElementById("bcalcular").style.display = "none";

    // Configura de acordo com a forma geométrica escolhida
    if (forma == "circulo") {
        document.getElementById("instrução").textContent = "Insira o valor do raio:";
        document.getElementById("label1").textContent = "Raio";
        document.getElementById("label1").style.display = "block";
        document.getElementById("campo1").style.display = "block";
        document.getElementById("bcalcular").style.display = "block";
    } else if (forma == "quadrado") {
        document.getElementById("instrução").textContent = "Insira o valor do lado:";
        document.getElementById("label1").textContent = "Lado";
        document.getElementById("label1").style.display = "block";
        document.getElementById("campo1").style.display = "block";
        document.getElementById("bcalcular").style.display = "block";
    } else if (forma == "retangulo") {
        document.getElementById("instrução").textContent = "Insira o valor da base e altura:";
        document.getElementById("label1").textContent = "Base";
        document.getElementById("label1").style.display = "block";
        document.getElementById("campo1").style.display = "block";
        document.getElementById("label2").textContent = "Altura";
        document.getElementById("campo2").style.display = "block";
        document.getElementById("label2").style.display = "block";
        document.getElementById("bcalcular").style.display = "block";
    } else if (forma == "triangulo") {
        document.getElementById("instrução").textContent = "Insira o valor da base e altura:";
        document.getElementById("label1").textContent = "Base";
        document.getElementById("label1").style.display = "block";
        document.getElementById("campo1").style.display = "block";
        document.getElementById("label2").textContent = "Altura";
        document.getElementById("campo2").style.display = "block";
        document.getElementById("label2").style.display = "block";
        document.getElementById("bcalcular").style.display = "block";
    } else if (forma == "trapezio") {
        document.getElementById("instrução").textContent = "Insira o valor da base maior, base menor e a altura:";
        document.getElementById("label1").textContent = "Base maior";
        document.getElementById("label1").style.display = "block";
        document.getElementById("campo1").style.display = "block";
        document.getElementById("label2").textContent = "Base menor";
        document.getElementById("campo2").style.display = "block";
        document.getElementById("label2").style.display = "block";
        document.getElementById("label3").textContent = "Altura";
        document.getElementById("campo3").style.display = "block";
        document.getElementById("label3").style.display = "block";
        document.getElementById("bcalcular").style.display = "block";
    }

    // Limpa os campos sempre que o select id="formas" do html é alterado
    document.getElementById("campo1").value=""
    document.getElementById("campo2").value=""
    document.getElementById("campo3").value=""
    document.getElementById("resultado").textContent = ""
}

// Efetua o calculo
function calcularArea() {
    // Lê os valores digitados
    let campo1 = Number(document.getElementById("campo1").value.replace(",", "."));
    let campo2 = Number(document.getElementById("campo2").value.replace(",", "."));
    let campo3 = Number(document.getElementById("campo3").value.replace(",", "."));
    let forma = document.getElementById("formas").value; // Lê o select id="formas" do html

    if (forma == "circulo") {
        if (campo1 <= 0) { // Confere se os campos foram prenchidos
            document.getElementById("resultado").textContent = "Digite um valor de raio válido!";
            document.getElementById("campo1").value="";
            return;
        }

        // Calculo da area
        let area = Math.PI * campo1 * campo1;

        // Mostra o resultado com duas casas decimais
        document.getElementById("resultado").textContent =
        "A área do cículo é " + area.toFixed(2).replace(".", ",") + "."; 
    } else if (forma == "quadrado") {
        if (campo1 <= 0) { // Confere se os campos foram prenchidos
            document.getElementById("resultado").textContent = "Digite um valor de lado válido!";
            document.getElementById("campo1").value="";
            return;
        }

        // Calculo da area
        let area = campo1 * campo1;

        // Mostra o resultado com duas casas decimais
        document.getElementById("resultado").textContent =
        "A área do quadrado é " + area.toFixed(2).replace(".", ",") + "."; 

    } else if (forma == "retangulo") {
        if (campo1 <= 0 || campo2 <= 0) { // Confere se os campos foram prenchidos
            document.getElementById("resultado").textContent ="Digite um valor de base e altura válidos!";
            document.getElementById("campo1").value="";
            document.getElementById("campo2").value="";
            return;
        }

        // Calculo da area
        let area = campo1 * campo2;

        // Mostra o resultado com duas casas decimais
        document.getElementById("resultado").textContent =
        "A área do retângulo é " + area.toFixed(2).replace(".", ",") + "."; 
    } else if (forma == "triangulo") {
        if (campo1 <= 0 || campo2 <= 0) { // Confere se os campos foram prenchidos
            document.getElementById("resultado").textContent = "Digite um valor de base e altura válidos!";
            document.getElementById("campo1").value="";
            document.getElementById("campo2").value="";
            return;
        }

        // Calculo da area
        let area = campo1 * campo2 / 2;

        // Mostra o resultado com duas casas decimais
        document.getElementById("resultado").textContent =
        "A área do triângulo é " + area.toFixed(2).replace(".", ",") + "."; 
    } else if (forma == "trapezio") {
        if (campo1 <= 0 || campo2 <= 0 || campo3 <= 0) { // Confere se os campos foram prenchidos
            document.getElementById("resultado").textContent = "Digite um valor de base maior, base menor e altura válidos!";
            document.getElementById("campo1").value="";
            document.getElementById("campo2").value="";
            document.getElementById("campo3").value="";
            return;
        }

        // Calculo da area
        let area = (campo1 + campo2) * campo3 / 2;

        // Mostra o resultado com duas casas decimais
        document.getElementById("resultado").textContent =
        "A área do trapézio é " + area.toFixed(2).replace(".", ",") + "."; 
    }
}    
