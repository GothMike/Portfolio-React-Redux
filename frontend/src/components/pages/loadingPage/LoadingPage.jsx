import Sidebar from "../../sidebar/Sidebar";

const LoadingPage = () => {
  return (
    <>
      <Sidebar />
      <main className={`content content__full`}></main>
    </>
  );
};

export default LoadingPage;
