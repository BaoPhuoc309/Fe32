import "./style.css";

const Hello = ({content, gender, children}) => {
  return (
    <div className="title">
      {children}
      {content}- Gioi Tinh:{gender}
    </div>
  );
};

export default Hello;
