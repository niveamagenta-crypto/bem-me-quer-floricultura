import { useEffect } from "react";

const DEFAULT_SELECTOR = ".animate-slide-up, .animate-fade-in";
const DEFAULT_OBSERVER_OPTIONS = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

/**
 * Observa elementos com classes de animaÃ§Ã£o e aplica a classe `animate-visible`
 * quando entram na viewport. Garante desconexÃ£o no cleanup.
 *
 * @param {object} options
 * @param {string} [options.selector] - Seletor CSS para elementos observados.
 * @param {IntersectionObserverInit} [options.observerOptions] - OpÃ§Ãµes do observer.
 * @param {Array} [options.dependencies] - DependÃªncias adicionais para reexecutar o hook.
 */
const useScrollAnimation = ({
  selector = DEFAULT_SELECTOR,
  observerOptions,
  dependencies = [],
} = {}) => {
  useEffect(() => {
    const options = observerOptions ?? DEFAULT_OBSERVER_OPTIONS;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    }, options);

    const observeElements = () => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        if (element.dataset.animationObserved === "true") {
          return;
        }

        element.dataset.animationObserved = "true";
        observer.observe(element);
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, observerOptions, ...dependencies]);
};

export default useScrollAnimation;
