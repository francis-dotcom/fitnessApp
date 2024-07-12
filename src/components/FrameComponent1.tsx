import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px var(--padding-base);
          gap: var(--gap-5xl);
          text-align: left;
          font-size: var(--paragraph-03-size);
          color: var(--color-gray-100);
          font-family: var(--paragraph-03);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          height: 56px;
          width: 56px;
          position: relative;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          alt=""
          src="/avatar@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: 40px;
            left: 40px;
            width: 16px;
            height: 16px;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/icon1.svg"
        />
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-11xs) 0px 0px;
          box-sizing: border-box;
          min-width: 109px;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 24px;
              z-index: 1;
            `}
          >
            Hello Linh!
          </div>
          <a
            className={css`
              text-decoration: none;
              align-self: stretch;
              position: relative;
              font-size: var(--headline-04-size);
              line-height: 28px;
              font-weight: 700;
              color: var(--colors-black-100);
            `}
          >
            Thursday, 08 July
          </a>
        </div>
      </div>
      <img
        className={css`
          height: 56px;
          width: 56px;
          position: relative;
          object-fit: contain;
          min-height: 56px;
        `}
        loading="lazy"
        alt=""
        src="/button@2x.png"
      />
    </div>
  );
};

export default FrameComponent1;
