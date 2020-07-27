import React from "react";
import { myContext } from "./my-context";

class Anton extends React.Component {
  render() {
    return (
      <div className="">
        Hello {this.context.fullName.firstName}{" "}
        {this.context.fullName.lastName}
      </div>
    );
  }
}
Anton.contextType = myContext;

export default Anton;

//1.Присваиваем главной компоненте с добавкой .contextType значение контекста - Anton.contextType = myContext;
//2.Используем внутри компоненты данные, полученный из главной компоненты через Provider - this.context
