function classificarHeroi() {
  const nome = document.getElementById("nome").value;
  const xp = Number(document.getElementById("xp").value);
  let nivel = "";

  if (!nome || isNaN(xp)) {
    document.getElementById("resultado").textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // ^ Aqui eu faria diferente caso seguisse uma abordagem diferente do eunciado:
  /*
    const niveis = [
    { max: 1000, nome: 'Ferro' },
    { max: 2000, nome: 'Bronze' },
    { max: 5000, nome: 'Prata' },
    { max: 7000, nome: 'Ouro' },
    { max: 8000, nome: 'Platina' },
    { max: 9000, nome: 'Ascendente' },
    { max: 10000, nome: 'Imortal' },
    { max: Infinity, nome: 'Radiante' }
    ];
  */

  document.getElementById("resultado").textContent =
    `O Herói de nome ${nome} está no nível de ${nivel}`;
}
