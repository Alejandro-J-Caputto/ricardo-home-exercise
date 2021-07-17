import MainNav from "./MainNav";

const RicardoWrapper: React.FC = (props) => {
  return (
    <div className="ricardo-wrapper">
      <MainNav />
      {props.children}
    </div>
  );
};

export default RicardoWrapper;
