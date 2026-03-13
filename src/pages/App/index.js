import css from "./style.module.css";
import ToolBar from "../../components/ToolBar";
import CoursePage from "../CoursePage";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import SiderBar from "../../components/Sidebar";
import { Component } from "react";
import OrderPage from "../OrderPage";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return {
        showSideBar: !prevState.showSideBar,
      };
    });
  };

  render() {
    return (
      <div>
        <ToolBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <SiderBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <div>
            <Routes>
              <Route path="/orders" Component={OrderPage} />
              <Route path="/" Component={CoursePage} />
            </Routes>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
