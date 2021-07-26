const RicardoWrapper: React.FC<{ theme: boolean }> = (props) => {
  return (
    <div className={`ricardo-wrapper ${props.theme && "dark"}`}>
      {props.children}
    </div>
  );
};

export default RicardoWrapper;
