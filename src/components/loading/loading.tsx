import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./loading.css?inline";

export const Loading = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="Loading">
      <div class="Loading_Bar Loading_Bar--Item1"></div>
      <div class="Loading_Bar Loading_Bar--Item2"></div>
      <div class="Loading_Bar Loading_Bar--Item3"></div>
      <div class="Loading_Bar Loading_Bar--Item4"></div>
      <div class="Loading_Bar Loading_Bar--Item5"></div>
    </div>
  );
});
