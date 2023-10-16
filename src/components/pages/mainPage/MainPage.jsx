import Sidebar from "../../sidebar/Sidebar";

const MainPage = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <main className="content">
          <div className="content__wrapper">
            <h1 className="content__title">
              Михаил <br /> <span>Воронин</span>
            </h1>
            <h2 className="content__descr">
              Привет, <span>я Михаил Воронин</span> , мне 25 лет. <br />Я full-stack developer .NET
              | React
            </h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
