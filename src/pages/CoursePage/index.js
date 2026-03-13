import React, { Component } from "react";
import Lesson from "../../components/Lesson";
import LessonControls from "../../components/LessonControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios.orders";
import Spinner from "../../components/General/Spinner";

const LEVEL_PRICES = {
  primary: 150,
  intermediate: 200,
  advanced: 170,
  proficiency: 350,
  ielts: 500,
  toefl: 600,
};
const LEVEL_NAMES = {
  primary: "Анхан шат",
  intermediate: "Дунд шат",
  advanced: "Ахисан дунд шат",
  proficiency: "Гүнзгий шат",
  ielts: "IELTS бэлтгэл",
  toefl: "TOEFL бэлтгэл",
};

class CoursePage extends Component {
  state = {
    levels: {
      primary: 0,
      intermediate: 0,
      advanced: 0,
      proficiency: 0,
      ielts: 0,
      toefl: 0,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
  };

  componentDidMount = () => {};

  levelsNemeh = (type) => {
    const newLevels = { ...this.state.levels };
    newLevels[type]++;
    const newPrice = this.state.totalPrice + LEVEL_PRICES[type];
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      levels: newLevels,
    });
  };

  levelsHasah = (type) => {
    if (this.state.levels[type] > 0) {
      const newLevels = { ...this.state.levels };
      newLevels[type]--;
      const newPrice = this.state.totalPrice - LEVEL_PRICES[type];
      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        levels: newLevels,
      });
    }
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  continueOrder = () => {
    const course = {
      name: "",
      schedule: "",
      teacher: "",
      image: "",
      studentCount: 0,
      levels: this.state.levels,
      price: this.state.totalPrice,
    };
    this.setState({ loading: true });
    axios
      .post("/courses.json", course)
      .then((response) => {})
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const disabledLevels = { ...this.state.levels };
    for (let key in disabledLevels) {
      disabledLevels[key] = disabledLevels[key] <= 0;
    }

    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              levelNames={LEVEL_NAMES}
              levels={this.state.levels}
              price={this.state.totalPrice}
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>
        <Lesson levels={this.state.levels} />
        <LessonControls
          levelNames={LEVEL_NAMES}
          price={this.state.totalPrice}
          disabledLevels={disabledLevels}
          levelsNemeh={this.levelsNemeh}
          levelsHasah={this.levelsHasah}
          disabled={!this.state.purchasing}
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}
export default CoursePage;
