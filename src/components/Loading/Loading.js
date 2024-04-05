import { GoDotFill } from "react-icons/go";

function Loading() {
  return (
    <div className="loading">
      <div className="loading__icons">
        <GoDotFill size={"1.3rem"} className="dot-1" />
        <GoDotFill size={"1.3rem"} className="dot-2" />
        <GoDotFill size={"1.3rem"} className="dot-3" />
        <GoDotFill size={"1.3rem"} className="dot-4" />
      </div>
    </div>
  );
}

export default Loading;
