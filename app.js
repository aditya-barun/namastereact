const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i'm heading"),
    React.createElement("h2", {}, "i'm heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm heading"),
    React.createElement("h2", {}, "i'm heading2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
