import { useState } from "react";
import { getMaterial } from "../data/dataMaterial";
import ModalConfirm from "../Component/ModalConfirm";
import NavMateri from "../Component/DetailMaterialComp/NavMateri";
import MateriBar from "../Component/DetailMaterialComp/MateriBar";
import { verifyToken } from "../Helpers/AuthHelpers";
import { useParams } from "react-router-dom";

const Material = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const [activeJudul, setActiveJudul] = useState(1);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  let { courseId } = useParams();

  const handleActiveComponent = (value) => {
    setActiveComponent(value);
  };

  const handleModalConfirmValue = (data) => {
    setShowModalConfirm(false);
    document.body.style.overflowY = "auto";
  };

  const handleModalConfirmisShow = (data) => {
    setShowModalConfirm(data);
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";
  };

  const isLogin = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
      return true;
    }
    return window.location.replace("/auth/login");
  };

  const getMateriOnCourse = () => {
    let materi = null;
    getMaterial(courseId).forEach((item) => {
      if (item.id === activeJudul) {
        materi = item.file;
      }
    });
    return materi;
  };

  const getIdJudul = (id) => {
    setActiveJudul(id);
  };

  return (
    <>
      {isLogin()}
      <div className="">
        {showModalConfirm &&
          (window.scrollTo(0, 0),
          (document.body.style.overflowY = "hidden"),
          (
            <ModalConfirm
              text={
                "Apakah anda yakin telah membaca materi & siap menyelesaikan quiz ? "
              }
              sendValue={handleModalConfirmValue}
            />
          ))}
      </div>
      <div className="cust-outer-container bg-cust-beige">
        <NavMateri />
        <div className="cust-container p-5 pr-0 grid grid-cols-12 h-fit text-cust-blue bg-white">
          <div className="col-span-12 flex justify-center items-center p-3 mb-5">
            <h1 className="font-bold text-4xl">
              Pengenalan Profesi dalam Pengembangan Web
            </h1>
          </div>
          <div className="col-span-8 pr-2 h-[85vh] overflow-y-auto">
            {getMateriOnCourse().map((item, key) => {
              return (
                <div key={key}>
                  {activeComponent === key + 1 && item.page}
                </div>
              );
            })}
          </div>
          <MateriBar
            sendValue={{
              getIdJudul: getIdJudul,
              handleActiveComponent: handleActiveComponent,
              handleModalConfirmisShow: handleModalConfirmisShow,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Material;
