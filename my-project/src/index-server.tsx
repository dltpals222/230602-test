import express from "express";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import React from "react";
import App from "./App";

const app = express();

const serverRender = (req, res, next) => {
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on 5000port");
});
