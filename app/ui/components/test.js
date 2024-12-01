import { LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class TestComponent extends LitElement {
  static properties = {
    value: { type: String },
  };

  constructor() {
    super();
    this.value = "";
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch("/api/test");
      this.value = await response.text();
      console.log("Response from server: %s", this.value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return null;
  }
}

customElements.define("test-component", TestComponent);
