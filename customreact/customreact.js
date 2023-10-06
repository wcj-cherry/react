/* 
    customRender function which takes two params for rendering the react element
    first is reactElement which is js objects that store html <a> tag with attributes and text
    second is container which append all the element
*/
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type); //create element
  domElement.innerHTML = reactElement.children; // add children element
  domElement.setAttribute("href", reactElement.props.href); //set attributes
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
}

/* customRende2 is modular version of above fn with for loop in it */
function customRender2(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    //console.log(prop);
    domElement.setAttribute(prop, reactElement.props[prop]);
    //console.log(reactElement.props);
  }
  container.appendChild(domElement);
}

/* 
    js objects which store html <a> tag type.
    props are used for tag attributes
    children is used for displaying text
 */
const reactElement = {
  type: "a",
  props: {
    href: "https://youtube.com",
    target: "_blank",
  },
  children: "Click!!!",
};

const mainContainer = document.getElementById("root");

/* customRender is called with reactElement and mainContainer */
// customRender(reactElement, mainContainer);

customRender2(reactElement, mainContainer);
