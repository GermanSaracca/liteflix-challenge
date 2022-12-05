// import { useState, useEffect, createContext, ReactNode } from "react";

// export const modalsIds = {
//     ADD_MOVIE_MODAL_ID: 'ADD_MOVIE_MODAL_ID',
//     LOG_USER_MODAL_ID: 'LOG_USER_MODAL_ID',
// }
// type modalsIdsType = typeof modalsIds.ADD_MOVIE_MODAL_ID | typeof modalsIds.LOG_USER_MODAL_ID

// interface IModalContext {
//     modalId: string;
//     activeModal: modalsIdsType;
//     setActiveModal: (value: modalsIdsType) => void;
//   }

// export const ModalContext = createContext<IModalContext | null>(null);

// export const ModalProvider = ({children}: { children: ReactNode}) => {

//     const [activeModal, setActiveModal] = useState(null)

//     setActiveModal(3)

//     return (
//         <ModalContext.Provider
//             value={{
//                 setActiveModal
//             }}
//         >
//             {children}
//         </ModalContext.Provider>
//     )
// }
