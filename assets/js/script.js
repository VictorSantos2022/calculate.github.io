document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const valorInicial = parseFloat(document.getElementById('Valor-mes').value);
        const valorMensal = parseFloat(document.getElementById('valor-maximo').value);
        const taxaJurosAnual = parseFloat(document.getElementById('taxa-juros').value);
        const meses = parseInt(document.getElementById('meses-pretendido').value);
        if (isNaN(valorInicial) || isNaN(valorMensal) || isNaN(taxaJurosAnual) || isNaN(meses)) {
            console.error('Erro: Um ou mais valores de entrada são inválidos.');
            return;
        }

       
        const taxaJurosMensal = taxaJurosAnual / 100 / 12;

        
        let valorFuturo = valorInicial * Math.pow(1 + taxaJurosMensal, meses);
        valorFuturo += valorMensal * (((Math.pow(1 + taxaJurosMensal, meses) - 1) / taxaJurosMensal));

        const valorFuturoFormatado = valorFuturo.toFixed(2);

       
        const totalDepositado = valorInicial + (valorMensal * meses);
        const totalDepositadoFormatado = totalDepositado.toFixed(2);

        
        const jurosRecebidos = valorFuturo - totalDepositado;
        const jurosRecebidosFormatado = jurosRecebidos.toFixed(2);

       
        document.getElementById('infos').classList.remove('hidden');
        
        // Atualizar elementtos com results
        document.getElementById('value').textContent = `${jurosRecebidosFormatado} R$`;
        document.getElementById('description').innerHTML = `
            <p>Você receberá um valor total de: R$ ${valorFuturoFormatado} </p>
            <p>Valor total depositado: R$ ${totalDepositadoFormatado} </p>
            <p>Juros recebidos: R$ ${jurosRecebidosFormatado} </p>
        `;
    });
});