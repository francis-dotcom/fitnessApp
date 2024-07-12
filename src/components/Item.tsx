import { FunctionComponent, type CSSProperties } from "react";
import { css } from "@emotion/css";

export type ItemType = {
  className?: string;
  icon?: string;
  dumbbellPlaceholder?: string;
  treadmill?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Item: FunctionComponent<ItemType> = ({
  className = "",
  icon,
  dumbbellPlaceholder,
  treadmill,
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
color: var(--colors-black-100);
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
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-base) var(--padding-base);
          position: relative;
          gap: var(--gap-xs);
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
            border-radius: var(--br-11xs);
          `}
        />
        <div
          className={css`
            align-self: stretch;
            height: 4px;
            position: relative;
            border-radius: var(--br-11xs);
            background: linear-gradient(133.34deg, #fd371f, #ff844b);
            z-index: 1;
          `}
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-7xs);
          `}
        >
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
            src={icon}
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
                gap: var(--gap-8xs);
                z-index: 1;
              `}
            >
              <b
                className={css`
                  position: relative;
                  line-height: 26px;
                  display: inline-block;
                  min-width: 27px;
                `}
              >
                {dumbbellPlaceholder}
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
                {treadmill}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
