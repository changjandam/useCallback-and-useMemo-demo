import { full, center } from './Center.module.css';

const Center = (props) => {
  return (
    <div className={full}>
      <div className={center}>{props.children}</div>
    </div>
  );
};

export default Center;
