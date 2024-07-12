import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import Item2 from "./Item2";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px var(--padding-4xs) var(--padding-5xl);
          box-sizing: border-box;
          gap: var(--gap-5xl);
          max-width: 100%;
          text-align: left;
          font-size: var(--headline-04-size);
          color: var(--colors-black-100);
          font-family: var(--paragraph-03);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-5xl) 0px 0px;
          row-gap: 20px;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
            min-width: 187px;
          `}
        >
          <b
            className={css`
              width: 255px;
              position: relative;
              line-height: 28px;
              display: inline-block;
            `}
          >
            Recent Plan
          </b>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--paragraph-03-size);
              line-height: 24px;
              color: var(--color-gray-100);
            `}
          >
            July, 2021
          </div>
        </div>
        <div
          className={css`
            width: 56px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-11xs) 0px 0px;
            box-sizing: border-box;
            margin-left: -16px;
            text-align: right;
            font-size: var(--paragraph-03-size);
            color: var(--colors-orange-100);
            @media screen and (max-width: 237px) {
              margin-left: 0;
            }
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 24px;
            `}
          >
            See All
          </b>
        </div>
      </div>
      <div
        className={css`
          width: 351px;
          overflow-x: auto;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-base);
          max-width: 100%;
          text-align: center;
          font-size: var(--paragraph-03-size);
        `}
      >
        <Item2 icon="/icon-4.svg" special="Special" />
        <Item2 icon="/icon-5.svg" special="Beach Rea…" />
        <Item2 icon="/icon-6@2x.png" special="Full - Body" />
        <div
          className={css`
            width: 80px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-base);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-mid) 0px var(--padding-5xs);
            `}
          >
            <div
              className={css`
                width: 55px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px 0px;
                box-sizing: border-box;
              `}
            >
              <div
                className={css`
                  height: 64px;
                  width: 64px;
                  position: relative;
                  flex-shrink: 0;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border-radius: var(--br-5xl);
                    background: linear-gradient(
                      135deg,
                      #69e0c7,
                      rgba(105, 224, 199, 0.6)
                    );
                    width: 100%;
                    height: 100%;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    width: 36px;
                    height: 36px;
                    z-index: 1;
                  `}
                  loading="lazy"
                  alt=""
                  src="/icon-7.svg"
                />
              </div>
            </div>
          </div>
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 24px;
            `}
          >
            Challenged
          </b>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
