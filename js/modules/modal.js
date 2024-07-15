export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecha o modal.
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // Fornece evento de toggle ao modal.
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha modal ao clicar lado de fora da caixa.
  cliqueForaModal(event) {
    if (this.containerModal === event.target) {
      this.toggleModal();
    }
  }

  // Adiciona eventos ao modal.
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
