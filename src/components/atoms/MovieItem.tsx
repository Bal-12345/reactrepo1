import { CSSProperties, FC } from "react";

const movieItemStyle = (selected?: boolean): CSSProperties => {
  return {
    backgroundColor: selected ? "#a9b3c4" : "#ececec",
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "blue",
  };
};

export type MovieItemProps = {
  id: string;
  title: string;
  selected?: boolean;
};

const MovieItem: FC<MovieItemProps> = ({ title, selected }) => {
  return (
    <div style={movieItemStyle(selected)} onClick={() => console.log(title)}>
      {title}
    </div>
  );
};

export default MovieItem;
