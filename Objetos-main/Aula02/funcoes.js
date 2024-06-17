const cliente = {
    nome: "Rafaela",
    idade: 16,
    email: "mariaghergoletto@gmail.com",
    telefone: ["(43)886624330"],
    saldo: 200,
    efetua_pagamento: function (valor_compra){
        if(valor_compra > this.saldo){
            console.log("Saldo Insuficiente!")
        }else{
            this.saldo = this.saldo - valor_compra;
            console.log(`Pagamento realizado! Novo Saldo:$(this.saldo)`)
        }
    }
};

cliente.endereços = [
 {
    rua: "Rua Sao Marcos",
    número: 12,
    apartamento: false,
    casa: true,
    complemento: "Atras da igreja Matriz",
},
]

cliente.endereços.push({
    rua: "Franciscon de Assis",
    número: 18,
    apartamento: false,
    casa: false,
    complemento: "Ao lado da tabacaria",
});

cliente.efetua_pagamento(50);

console.log(cliente.endereços);