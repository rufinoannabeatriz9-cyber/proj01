let valorCompra = Number(prompt("Digite o valor total da compra"));
if (valorCompra >= 100){
    alert ("Você ganhou 10% de desconto")
    let desconto = valorCompra * 0.10;
    let total = valorCompra - desconto;
    alert ("Valor do desconto R$:" + desconto);
    alert ("Valor da compra R$:" + total );
}else {
    alert ("Você não tem desconto R$:"+ valorCompra)
}


