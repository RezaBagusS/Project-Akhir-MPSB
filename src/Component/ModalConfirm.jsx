import { useParams } from "react-router-dom";
import { getMaterial } from "../data/dataMaterial";

const ModalConfirm = ({ text, sendValue }) => {
  const { courseId } = useParams();

  const handleValue = (value) => {
    if (!value) {
      sendValue.handleModalConfirmValue(value);
    } else {
      getMaterial(courseId).length == sendValue.getActiveJudul() ? 
      window.location.replace(`/dashboard/mycourses/${courseId}/quiz/final`) 
      :
      window.location.replace(`/dashboard/mycourses/${courseId}/quiz/${sendValue.getActiveJudul()}`);
    }
  };

  return (
    <div className="absolute z-50 w-full h-full grid justify-center items-center bg-black bg-opacity-80">
      <div
        id="popup-modal"
        tabIndex="-1"
        className=" z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() => handleValue(false)}
              className="absolute top-3 right-2.5 text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-800 dark:text-gray-800">
                {text}
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={() => handleValue(true)}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yaa, saya yakin
              </button>
              <button
                data-modal-hide="popup-modal"
                onClick={() => handleValue(false)}
                type="button"
                className="text-gray-800 bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-800 focus:z-10 dark:bg-gray-700 dark:text-gray-800 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Tidak, Batalkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
