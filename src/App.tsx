import { useEffect, useState } from "react";
import axios from "axios";

import Section from "./components/Section";
import replaceAll from "./markdown/replaceAll.md";
import promiseAny from "./markdown/promiseAny.md";
import aggregateError from "./markdown/aggregateError.md";
import logicalOperators from "./markdown/logicalOperators.md";
import numericSeparators from "./markdown/numericSeparators.md";
import weakRef from "./markdown/weakRef.md";

import "./App.css";

type MarkdownMap = {
  replaceAll: string;
  promiseAny: string;
  aggregateError: string;
  logicalOperators: string;
  numericSeparators: string;
  weakRef: string;
};

function App() {
  const [markdownFiles, setMarkdownFiles] = useState<MarkdownMap>({
    replaceAll: "",
    promiseAny: "",
    aggregateError: "",
    logicalOperators: "",
    numericSeparators: "",
    weakRef: "",
  });

  useEffect(() => {
    async function whyCantCRAImportMarkdown() {
      try {
        const { data: replaceAllData } = await axios(replaceAll);
        const { data: promiseAnyData } = await axios(promiseAny);
        const { data: aggregateErrorData } = await axios(aggregateError);
        const { data: logicalOperatorsData } = await axios(logicalOperators);
        const { data: numericSeparatorsData } = await axios(numericSeparators);
        const { data: weakRefData } = await axios(weakRef);

        setMarkdownFiles({
          replaceAll: replaceAllData,
          promiseAny: promiseAnyData,
          aggregateError: aggregateErrorData,
          logicalOperators: logicalOperatorsData,
          numericSeparators: numericSeparatorsData,
          weakRef: weakRefData,
        });
      } catch (e) {
        console.error("I don't care if this blows up", e);
      }
    }
    whyCantCRAImportMarkdown();
  }, []);

  return (
    <div>
      <header className="header">
        <h1>What's New In ES2021?</h1>
      </header>
      <section className="content">
        <div className="subtitle">
          <h3>
            {`> A loosely abridged list of every new feature coming out with ES2021.`}
          </h3>
        </div>
        <Section markdown={markdownFiles.replaceAll} />
        <Section markdown={markdownFiles.promiseAny} />
        <Section markdown={markdownFiles.aggregateError} />
        <Section markdown={markdownFiles.logicalOperators} />
        <Section markdown={markdownFiles.numericSeparators} />
        <Section markdown={markdownFiles.weakRef} />
        <p></p>
      </section>
    </div>
  );
}

export default App;
