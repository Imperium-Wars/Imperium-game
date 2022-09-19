import React, { FunctionComponent } from "react";

type TerritoryContentProps = {
  title: string;
  text: string;
};

const TerritoryContent: FunctionComponent<TerritoryContentProps> = ({
  title,
  text,
}) => {
  return (
    <p>
      <span style={{ color: "blanchedalmond" }}>{title}&nbsp;:&nbsp;</span>
      {text}
    </p>
  );
};

export default TerritoryContent;
