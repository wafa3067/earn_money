import { useState } from "react";
import TextComponent from "./text_component";
import SizedBox from "./sized_box";

function HeaderText() {
  const [check, setCheck] = useState(false);
  const ActiveCheck = () => {
    if (check == true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  return (
    <div
      style={
        {
          // backgroundColor: "#F5F5F7",
          // opacity: 0.2,
        }
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"AGENCY NAME"}
          width={182}
          checking={true}
          line={true}
          backgroundColor={"#F5F5F7"}
        />
        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"CONTACT NAME"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />

        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"PHONE NUMBER"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />
        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"TREADER EMAIL"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />

        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"City"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />
        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"FEES"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />
        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"STATUS"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />
        <SizedBox width={20} />
        <TextComponent
          active={check}
          ClickCheck={ActiveCheck}
          activeCheck={true}
          text={"ACTION"}
          width={182}
          checking={false}
          line={true}
          backgroundColor={"#F5F5F7"}
        />
      </div>
    </div>
  );
}

export default HeaderText;
