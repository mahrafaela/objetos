const objetoPessoa = {
    nome: "Rafaela",
    idade: 16,
    cpf: "99988877744",
    email: "mariaghergoletto@gmail.com",
    altura:"1.57"

}
//Acessando com o ponto
console.log(`O nome do cliente é ${objetoPessoa.nome} e sua idade ${objetoPessoa.idade} anos`)


//Acessando com os colchetes
console.log(
    `O nome do cliente é ${objetoPessoa["nome"]} e essa pessoa tem ${objetoPessoa["idade"]} anos.`
  );
  
  const chaves = ["nome", "idade", "cpf", "email", "altura"];
  
  chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${objetoPessoa[chave]}`);
  });

  console.log(objetoPessoa[nome])