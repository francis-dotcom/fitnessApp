import { FunctionComponent } from "react";
import Item1 from "./Item1";
import Item from "./Item";
import { css } from "@emotion/css";

export type ActivityIconsType = {
  className?: string;
};

const ActivityIcons: FunctionComponent<ActivityIconsType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          width: 351px;
          overflow-x: auto;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-5xl);
          max-width: 100%;
          text-align: left;
          font-size: var(--headline-05-size);
          color: var(--colors-white-100);
          font-family: var(--headline-05);
        `,
        className,
      ].join(" ")}
    >
      <Item1 />
      <Item
        icon="/icon-1@2x.png"
        dumbbellPlaceholder="235"
        treadmill="Treadmill"
      />
      <Item
        icon="/icons--bold--rope@2x.png"
        dumbbellPlaceholder="432"
        treadmill="Rope"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
      />
    </div>
  );
};

export default ActivityIcons;