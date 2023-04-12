import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export const Header = component$(() => {
  useStylesScoped$(styles);
  
  return (
    <header class="Header">
      <h1>Eorzea Crafting Guide</h1>
    </header>
  );
});
