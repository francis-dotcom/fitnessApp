import { FunctionComponent, type CSSProperties } from "react";
import { css } from "@emotion/css";

export type Item1Type = {
  className?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Item1: FunctionComponent<Item1Type> = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
}) => {
  return (
    <div
      className={[
        css`width: 112px;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
text-align: left;
font-size: var(--headline-05-size);
color: var(--colors-white-100);
font-family: var(--paragraph-03);
position: ${propPosition}
top: ${propTop}
left: ${propLeft}
`,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          flex: 1;
          box-shadow: 0px 14px 42px rgba(101, 207, 88, 0.48);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-base);
          position: relative;
          gap: var(--gap-7xs);
        `}
      >
        <div
          className={css`
            width: 100%;
            height: 100%;
            position: absolute;
            margin: 0 !important;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: var(--br-5xl);
            background: linear-gradient(
              135deg,
              #65cf58,
              rgba(101, 207, 88, 0.6)
            );
          `}
        />
        <img
          className={css`
            width: 24px;
            height: 24px;
            position: relative;
            object-fit: contain;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/icon@2x.png"
        />
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
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-5xl) 0px 0px;
              gap: var(--gap-9xs);
              z-index: 1;
            `}
          >
            <b
              className={css`
                position: relative;
                line-height: 26px;
                display: inline-block;
                min-width: 28px;
              `}
            >
              628
            </b>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-6xs) 0px 0px;
                font-size: var(--paragraph-04-size);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 16px;
                  display: inline-block;
                  min-width: 24px;
                `}
              >
                Kcal
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              opacity: 0.6;
              mix-blend-mode: normal;
              z-index: 1;
              font-size: var(--paragraph-03-size);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              Dumbbell
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item1;
