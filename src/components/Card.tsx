import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type CardType = {
  className?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          text-align: left;
          font-size: var(--paragraph-04-size);
          color: var(--colors-black-100);
          font-family: var(--paragraph-03);
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
          padding: var(--padding-5xl);
          box-sizing: border-box;
          position: relative;
          gap: var(--gap-3xl);
          max-width: 100%;
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
            overflow: hidden;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-5xl);
              background-color: var(--color-tomato-200);
              mix-blend-mode: normal;
            `}
          />
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-5xl);
          `}
        >
          <div
            className={css`
              height: 60px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-9xs) 0px 0px;
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                width: 56px;
                height: 56px;
                position: relative;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <img
                className={css`
                  width: 100%;
                  height: 100%;
                  z-index: 2;
                  object-fit: contain;
                  position: absolute;
                  left: 0px;
                  top: 16px;
                  transform: scale(1.857);
                `}
                loading="lazy"
                alt=""
                src="/icon-2@2x.png"
              />
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-11xs);
              min-width: 129px;
              z-index: 2;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 16px;
                color: var(--color-gray-100);
              `}
            >
              WEEK 1
            </div>
            <b
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--headline-04-size);
                line-height: 28px;
              `}
            >
              Body Weight
            </b>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 16px;
              `}
            >
              Workout 1 of 5
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-xs) var(--padding-5xl);
            position: relative;
            gap: var(--gap-base);
            z-index: 2;
            color: var(--color-gray-100);
          `}
        >
          <div
            className={css`
              height: 100%;
              width: 100%;
              position: absolute;
              margin: 0 !important;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              border-radius: var(--br-base);
              background-color: var(--colors-white-100);
            `}
          />
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-5xs) 0px 0px;
            `}
          >
            <img
              className={css`
                width: 24px;
                height: 24px;
                position: relative;
                object-fit: cover;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/icon-3@2x.png"
            />
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              min-width: 124px;
              z-index: 1;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 16px;
              `}
            >
              Next exercise
            </div>
            <b
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--paragraph-03-size);
                line-height: 24px;
                color: var(--colors-black-100);
              `}
            >
              Lower Strength
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
