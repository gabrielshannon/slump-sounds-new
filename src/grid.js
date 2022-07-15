import "./grid.css";
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";
import Items from "./components/Display/Items";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo";

function Grid() {
  return (
    <ApolloProvider client={client}>
      <div className="container-app">
        <div className="container-main">
          <Items></Items>
        </div>

        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default Grid;
