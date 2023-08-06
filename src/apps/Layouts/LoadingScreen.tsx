import { ProgressBar } from "primereact/progressbar";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ width: "200px" }}>
        <img
          className="mb-3"
          src="https://res.cloudinary.com/ddksrkond/image/upload/v1687315829/samu/download-removebg-preview_iidvap.png"
          alt=""
        />

        <ProgressBar
          mode="indeterminate"
          style={{ height: "3px", background: "transparent" }}
          color="red"
        ></ProgressBar>
      </div>
    </div>
  );
};

export default LoadingScreen;
