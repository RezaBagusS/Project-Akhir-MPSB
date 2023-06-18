import { useState } from "react";
import { ValidatorCode } from "../Helpers/ValidatorCode";
import { QuestionModal } from "./QuestionModal";
import { SuccessModal } from "./SuccessModal";
import { FailedModal } from "./FailedModal";

const ChallengeField = ({ challenge, handleTextArea }) => {
  const [feedBackChallenge, setFeedBackChallenge] = useState([]);
  const [htmlCode, setHtmlCode] = useState(
    localStorage.getItem("html") ? localStorage.getItem("html") : ""
  );
  const [cssCode, setCssCode] = useState(
    localStorage.getItem("css") ? localStorage.getItem("css") : ""
  );
  const [jsCode, setJsCode] = useState(
    localStorage.getItem("js") ? localStorage.getItem("js") : ""
  );
  const [open, setOpen] = useState(false);
  const [openResponse, setOpenResponse] = useState(false);
  const [responseSuccess, setResponseSuccess] = useState(false);
  const [responseFailed, setResponseFailed] = useState(false);

  const handleDate = (date) => {
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    const ho = new Intl.DateTimeFormat("en", { hour: "2-digit" }).format(date);
    return `${da} ${mo} ${ye}, ${ho}`;
  };

  const handleInput = () => {
    const html = handleTextArea.textAreaHTML.current.value;
    const css = handleTextArea.textAreaCSS.current.value;
    const js = handleTextArea.textAreaJS.current.value;
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
    setHtmlCode(html);
    setCssCode(css);
    setJsCode(js);
  };

  const handleReset = () => {
    setHtmlCode("");
    setCssCode("");
    setJsCode("");
    localStorage.removeItem("html");
    localStorage.removeItem("css");
    localStorage.removeItem("js");
    handleTextArea.textAreaHTML.current.value = "";
    handleTextArea.textAreaCSS.current.value = "";
    handleTextArea.textAreaJS.current.value = "";
  };

  const handleRun = () => {
    let preview = document.querySelector("iframe");
    preview.srcdoc = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
          try {
            ${jsCode}
          } catch (error) {
            const errorMessage = document.createElement('div');
            errorMessage.innerText = "Error: " + error;
            errorMessage.style.color = "red";
            document.body.appendChild(errorMessage);
          }
          </script>
        </body>
      </html>
    `;

    setFeedBackChallenge(ValidatorCode(htmlCode, cssCode, jsCode, challenge));
  };

  const handleSubmit = () => {
    setOpen(!open);
    setFeedBackChallenge(ValidatorCode(htmlCode, cssCode, jsCode, challenge));
  };
  const handleResponseSubmit = () => {
    setOpenResponse(!openResponse);
  };

  return (
    <div className="bg-cust-beige p-5">
      <div className="w-full mt-5 px-5 py-3 cust-container">
        <QuestionModal
          open={open}
          handleSubmit={handleSubmit}
          handleResponseSubmit={handleResponseSubmit}
        />
        {feedBackChallenge ? (
          <FailedModal
            open={openResponse}
            setOpen={setOpenResponse}
            responseSuccess={responseFailed}
          />
        ) : (
          <SuccessModal
            open={openResponse}
            setOpen={setOpenResponse}
            responseSuccess={responseSuccess}
          />
        )}
        <div className="flex flex-row justify-between">
          <p className="w-9/12 text-2xl font-semibold">{challenge?.title}</p>
          <p className="w-3/12 text-end">
            <span className="px-4 py-2 bg-cust-orange whitespace-nowrap text-cust-beige rounded-md drop-shadow-[3px_4px_0px_rgb(0,0,0,0.2)]">
              Close : {handleDate(challenge?.closeDate)}
            </span>
          </p>
        </div>
        <div className="mt-5 ring-2 p-2 bg-white rounded-md drop-shadow-[3px_5px_0px_rgb(0,0,0,0.2)]">
          <h1 className="text-lg font-semibold">Deskripsi : </h1>
          <p className="text-base font-normal">{challenge?.studyCase}</p>
        </div>
        <div className="mt-5 ring-2 p-2 bg-white rounded-md drop-shadow-[3px_5px_0px_rgb(0,0,0,0.2)]">
          <h1 className="text-lg font-semibold">Instruksi : </h1>
          {challenge?.instruksi.map((item, index) => {
            return (
              <p key={index} className="text-base font-normal">
                {index + 1}. {item}
              </p>
            );
          })}
          <p className="text-base font-normal mt-3">{challenge?.perintah}</p>
        </div>
        <div className="mt-5 ring-2 p-2 bg-white rounded-md drop-shadow-[3px_5px_0px_rgb(0,0,0,0.2)]">
          <h1 className="text-lg font-semibold">Hasil yang diharapkan : </h1>
          <img src={challenge?.output} alt="MissingIMG" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-4 px-5 py-3 bg-cust-blue rounded-md drop-shadow-[3px_5px_2px_rgb(0,0,0,0.2)]">
          <div className="text-start w-full p-2 text-white">
            <div className="flex justify-center font-semibold text-white text-xl mb-5">
              Code Editor
            </div>
            <div>
              <h1 className="text-white text-lg">HTML</h1>
              <textarea
                ref={handleTextArea.textAreaHTML}
                value={
                  localStorage.getItem("html")
                    ? localStorage.getItem("html")
                    : ""
                }
                onChange={(e) => handleInput("HTML", e)}
                className="w-full h-44 bg-black/50 ring-2 ring-slate-400 resize-none rounded-md text-sm p-2"
                id="HTML"
              ></textarea>
            </div>
            <div className="my-5">
              <h1 className="text-white text-lg">CSS</h1>
              <textarea
                ref={handleTextArea.textAreaCSS}
                value={
                  localStorage.getItem("css") ? localStorage.getItem("css") : ""
                }
                onChange={(e) => handleInput("CSS", e)}
                className="w-full h-44 bg-black/50 ring-2 ring-slate-400 resize-none rounded-md text-sm p-2"
                id="CSS"
              ></textarea>
            </div>
            <div className="my-5">
              <h1 className="text-white text-lg">Javascript</h1>
              <textarea
                ref={handleTextArea.textAreaJS}
                value={
                  localStorage.getItem("js") ? localStorage.getItem("js") : ""
                }
                onChange={(e) => handleInput("JS", e)}
                className="w-full h-44 bg-black/50 ring-2 ring-slate-400 resize-none rounded-md text-sm p-2"
                id="JS"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col w-full p-2">
            <div className="flex justify-center font-semibold text-white text-xl mb-12">
              Preview
            </div>
            <iframe className="bg-white ring-2 ring-slate-400 w-full h-3/4 rounded-md overflow-y-auto"></iframe>
            <div className="flex flex-row justify-between w-full">
              <button
                onClick={handleSubmit}
                className="px-4 py-3 mt-4 w-3/12 rounded-md bg-cust-purple text-cust-beige hover:bg-cust-purple/80 hover:ring-2 hover:ring-slate-400 text-lg font-semibold transition-all duration-200"
              >
                Submit
              </button>
              <div className="flex flex-row justify-end gap-x-5 w-9/12">
                <button
                  onClick={handleReset}
                  className="px-4 py-3 mt-4 w-3/12 rounded-md text-white hover:bg-cust-yellow/50 hover:text-cust-blue text-lg font-semibold transition-all duration-300"
                >
                  Reset
                </button>
                <button
                  onClick={handleRun}
                  className="px-4 py-3 mt-4 w-3/12 bg-cust-yellow hover:bg-cust-yellow/50 rounded-md text-cust-blue text-lg font-semibold transition-all duration-300"
                >
                  Run
                </button>
              </div>
            </div>
          </div>
          <div className="mt-0 mb-5 ring-2 p-2 col-span-2 bg-white rounded-md drop-shadow-[3px_5px_0px_rgb(0,0,0,0.2)]">
            <p className="text-lg text-center font-semibold mb-3">
              {" "}
              -- Debug Code --{" "}
            </p>
            <div>
              {feedBackChallenge ? (
                feedBackChallenge.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col w-full mb-2 p-2 bg-cust-blue bg-black/50 rounded-md text-cust-beige"
                    >
                      <p>Kesalahan {index + 1} : </p>
                      {item}
                    </div>
                  );
                })
              ) : (
                <p className="text-center font-medium text-xl">
                  <span className="text-cust-green">
                    SELAMAT !! <br />
                  </span>{" "}
                  Tidak ada kesalahan pada kodemu, silahkan submit kode mu
                  sekarang !!.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeField;
