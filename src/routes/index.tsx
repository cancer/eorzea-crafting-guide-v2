import { component$, useResource$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Home } from "~/components/home/home";

export default component$(() => {
  const keyword = useSignal("寿司");

  const craftList = useResource$(async ({ track }) => {
    track(() => keyword.value);
    const res = await fetch(
      `https://xivapi.com/search?indexes=Recipe&language=ja&string=${keyword.value}`
    );
    return res.json();
  });

  return (
    <Home
      keyword={keyword.value}
      craftList={craftList}
      jobs={[]}
      onSearch$={(value) => {
        keyword.value = value;
      }}
    />
  );
});

export const head: DocumentHead = {
  title: "Home | Eorzea Crafting Guide",
};
