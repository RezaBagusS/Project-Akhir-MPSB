import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HTML_M1_1 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_1";
import HTML_M1_2 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_2";
import HTML_M1_3 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_3";
import HTML_M1_4 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_4";
import ModalConfirm from "../Component/ModalConfirm";
import { verifyToken } from "../Helpers/AuthHelpers";

const Material = () => {
  const [isDown, setIsDown] = useState(false);
  const [isDownMateri, setIsDownMateri] = useState(false);
  const [activeComponent, setActiveComponent] = useState(1);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const navigate = useNavigate();

  const handleClickProfile = () => {
    setIsDown((prev) => !prev);
  };

  const handleClickMateri = () => {
    setIsDownMateri((prev) => !prev);
  };

  const handlePrev = () => {
    if (activeComponent > 1) {
      setActiveComponent(activeComponent - 1);
    }
  };

  const handleNext = () => {
    if (activeComponent === 4) {
      setShowModalConfirm(true);
      window.scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
    }

    if (activeComponent < 4) {
      setActiveComponent(activeComponent + 1);
    }
  };

  const handleModalConfirmValue = (data) => {
    console.log("Data dari ModalConfirm:", data);
    setShowModalConfirm(false);
    document.body.style.overflowY = "auto";
  };

  const isLogin = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
      return true;
    }
    return window.location.replace("/auth/login");
  };

  return (
    <>
      {isLogin()}
      <div className="">
        {showModalConfirm && (
          <ModalConfirm
            text={
              "Apakah anda yakin telah membaca materi & siap menyelesaikan quiz ? "
            }
            sendValue={handleModalConfirmValue}
          />
        )}
      </div>
      <div className="cust-outer-container bg-cust-beige">
        <nav className="bg-cust-blue h-fit py-3">
          <div className="relative flex cust-container items-center mx-2 sm:mx-auto sm:mt-0">
            <div className="w-full ">
              <svg
                onClick={() => navigate("/dashboard")}
                className="h-16 cursor-pointer"
                viewBox="0 0 679 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#19397F" />
                <path
                  d="M71.64 100.44H89.56V111H57.96V54.84H71.64V100.44ZM138.165 87.96C138.165 89.24 138.085 90.5733 137.925 91.96H106.965C107.178 94.7333 108.058 96.8667 109.605 98.36C111.205 99.8 113.152 100.52 115.445 100.52C118.858 100.52 121.232 99.08 122.565 96.2H137.125C136.378 99.1333 135.018 101.773 133.045 104.12C131.125 106.467 128.698 108.307 125.765 109.64C122.832 110.973 119.552 111.64 115.925 111.64C111.552 111.64 107.658 110.707 104.245 108.84C100.832 106.973 98.165 104.307 96.245 100.84C94.325 97.3733 93.365 93.32 93.365 88.68C93.365 84.04 94.2983 79.9867 96.165 76.52C98.085 73.0533 100.752 70.3867 104.165 68.52C107.578 66.6533 111.498 65.72 115.925 65.72C120.245 65.72 124.085 66.6267 127.445 68.44C130.805 70.2533 133.418 72.84 135.285 76.2C137.205 79.56 138.165 83.48 138.165 87.96ZM124.165 84.36C124.165 82.0133 123.365 80.1467 121.765 78.76C120.165 77.3733 118.165 76.68 115.765 76.68C113.472 76.68 111.525 77.3467 109.925 78.68C108.378 80.0133 107.418 81.9067 107.045 84.36H124.165ZM142.662 88.6C142.662 84.0133 143.515 79.9867 145.222 76.52C146.982 73.0533 149.355 70.3867 152.342 68.52C155.329 66.6533 158.662 65.72 162.342 65.72C165.489 65.72 168.235 66.36 170.582 67.64C172.982 68.92 174.822 70.6 176.102 72.68V66.36H189.782V111H176.102V104.68C174.769 106.76 172.902 108.44 170.502 109.72C168.155 111 165.409 111.64 162.262 111.64C158.635 111.64 155.329 110.707 152.342 108.84C149.355 106.92 146.982 104.227 145.222 100.76C143.515 97.24 142.662 93.1867 142.662 88.6ZM176.102 88.68C176.102 85.2667 175.142 82.5733 173.222 80.6C171.355 78.6267 169.062 77.64 166.342 77.64C163.622 77.64 161.302 78.6267 159.382 80.6C157.515 82.52 156.582 85.1867 156.582 88.6C156.582 92.0133 157.515 94.7333 159.382 96.76C161.302 98.7333 163.622 99.72 166.342 99.72C169.062 99.72 171.355 98.7333 173.222 96.76C175.142 94.7867 176.102 92.0933 176.102 88.68ZM213.359 73.8C214.959 71.3467 216.959 69.4267 219.359 68.04C221.759 66.6 224.425 65.88 227.359 65.88V80.36H223.599C220.185 80.36 217.625 81.1067 215.919 82.6C214.212 84.04 213.359 86.6 213.359 90.28V111H199.679V66.36H213.359V73.8ZM261.098 65.88C266.324 65.88 270.484 67.5867 273.578 71C276.724 74.36 278.298 79 278.298 84.92V111H264.698V86.76C264.698 83.7733 263.924 81.4533 262.378 79.8C260.831 78.1467 258.751 77.32 256.138 77.32C253.524 77.32 251.444 78.1467 249.898 79.8C248.351 81.4533 247.578 83.7733 247.578 86.76V111H233.898V66.36H247.578V72.28C248.964 70.3067 250.831 68.76 253.178 67.64C255.524 66.4667 258.164 65.88 261.098 65.88ZM612.954 111.64C610.554 111.64 608.58 110.947 607.034 109.56C605.54 108.12 604.794 106.36 604.794 104.28C604.794 102.147 605.54 100.36 607.034 98.92C608.58 97.48 610.554 96.76 612.954 96.76C615.3 96.76 617.22 97.48 618.714 98.92C620.26 100.36 621.034 102.147 621.034 104.28C621.034 106.36 620.26 108.12 618.714 109.56C617.22 110.947 615.3 111.64 612.954 111.64Z"
                  fill="#FF6611"
                />
                <path
                  d="M321.804 82.2C325.057 82.8933 327.67 84.52 329.644 87.08C331.617 89.5867 332.604 92.4667 332.604 95.72C332.604 100.413 330.95 104.147 327.644 106.92C324.39 109.64 319.83 111 313.964 111H287.804V54.84H313.084C318.79 54.84 323.244 56.1467 326.444 58.76C329.697 61.3733 331.324 64.92 331.324 69.4C331.324 72.7067 330.444 75.4533 328.684 77.64C326.977 79.8267 324.684 81.3467 321.804 82.2ZM301.484 77.56H310.444C312.684 77.56 314.39 77.08 315.564 76.12C316.79 75.1067 317.404 73.64 317.404 71.72C317.404 69.8 316.79 68.3333 315.564 67.32C314.39 66.3067 312.684 65.8 310.444 65.8H301.484V77.56ZM311.564 99.96C313.857 99.96 315.617 99.4533 316.844 98.44C318.124 97.3733 318.764 95.8533 318.764 93.88C318.764 91.9067 318.097 90.36 316.764 89.24C315.484 88.12 313.697 87.56 311.404 87.56H301.484V99.96H311.564ZM386.138 66.36L358.138 132.2H343.418L353.658 109.48L335.498 66.36H350.778L361.098 94.28L371.338 66.36H386.138ZM388.765 82.84C388.765 77.2933 389.965 72.36 392.365 68.04C394.765 63.6667 398.098 60.28 402.365 57.88C406.685 55.4267 411.565 54.2 417.005 54.2C423.672 54.2 429.378 55.96 434.125 59.48C438.872 63 442.045 67.8 443.645 73.88H428.605C427.485 71.5333 425.885 69.7467 423.805 68.52C421.778 67.2933 419.458 66.68 416.845 66.68C412.632 66.68 409.218 68.1467 406.605 71.08C403.992 74.0133 402.685 77.9333 402.685 82.84C402.685 87.7467 403.992 91.6667 406.605 94.6C409.218 97.5333 412.632 99 416.845 99C419.458 99 421.778 98.3867 423.805 97.16C425.885 95.9333 427.485 94.1467 428.605 91.8H443.645C442.045 97.88 438.872 102.68 434.125 106.2C429.378 109.667 423.672 111.4 417.005 111.4C411.565 111.4 406.685 110.2 402.365 107.8C398.098 105.347 394.765 101.96 392.365 97.64C389.965 93.32 388.765 88.3867 388.765 82.84ZM472.343 111.64C467.969 111.64 464.023 110.707 460.503 108.84C457.036 106.973 454.289 104.307 452.263 100.84C450.289 97.3733 449.303 93.32 449.303 88.68C449.303 84.0933 450.316 80.0667 452.342 76.6C454.369 73.08 457.143 70.3867 460.663 68.52C464.183 66.6533 468.129 65.72 472.503 65.72C476.876 65.72 480.823 66.6533 484.343 68.52C487.863 70.3867 490.636 73.08 492.663 76.6C494.689 80.0667 495.703 84.0933 495.703 88.68C495.703 93.2667 494.663 97.32 492.583 100.84C490.556 104.307 487.756 106.973 484.183 108.84C480.663 110.707 476.716 111.64 472.343 111.64ZM472.343 99.8C474.956 99.8 477.169 98.84 478.983 96.92C480.849 95 481.783 92.2533 481.783 88.68C481.783 85.1067 480.876 82.36 479.063 80.44C477.303 78.52 475.116 77.56 472.503 77.56C469.836 77.56 467.623 78.52 465.863 80.44C464.103 82.3067 463.223 85.0533 463.223 88.68C463.223 92.2533 464.076 95 465.783 96.92C467.543 98.84 469.729 99.8 472.343 99.8ZM500.24 88.6C500.24 84.0133 501.093 79.9867 502.8 76.52C504.56 73.0533 506.933 70.3867 509.92 68.52C512.907 66.6533 516.24 65.72 519.92 65.72C522.853 65.72 525.52 66.3333 527.92 67.56C530.373 68.7867 532.293 70.44 533.68 72.52V51.8H547.36V111H533.68V104.6C532.4 106.733 530.56 108.44 528.16 109.72C525.813 111 523.067 111.64 519.92 111.64C516.24 111.64 512.907 110.707 509.92 108.84C506.933 106.92 504.56 104.227 502.8 100.76C501.093 97.24 500.24 93.1867 500.24 88.6ZM533.68 88.68C533.68 85.2667 532.72 82.5733 530.8 80.6C528.933 78.6267 526.64 77.64 523.92 77.64C521.2 77.64 518.88 78.6267 516.96 80.6C515.093 82.52 514.16 85.1867 514.16 88.6C514.16 92.0133 515.093 94.7333 516.96 96.76C518.88 98.7333 521.2 99.72 523.92 99.72C526.64 99.72 528.933 98.7333 530.8 96.76C532.72 94.7867 533.68 92.0933 533.68 88.68ZM599.337 87.96C599.337 89.24 599.257 90.5733 599.097 91.96H568.137C568.35 94.7333 569.23 96.8667 570.777 98.36C572.377 99.8 574.324 100.52 576.617 100.52C580.03 100.52 582.404 99.08 583.737 96.2H598.297C597.55 99.1333 596.19 101.773 594.217 104.12C592.297 106.467 589.87 108.307 586.937 109.64C584.004 110.973 580.724 111.64 577.097 111.64C572.724 111.64 568.83 110.707 565.417 108.84C562.004 106.973 559.337 104.307 557.417 100.84C555.497 97.3733 554.537 93.32 554.537 88.68C554.537 84.04 555.47 79.9867 557.337 76.52C559.257 73.0533 561.924 70.3867 565.337 68.52C568.75 66.6533 572.67 65.72 577.097 65.72C581.417 65.72 585.257 66.6267 588.617 68.44C591.977 70.2533 594.59 72.84 596.457 76.2C598.377 79.56 599.337 83.48 599.337 87.96ZM585.337 84.36C585.337 82.0133 584.537 80.1467 582.937 78.76C581.337 77.3733 579.337 76.68 576.937 76.68C574.644 76.68 572.697 77.3467 571.097 78.68C569.55 80.0133 568.59 81.9067 568.217 84.36H585.337Z"
                  fill="#FDFAE2"
                />
              </svg>
            </div>
            <div
              onClick={handleClickProfile}
              className={`absolute flex items-center right-0 ml-2 mr-5  rounded-lg px-3 py-2 cursor-pointer transition-all duration-300
                ${
                  isDown ? "bg-slate-300 ring-2 ring-slate-400" : "bg-slate-400"
                }
                `}
            >
              <p className="text-md px-2 mr-2 hidden sm:flex">
                {localStorage.getItem("username")}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              <div className="py-2 ps-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`h-3 ${
                    isDown && "-rotate-180"
                  } transition-all duration-500`}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>

        <div className="cust-container p-5 pr-0 grid grid-cols-12 text-cust-blue bg-white">
          <div className="col-span-12 flex justify-center items-center p-3 mb-5">
            <h1 className="font-bold text-4xl">
              Pengenalan Profesi dalam Pengembangan Web
            </h1>
          </div>
          <div className="col-span-8 pr-2 h-[85vh] overflow-y-auto">
            {activeComponent === 1 && <HTML_M1_1 />}
            {activeComponent === 2 && <HTML_M1_2 />}
            {activeComponent === 3 && <HTML_M1_3 />}
            {activeComponent === 4 && <HTML_M1_4 />}
          </div>
          <div className="col-span-4 flex flex-col h-[85vh] gap-y-3 px-4 pr-5">
            <div className="flex flex-col gap-y-1">
              <div>
                <div
                  onClick={handleClickMateri}
                  className="bg-gray-500 text-white flex flex-row justify-between cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md"
                >
                  Profesi dalam Pengembangan Web
                  <span className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className={`h-3 ${
                        isDownMateri && "-rotate-180"
                      } transition-all duration-500`}
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`flex flex-col gap-y-1 justify-center overflow-hidden
                ${
                  isDownMateri
                    ? "max-h-full mt-1 mb-3 transition-all duration-500"
                    : "max-h-0 mb-0 mt-0 transition-all duration-150"
                }
              `}
                >
                  <div className="w-11/12 mx-auto pl-3 pr-3 py-2 text-base font-medium rounded-md bg-gray-400 text-white">
                    Pendahuluan
                  </div>
                  <div className="w-11/12 mx-auto pl-3 pr-3 py-2 text-base font-medium rounded-md bg-gray-400 text-white">
                    Profesi dalam Pengembangan Website
                  </div>
                  <div className="w-11/12 mx-auto pl-3 pr-3 py-2 text-base font-medium rounded-md bg-gray-400 text-white">
                    Pengenalan Website
                  </div>
                  <div className="w-11/12 mx-auto pl-3 pr-3 py-2 text-base font-medium rounded-md bg-gray-400 text-white">
                    Pengenalan URL
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md">
                Alur pengembangan aplikasi web.
              </div>
              <div className="bg-gray-200 cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md">
                Pengenalan HTML.
              </div>
              <div className="bg-gray-200 cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md">
                Jenis list dalam HTML.
              </div>
              <div className="bg-gray-200 cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md">
                Penggunaan hyperlink dalam HTML.
              </div>
              <div className="bg-gray-200 cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md">
                Penggunaan tabel dalam HTML.
              </div>
              <div className="bg-gray-200 px-2 py-3 text-base font-medium rounded-md">
                Jenis input dan formulir dalam HTML.
              </div>
            </div>
            <div className="flex flex-row justify-between mt-5 pb-5">
              <button
                type="button"
                onClick={handlePrev}
                className={`text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2
                ${
                  activeComponent === 1 &&
                  "opacity-50 focus:ring-0 cursor-default"
                }
              `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-3 mt-0.5 mr-2 fill-white rotate-180"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
                Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={`text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2
                  ${
                    activeComponent === 4
                      ? "bg-green-500 hover:bg-green-700"
                      : ""
                  }
              `}
              >
                {activeComponent === 4 ? (
                  <>
                    Finish
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-3 mt-0.5 ml-2 fill-white"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </>
                ) : (
                  <>
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-3 mt-0.5 ml-2 fill-white"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Material;
