import { component$, useClientEffect$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  useClientEffect$(() => {
    document.getElementById("theme-switch")?.addEventListener('change', function(event: any) {
      (event.target.checked) ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme");
    })
  })

  return (
    <header>
      <div class="logo">
        <a href="#" target="_blank">
          <img src="#" />
        </a>
      </div>
      <div class="switch">
        <input class="switch__input" type="checkbox" id="theme-switch" />
        <label aria-hidden="true" class="switch__label" htmlFor="theme-switch">On</label>
        <div aria-hidden="true" class="switch__marker"></div>
      </div>
    </header>
  );
});
