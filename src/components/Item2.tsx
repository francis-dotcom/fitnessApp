import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type Item2Type = {
  className?: string;
  icon?: string;
  special?: string;
};

const Item2: FunctionComponent<Item2Type> = ({
  className = "",
  icon,
  special,
}) => {
  return (
    <div
      className={[
        css`
          width: 80px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-base);
          text-align: center;
          font-size: var(--paragraph-03-size);
          color: var(--colors-black-100);
          font-family: var(--paragraph-03);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-5xs);
        `}
      >
        <div
          className={css`
            border-radius: var(--br-5xl);
            background: linear-gradient(133.34deg, #fd371f, #ff844b);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-sm);
          `}
        >
          <div
            className={css`
              height: 64px;
              width: 64px;
              position: relative;
              border-radius: var(--br-5xl);
              background: linear-gradient(133.34deg, #fd371f, #ff844b);
              display: none;
            `}
          />
          <img
            className={css`
              height: 36px;
              width: 36px;
              position: relative;
              z-index: 1;
            `}
            loading="lazy"
            alt=""
            src={icon}
          />
        </div>
      </div>
      <b
        className={css`
          align-self: stretch;
          position: relative;
          line-height: 24px;
        `}
      >
        {special}
      </b>
    </div>
  );
};

export default Item2;
