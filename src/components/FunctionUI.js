import React from "react";
import utils from "../utils/utils";
import { convertDataType, isObject } from "../utils/helpers";

export default class FunctionUI extends React.Component {
   constructor() {
      super();
      this.state = {
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "", // waht we want answer to return
      };
   }
   toggleCodeDisplay() {
      this.setState({ isCodeDisplayed: !this.state.isCodeDisplayed }); // quick true and false toggle bang opposite of what it presently is
      //console.log("clicked!!!");
      //if (this.state.isCodeDisplayed === false) {
      // this.setState({ isCodeDisplayed: true });
      //} else {
      // this.setState({ isCodeDisplayed: false });
      //}
   }

   getUserInput() {
      const props = this.props;
      console.log(props.name);
      const inputValues = [];
      for (let i = 0; i < props.inputs; i++) {
         const element = document.getElementById(`input-${props.name}-${i}`);
         const value = element.value;
         const convertedInputValues = convertDataType(value); // reason in 4 state happen to every input
         inputValues.push(convertedInputValues); // vscode used function defined elswhere vs auto imported
      }
      console.log(inputValues);
      const result = utils[props.name](...inputValues); // use bracket if var know name unique inp val array extract from array spread operator in func
      console.log(result);
      this.setState({
         result: JSON.stringify(result),
         isResultDisplayed: true,
      }); // [7,8] // "[7,8]" string react render string on page they just say [7,8]
      //utils.add(inputValues) run and save inside of state
      console.log(
         isObject({ firstName: "Mike" }), //true dont need quotes if we are not parsing
         isObject({}), //true
         isObject([2, 3]), //false
         isObject(null), //false
         isObject(() => true) //false
      );
   }

   render() {
      const props = this.props;

      const renderInputs = (num) => {
         const inputs = [];
         for (let i = 0; i < num; i++) {
            // input-subtract-0
            const id = `input-${props.name}-${i}`; //unique string id made with this string literal const iteration
            //render some JSX
            inputs.push(
               <input
                  type="text"
                  className="form-control inline-action"
                  key={id}
                  id={id}
               />
            );
         }

         return inputs;
      };

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <p className="name" onClick={() => this.toggleCodeDisplay()}>
               <b>{props.name}</b>&nbsp;-&nbsp;{props.desc}
            </p>
            {this.state.isCodeDisplayed && (
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )}
            <div className="actions float-right">
               {renderInputs(props.inputs)}

               <button
                  className="btn btn-primary inline-action"
                  onClick={() => this.getUserInput()}
               >
                  Run
               </button>
            </div>
            <div className="clearfix mb-3"></div>
            {this.state.isResultDisplayed && (
               <div className="alert alert-primary">{this.state.result}</div>
            )}
         </div>
      );
   }
}
