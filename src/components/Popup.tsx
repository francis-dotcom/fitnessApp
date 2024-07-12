import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type PopupType = {
  className?: string;
};

const Popup: FunctionComponent<PopupType> = ({ className = "" }) => {
  return (
    <section
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-37xl) var(--padding-5xl) var(--padding-118xl);
          position: relative;
          gap: var(--gap-13xl);
          z-index: 1;
          text-align: left;
          font-size: var(--headline-04-size);
          color: var(--colors-black-100);
          font-family: var(--paragraph-03);
        `,
        className,
      ].join(" ")}
    >
      <img
        className={css`
          width: 100%;
          height: 100%;
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/base1.svg"
      />
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
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-7xs) 0px 0px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              z-index: 1;
            `}
          >
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                object-fit: cover;
                min-height: 40px;
                flex-shrink: 0;
                z-index: 2;
              `}
              alt=""
              src="/avatars--1@2x.png"
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                object-fit: cover;
                min-height: 40px;
                flex-shrink: 0;
                z-index: 1;
                margin-left: -16px;
              `}
              alt=""
              src="/avatars--21@2x.png"
            />
            <img
              className={css`
                height: 40px;
                width: 40px;
                position: relative;
                object-fit: cover;
                min-height: 40px;
                flex-shrink: 0;
                margin-left: -16px;
              `}
              loading="lazy"
              alt=""
              src="/avatars--3@2x.png"
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
            padding: 0px var(--padding-27xl) 0px 0px;
            box-sizing: border-box;
            min-width: 109px;
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 28px;
              z-index: 1;
            `}
          >
            Indoor Run
          </b>
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
              color: var(--color-gray-100);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              20km
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-sm) 0px 0px;
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
            src="/icon-11@2x.png"
          />
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          height: 1px;
          position: relative;
          border-radius: var(--br-12xs-5);
          background-color: var(--color-darkgray-100);
          mix-blend-mode: normal;
          z-index: 1;
        `}
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-mini);
          font-size: var(--paragraph-03-size);
          color: var(--color-gray-100);
        `}
      >
        <div
          className={css`
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-4xs) 0px 0px;
            box-sizing: border-box;
          `}
        >
          <div
            className={css`
              width: 50px;
              height: 50px;
              position: relative;
              z-index: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                width: 100%;
                height: 100%;
                z-index: 1;
                object-fit: contain;
                position: absolute;
                left: 1px;
                top: 8px;
                transform: scale(1.42);
              `}
              loading="lazy"
              alt=""
              src="/icon-13@2x.png"
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
            min-width: 77px;
          `}
        >
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
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              Elapsed time
            </div>
          </div>
          <b
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--headline-05-size);
              line-height: 26px;
              color: var(--colors-black-100);
              z-index: 1;
            `}
          >
            00 : 30 : 24
          </b>
        </div>
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            min-width: 77px;
          `}
        >
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
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              Distance
            </div>
          </div>
          <b
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--headline-05-size);
              line-height: 26px;
              z-index: 1;
              color: var(--colors-black-100);
            `}
          >
            <span className={css``}>12.5km</span>
            <span
              className={css`
                color: var(--color-gray-200);
              `}
            >
              /20km
            </span>
          </b>
        </div>
      </div>
    </section>
  );
};

export default Popup;
