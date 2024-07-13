import { FunctionComponent, type CSSProperties } from "react";
import { css } from "@emotion/css";

export type Item3Type = {
  className?: string;
  avatars2?: string;
  alfredOwen?: string;
  workouts?: string;
  h20Min?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Item3: FunctionComponent<Item3Type> = ({
  className = "",
  avatars2,
  alfredOwen,
  workouts,
  h20Min,
  propTop,
}) => {
  return (
    <div
      className={[
        css`
          position: absolute;
          top: 758px;
          left: 24px;
          width: 327px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          z-index: 4;
          text-align: left;
          font-size: var(--headline-05-size);
          color: var(--colors-black-100);
          font-family: var(--headline-05);
          top: ${propTop};
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-5xs);
          box-sizing: border-box;
          position: relative;
          gap: var(--gap-base);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            height: 100%;
            width: 100%;
            position: absolute;
            margin: 0 !important;
            top: 0px;
            right: -1.5px;
            bottom: -1.5px;
            left: 0px;
            border-radius: var(--br-17xl);
            border: 1.5px solid var(--color-silver);
            box-sizing: border-box;
            opacity: 0.2;
            mix-blend-mode: normal;
          `}
        />
        <img
          className={css`
            height: 56px;
            width: 56px;
            position: relative;
            object-fit: contain;
            min-height: 56px;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src={avatars2}
        />
        <div
          className={css`
            width: 122px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-10xs) 0px 0px;
            box-sizing: border-box;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              z-index: 1;
            `}
          >
            <b
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 26px;
              `}
            >
              {alfredOwen}
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
              {workouts}
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-base) 0px 0px;
            font-size: var(--paragraph-03-size);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-9xs);
              z-index: 1;
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                object-fit: cover;
                min-height: 24px;
              `}
              loading="lazy"
              alt=""
              src="/icons--light--shoerun@2x.png"
            />
            <b
              className={css`
                position: relative;
                line-height: 24px;
                display: inline-block;
                min-width: 65px;
              `}
            >
              {h20Min}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item3;