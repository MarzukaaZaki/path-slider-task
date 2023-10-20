// Get the template element
var template = document.getElementById('path-slider-template');

// Get the content of the template
var templateContent = template.content;

// Select the elements where you want to insert the path-slider
var targetElements = document.querySelectorAll('.target-element');

// For each target element, clone the template content and append it
targetElements.forEach(function(targetElement) {
  var clone = document.importNode(templateContent, true);
  targetElement.appendChild(clone);
});
