import { full, center } from './Center.module.css';

const Center = (props) => {
  return (
    <div className={full}>
      <div classname={center}>{props.children}</div>
    </div>
  );
};

export default Center;
