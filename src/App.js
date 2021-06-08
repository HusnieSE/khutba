import fs from "fs";
import { useEffect, useState } from "react";
const dirTree = require("directory-tree");

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const [files, setFile] = useState(
    importAll(require.context("./khutba", true, /\.(png|jpe?g|svg|pdf)$/))
  );

  const [activeFile, setActiveFile] = useState(files[0]);
  const [activeIndex, setIndex] = useState(0);

  return (
    <>
      <header>
        <ul>
          <li> Al Khutba </li>
        </ul>
      </header>
      <main>
        <aside>
          <ol>
            {files.map((f, index) => (
              <li
                onClick={() => {
                  setActiveFile(files[index]);
                  setIndex(index);
                }}
                className={index === activeIndex ? "active" : ""}
              >
                <span>{f.default.split("/")[3].replace("KHpdf", "")}</span>
              </li>
            ))}
          </ol>
        </aside>
        <section>
          <iframe
            src={`${activeFile.default}#toolbar=0`}
            width="100%"
            height="100%"
            allowFullScreen={true}
          ></iframe>
        </section>
      </main>
    </>
  );
}

export default App;
