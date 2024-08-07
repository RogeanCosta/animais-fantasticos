import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistante = debounce(this.checkDistante.bind(this), 50);
  }

  // Captura a distância de cada seção ao topo do site.
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Compara a distância de cada seção com relação ao scroll do site.
  checkDistante() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistante();
      window.addEventListener("scroll", this.checkDistante);
    }

    return this;
  }

  // Remove o observador de evento do scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistante);
  }
}
