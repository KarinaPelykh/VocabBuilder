export const Container = ({ children }) => {
  return (
    <div className="mx-[auto] md:h-screen  md:px-[32px]   xl:p-[20px]">
      {children}
    </div>
  );
};
// .container {
//   margin-left: auto;
//   margin-right: auto;
// }

// @media (min-width: 768px) {
//   .container {
//     height: 100vh;
//     padding-left: 32px;
//     padding-right: 32px;
//   }
// }

// @media (min-width: 1280px) {
//   .container {
//     padding: 20px;
//   }
// }
