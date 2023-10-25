import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toogleVisabilitySidebar } from "../../../redux/actions/sidebar";

import Sidebar from "../../sidebar/Sidebar";

const SkillsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleVisabilitySidebar(true));
  }, []);

  return (
    <>
      <Sidebar />
      <main className="content content__full">
        <section className="skills">
          <h2 className="skills__subheader">Frontend навыки</h2>
          <div className="skills__cards">
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-html.svg" alt="icon-html" />
              </div>
              <h3 className="skills__card-title">HTML5</h3>
              <p className="skills__card-descr">
                Язык разметки позволяет мне создавать структуру веб-страниц и размещать на них
                контент с учетом семантики и доступности.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-css.svg" alt="icon-css" />
              </div>
              <h3 className="skills__card-title">CSS3</h3>
              <p className="skills__card-descr">
                Язык стилей позволяет мне придавать сайтам или приложениям желаемый внешний вид,
                делая его красочным и привлекательным.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-scss.webp" alt="icon-scss" />
              </div>
              <h3 className="skills__card-title">SCSS / SASS</h3>
              <p className="skills__card-descr">
                Эти препроцессоры CSS позволяют мне более удобно и эффективно писать стили для
                веб-приложений, использовать переменные, вложенные правила и множество других
                функций.
              </p>
            </div>

            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-npm.svg" alt="icon-npm" />
              </div>
              <h3 className="skills__card-title">NPM</h3>
              <p className="skills__card-descr">
                Я использую этот менеджер пакетов для JavaScript, который используется для
                установки, управления и публикации библиотек и зависимостей в проектах.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-gulp.webp" alt="icon-gulp" />
              </div>
              <h3 className="skills__card-title">GULP</h3>
              <p className="skills__card-descr">
                Это инструмент для автоматизации задач в разработке, который позволяет мне
                оптимизировать рабочий процесс, включая компиляцию SCSS, минификацию JavaScript и
                многое другое.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-webpack.svg" alt="icon-webpack" />
              </div>
              <h3 className="skills__card-title">Webpack</h3>
              <p className="skills__card-descr">
                Этот инструмент для сборки приложений позволяет мне управлять зависимостями,
                бандлировать ресурсы и оптимизировать загрузку приложения.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-bootstrap.svg" alt="icon-bootstrap" />
              </div>
              <h3 className="skills__card-title">Bootstrap</h3>
              <p className="skills__card-descr">
                Этот фреймворк для разработки веб-приложений облегчает создание современных и
                адаптивных интерфейсов с использованием готовых компонентов и стилей.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-formik.webp" alt="icon-formik" />
              </div>
              <h3 className="skills__card-title">Formik</h3>
              <p className="skills__card-descr">
                Я использую Formik для создания и валидации форм, управления их состоянием и
                отправки данных на сервер.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-axios.webp" alt="icon-axios" />
              </div>
              <h3 className="skills__card-title">Axios</h3>
              <p className="skills__card-descr">
                Я использую эту библиотеку для выполнения HTTP-запросов к серверу и взаимодействия с
                внешними API
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-js.webp" alt="icon-js" />
              </div>
              <h3 className="skills__card-title">JavaScript</h3>
              <p className="skills__card-descr">
                С помощью JavaScript я создаю интерактивные и динамические элементы на веб-странице,
                обеспечиваю взаимодействие пользователя с контентом.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-react.svg" alt="icon-react" />
              </div>
              <h3 className="skills__card-title">React</h3>
              <p className="skills__card-descr">
                Эта JavaScript-библиотека позволяет мне разрабатывать эффективные и
                высокопроизводительные пользовательские интерфейсы.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-redux.svg" alt="icon-redux" />
              </div>
              <h3 className="skills__card-title">Redux</h3>
              <p className="skills__card-descr">
                Эта библиотека для управления состоянием приложения в React позволяет мне
                обеспечивать однозначный поток данных и эффективно управлять данными в приложении.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-git.svg" alt="icon-git" />
              </div>
              <h3 className="skills__card-title">Git</h3>
              <p className="skills__card-descr">
                Это система управления версиями, которая позволяет мне эффективно отслеживать и
                управлять изменениями в коде, сотрудничать с другими разработчиками и обеспечивать
                целостность проекта.
              </p>
            </div>
          </div>

          <h2 className="skills__subheader">Backend навыки</h2>
          <div className="skills__cards">
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-sharp.svg" alt="icon-sharp" />
              </div>
              <h3 className="skills__card-title">C#</h3>
              <p className="skills__card-descr">
                Я использую язык программирования C# для разработки веб-приложений, создания
                серверной логики и работы с базами данных, обеспечивая функциональность и надежность
                приложения.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-api.webp" alt="icon-api" />
              </div>
              <h3 className="skills__card-title">Web API</h3>
              <p className="skills__card-descr">
                Этот механизм позволяет мне разрабатывать и обслуживать интерфейсы программирования
                приложений для взаимодействия с клиентской частью приложения, обеспечивая передачу
                данных и функциональность через сеть.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-sql.webp" alt="icon-sql" />
              </div>
              <h3 className="skills__card-title">SQL</h3>
              <p className="skills__card-descr">
                С помощью SQL я выполняю запросы к базам данных, создаю и изменяю таблицы,
                обеспечивая хранение и управление данными приложения.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-EF.webp" alt="icon-EF" />
              </div>
              <h3 className="skills__card-title">Entity Framework</h3>
              <p className="skills__card-descr">
                Этот фреймворз позволяет мне упростить работу с базами данных, включая создание,
                обновление и взаимодействие с таблицами.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-NET.svg" alt="icon-NET" />
              </div>
              <h3 className="skills__card-title">ASP.NET </h3>
              <p className="skills__card-descr">
                Этот фреймворк для создания веб-приложений обеспечивает разработку серверных
                приложений, включая работу с HTTP-запросами, авторизацией и многое другое.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-LINQ.webp" alt="icon-LINQ" />
              </div>
              <h3 className="skills__card-title">LINQ</h3>
              <p className="skills__card-descr">
                Этот язык интегрированных запросов позволяет мне написать выразительные запросы к
                данным в C# и работать с коллекциями объектов и базами данных.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-xUnit.webp" alt="icon-xUnit" />
              </div>
              <h3 className="skills__card-title">xUnit</h3>
              <p className="skills__card-descr">
                Это фреймворк для модульного тестирования, который помогает мне обеспечивать
                качество кода, проверяя его на соответствие ожиданиям.
              </p>
            </div>
            <div className="skills__card">
              <div className="skills__card-img">
                <img src="./icons/icon-swagger.svg" alt="icon-swagger" />
              </div>
              <h3 className="skills__card-title">Swagger</h3>
              <p className="skills__card-descr">
                Этот инструмент для документирования API позволяет мне создавать интерактивные
                справочники по доступным методам и параметрам, облегчая понимание и использование
                API.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkillsPage;
