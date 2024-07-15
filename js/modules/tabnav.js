export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // Ativa a tab de acordo com o índice da mesma.
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });

    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos as tabs.
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // Ativar o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}
