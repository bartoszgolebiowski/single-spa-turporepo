import React from "react";
import { Button } from "ui";
import * as config from "search";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

type Props = {
  name: string;
};

const Root = (props: Props) => {
  return (
    <div>
      {props.name}
      is mounted!
      <Button />
      <Parcel config={config} mountParcel={mountRootParcel} />
    </div>
  );
};

export default Root;
