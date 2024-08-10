import { useEffect, useState } from "react";
import TextComponent from "./text_component";
import SizedBox from "./sized_box";
import Action from "./action";
import Status from "./status";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/api/fetchApi";
import { Dialog } from "@mui/material";
import { setField } from "../redux/features/accountSlice";

function BodyComponent({
  name,
  contactName,
  phone,
  email,
  fees,
  city,
  status,
  id,
}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const ch = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const account = useSelector((state) => state.create);

  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (ch === "idle") {
      dispatch(fetchUsers()); // Fetch users when component mounts
    }
  }, [ch, dispatch]);

  if (ch === "loading") {
    return (
      <div>
        <Dialog title="Loding" color="red" maxWidth="lg" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const ActiveCheck = () => {
    if (check == true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  // console.log(
  //   statuses.map("active") == true
  //     ? "Active"
  //     : statuses.includes("inactive") == true
  //     ? "Inactive"
  //     : "Pending"
  // );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // overflow: "scroll",
      }}
    >
      <TextComponent
        active={check}
        ClickCheck={ActiveCheck}
        activeCheck={true}
        text={name}
        width={182}
        checking={true}
        textcolor={"#4C4E64"}
        line={false}
      />
      <SizedBox width={20} />
      <TextComponent
        active={check}
        ClickCheck={ActiveCheck}
        activeCheck={false}
        text={contactName}
        textcolor={"#4C4E64"}
        width={182}
        checking={false}
        line={false}
      />
      <SizedBox width={20} />
      <TextComponent
        active={check}
        ClickCheck={ActiveCheck}
        activeCheck={false}
        text={phone}
        textcolor={"#4C4E64"}
        width={182}
        checking={false}
        line={false}
      />

      <SizedBox width={20} />
      <TextComponent
        active={check}
        ClickCheck={ActiveCheck}
        activeCheck={false}
        text={email}
        textcolor={"#5A5FE0"}
        width={182}
        checking={false}
        line={false}
      />
      <SizedBox width={20} />
      <TextComponent
        active={check}
        ClickCheck={ActiveCheck}
        activeCheck={false}
        text={city}
        textcolor={"#4C4E64"}
        width={182}
        checking={false}
        line={false}
      />
      <SizedBox width={20} />
      <TextComponent
        active={check}
        ClickCheck={ActiveCheck}
        activeCheck={false}
        text={fees}
        width={182}
        textcolor={"#4C4E64"}
        checking={false}
        line={false}
      />

      <SizedBox width={20} />
      <Status
        width={188}
        title={
          status === "active"
            ? "Active"
            : status === "inactive"
            ? "Inactive"
            : "Pending"
        }
        textcolor={
          status === "active"
            ? "#72E128"
            : status === "inactive"
            ? "#FF4D49"
            : "#FDB528"
        }
        backgroundColor={
          status === "active"
            ? "rgb(238,251,229)"
            : status === "inactive"
            ? "rgb(255,234,233)"
            : "rgb(255,246,229)"
        }
      />

      <SizedBox width={20} />
      <div>
        <Action
          width={188}
          editClick={() => {
            dispatch(setField(id.name));
            dispatch(setField(id.userName));
            dispatch(setField(id.number));
            dispatch(setField(id.email));
            dispatch(setField(id.address));
            dispatch(setField(id.countryState));
            dispatch(setField(id.zipCode));
            dispatch(setField(id.country));
            dispatch(setField(id.activeBranche));
            dispatch(setField(id.agencyContractContract));
            dispatch(setField(id.agencyFeesContract));
            dispatch(setField(id.backOfficeContractContract));
            dispatch(setField(id.backOfficeFeesContract));
            dispatch(setField(id.projectLeaderContractContract));
            dispatch(setField(id.projectLeaderFeesContract));
            dispatch(setField(id.subAgencyManagerContractContract));
            dispatch(setField(id.subAgencyManagerFeesContract));
            dispatch(setField(id.salesPartnerContractContract));
            dispatch(setField(id.salesPartnerFeesContract));
            dispatch(setField(id.agencyFeesFixed));
            dispatch(setField(id.backOfficeFeesFixed));
            dispatch(setField(id.projectLeaderFeesFixed));
            dispatch(setField(id.subAgencyManagerFeesFixed));
            dispatch(setField(id.salesPartnerFeesFixed));
            dispatch(setField(id.contractDuration));
            dispatch(setField(id.numberofContracts));
          }}
        />
      </div>
    </div>
  );
}

export default BodyComponent;
