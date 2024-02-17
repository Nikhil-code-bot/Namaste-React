// const heading = React.createElement("h1",
// {id:"heading", abc: "xyz"},
// "Hello world form javascript!!");

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),React.createElement("h2", { id: "h2" }, "I'm an h2 tag")]
  ), React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),React.createElement("h2", { id: "h2" }, "I'm an h2 tag")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
