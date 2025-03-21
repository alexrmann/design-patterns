// Define Burger Menu class

class BurgerMenu extends HTMLElement {
  constructor() {
    super();

    const self = this;

    this.state = new Proxy(
      {
        status: "open",
        enabled: false,
      },
      {
        set(state, key, value) {
          const oldValue = state[key];

          state[key] = value;
          if (oldValue !== value) {
            self.processStateChange();
          }
          return state;
        },
      }
    );
  }

  get maxWidth() {
    return parseInt(this.getAttribute("max-width") || 9999, 10);
  }

  connectedCallback() {
    this.initialMarkup = this.innerHTML;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="burger-menu" data-element="burger-root">
        <button class="burger-menu__trigger" data-element="burger-menu-trigger" type="button" aria-label="Open menu">
          <span class="burger-menu__bar" aria-hidden="true"></span>
        </button>
        <div class="burger-menu__panel" data-element="burger-menu-panel">
          ${this.initialMarkup} 
        </div>
      </div>
    `;

    this.postRender();
  }

  postRender() {
    this.trigger = this.querySelector('[data-element="burger-menu-trigger"]');
    this.panel = this.querySelector('[data-element="burger-menu-panel"]');
    this.root = this.querySelector('[data-element="burger-root"]');
    this.focusableElements = getFocusableElements(this);

    if (this.trigger && this.panel) {
      this.toggle();

      this.trigger.addEventListener("click", (evt) => {
        evt.preventDefault();

        this.toggle();
      });

      document.addEventListener("focusin", () => {
        if (!this.contains(document.activeElement)) {
          this.toggle("closed");
        }
      });

      return;
    }

    this.innerHTML = this.initialMarkup;
  }
}

if ("customElements" in window) {
  customElements.define("burger-menu", BurgerMenu);
}

export default BurgerMenu;
