<<<<<<< HEAD
import { useRef } from 'react'
import ChildComp from './ChildComp'
import Element from './Element'
import UseLayoutEffect from './UseLayoutEffect'
import UseRef from './UseRef'
import UpLoad from './Upload'
export default function App() {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        childRef.current.changeVal(99);
        //1
    }
    return (
        <>
            <h1>1、useImperativeHandle</h1>
            {/* 此处注意需要将childRef通过props属性从父组件中传给自己 cRef={childRef} */}
            <ChildComp cRef={childRef} />
            <button onClick={updateChildState}>触发子组件方法</button>

            <h1>2、useRef</h1>
            <UseRef></UseRef>

            <h1>3、UseLayoutEffect</h1>
            

            <UseLayoutEffect></UseLayoutEffect>

            <h1>4、Element</h1>

            <Element></Element>

            <h1>4、Upload</h1>
            <UpLoad></UpLoad>


        </>
    )
=======
import Father1 from "./Father1";
import Father2 from "./Father2";
import Son1 from "./Son1";
import Son2 from "./Son2";
import Class from "./Class";

function App() {
  return (
    <Class>
      <Father1>
        <Son1></Son1>
      </Father1>
      <Father2>
        <Son2></Son2>
      </Father2>
    </Class>
  );
>>>>>>> e2ec9d7dfd242cb2a0ea3aeb9c0520cfb36a71d9
}

export default App;
