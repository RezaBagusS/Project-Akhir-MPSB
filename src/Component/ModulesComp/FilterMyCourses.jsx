// const FilterMyCourses = ({ setFilterAll, setFilterDone, setFilterOnProgress }) => {

//   const styleFalse = `block py-2 px-4 cursor-pointer bg-white hover:bg-blue-200 text-xs sm:text-base hover:font-medium hover:ring-1 rounded-lg drop-shadow-sm`;
//   const styleTrue = `block py-2 px-4 cursor-pointer bg-blue-200 text-xs sm:text-base font-medium ring-1 rounded-lg drop-shadow-sm`;

//   return (
//     <div className="flex flex-wrap justify-start gap-5 align-middle font-normal">
//       <div
//         onClick={() => {
//           setFilterAll.setGetFilterAll(true);
//           setFilterOnProgress.setGetFilterOnProgress(false);
//           setFilterDone.setGetFilterDone(false);
//         }}
//         className={setFilterAll.getFilterAll ? styleTrue : styleFalse}
//       >
//         <p>Semua</p>
//       </div>

//       <div
//         onClick={() => {
//           setFilterAll.setGetFilterAll(false);
//           setFilterOnProgress.setGetFilterOnProgress(true);
//           setFilterDone.setGetFilterDone(false);
//         }}
//         className={setFilterOnProgress.getFilterOnProgress ? styleTrue : styleFalse}
//       >
//         <p className="whitespace-nowrap">Sedang Dipelajari</p>
//       </div>

//       <div
//         onClick={() => {
//           setFilterAll.setGetFilterAll(false);
//           setFilterOnProgress.setGetFilterOnProgress(false);
//           setFilterDone.setGetFilterDone(true);
//         }}
//         className={setFilterDone.getFilterDone ? styleTrue : styleFalse}
//       >
//         <p>Selesai</p>
//       </div>
//     </div>
//   );
// };

// export default FilterMyCourses;
