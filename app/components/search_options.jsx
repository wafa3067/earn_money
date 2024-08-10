import React from "react";
import TextComponent from "./text_component";
import CheckBox from "./check_box";
import PropTypes from "prop-types";

function SearchOptions({ title, active, onPressed, data }) {
  return (
    <div>
      <div
        style={{
          left: 10,
          alignContent: "start",
          alignItems: "start",
          alignSelf: "start",
          paddingLeft: "20px",
        }}
      >
        <TextComponent
          checking={true}
          text={title}
          active={active}
          weight={"bold"}
          textcolor={"rgba(76, 78, 100, 0.87)"}
          ClickCheck={onPressed}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "35px",
          flexWrap: "wrap",
        }}
      >
        {data.map((e) => (
          <CheckBox title={e} />
        ))}
      </div>
    </div>
  );
}

SearchOptions.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  data: PropTypes.object, // count must be a number
  onPressed: PropTypes.func,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  arryFunc: PropTypes.func,

  onSelected: PropTypes.array, // onClick must be a function
};
export default SearchOptions;
