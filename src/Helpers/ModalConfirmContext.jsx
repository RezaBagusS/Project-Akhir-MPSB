import { createContext, useState, useContext } from "react";

const ModalConfirmContext = createContext();

export const useModalConfirmContext = () => useContext(ModalConfirmContext);

export const ModalConfirmProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(false);

  const updateIsOpen = (value) => {
    setIsOpen(value);
  };

  const updateValue = (value) => {
    setValue(value);
  }

  const ModalConfirmContextValue = {
    isOpen,
    value,
    updateIsOpen,
    updateValue,
  };

  return (
    <ModalConfirmContext.Provider value={ModalConfirmContextValue}>
      {children}
    </ModalConfirmContext.Provider>
  );
};