import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const RicardoWrapper: React.FC = (props) => {
  const UI =  useSelector((state:RootState) => state.uiLoading);

  const {uiTheme} = UI;
  return <div className={`ricardo-wrapper ${uiTheme && 'dark'}`}>{props.children}</div>;
};

export default RicardoWrapper;
