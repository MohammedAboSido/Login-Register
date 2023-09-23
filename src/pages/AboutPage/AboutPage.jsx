import { useEffect, useRef } from "react";
import Header from "./../../components/Header/Header";

const AboutPage = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useEffect(() => {
    ref1.current.focus();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <input
          ref={ref1}
          onChange={() => {
            ref2.current.focus();
          }}
        />
        <input ref={ref2} onChange={() => ref3.current.focus()} />
        <input ref={ref3} onChange={() => ref4.current.focus()} />
        <input ref={ref4} onChange={() => ref1.current.focus()} />
      </div>
    </>
  );
};

export default AboutPage;
