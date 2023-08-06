import { Oval } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <Oval
      height={26}
      width={26}
      color="#fff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#f5f5f5"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default LoaderSpinner;
