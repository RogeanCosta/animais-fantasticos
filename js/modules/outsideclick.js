export default function outsideClick(element, events, callback) {
  const html = document.documentElement;

  if (element.dataset.outside === undefined) {
    element.dataset.outside = "";
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      callback();
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      delete element.dataset.outside;
    }
  }
}
