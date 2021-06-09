import fs from "fs";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosque } from "@fortawesome/free-solid-svg-icons";

const App = () => {
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
          <li>
            <FontAwesomeIcon icon={faMosque} /> Al Khutba
          </li>
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
                <a href={f.default} target="_blank">
                  <span>{f.default.split("/")[3].replace("KHpdf", "")}</span>
                </a>
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
};

export default App;
