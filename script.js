function createContent() {
  const container = document.querySelector(".container");

  // Create content div and paragraphs
  const content = document.createElement("div");
  content.id = "content";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images, except those that are loaded lazily. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Note: All events named load will not propagate to Window, even with bubbles initialized to true. To catch load events on the window, that load event must be dispatched directly to the window.";

  const paragraph3 = document.createElement("p");
  paragraph3.textContent =
    "Usage: If any of your document’s event handlers depend on the document being fully loaded, you should check that it is loaded before executing those handlers. If the network connection were to stall out after a button appeared in the document but before the parts of the document that the button relied on were loaded, the user would get unintended behavior or an error message after clicking the button.";

  // Append paragraphs to content
  content.appendChild(paragraph1);
  content.appendChild(paragraph2);
  content.appendChild(paragraph3);

  // Create 'show more' button
  const button = document.createElement("a");
  button.href = "#";
  button.id = "show-more";
  button.textContent = "Show More";

  // Append content and button to the container
  container.appendChild(content);
  container.appendChild(button);

  // Set up events for show more button
  setUpEvents();
}

function setUpEvents() {
  const content = document.getElementById("content");
  const button = document.getElementById("show-more");

  button.onclick = function () {
    if (content.className === "open") {
      // Shrink the box
      content.className = "";
      button.innerHTML = "Show More";
    } else {
      // Expand the box
      content.className = "open";
      button.innerHTML = "Show Less";
    }
  };
}

window.onload = function () {
  createContent();
};
