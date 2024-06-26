export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      return response.json();
    })
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");

      btcPreco.innerText = (500 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
