import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import Popup from "../components/Popup";

const MapMap: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--colors-white-100);
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        line-height: normal;
        letter-spacing: normal;
      `}
    >
      <main
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 264px 0px 0px;
          box-sizing: border-box;
          position: relative;
          gap: 76px;
          max-width: 100%;
        `}
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
            object-fit: cover;
          `}
          alt=""
          src="/map@2x.png"
        />
        <div
          className={css`
            height: 112px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            padding: 0px var(--padding-5xl);
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
              gap: var(--gap-base);
            `}
          >
            <div
              className={css`
                width: 48px;
                height: 48px;
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
                  left: 0px;
                  top: 9px;
                  transform: scale(1.667);
                `}
                loading="lazy"
                alt=""
                src="/3d@2x.png"
              />
            </div>
            <div
              className={css`
                width: 48px;
                height: 48px;
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
                  left: 0px;
                  top: 9px;
                  transform: scale(1.667);
                `}
                loading="lazy"
                alt=""
                src="/explore@2x.png"
              />
            </div>
          </div>
        </div>
        <Popup />
      </main>
      <img
        className={css`
          height: 105px;
          width: 100%;
          position: absolute;
          margin: 0 !important;
          right: 0px;
          bottom: 0px;
          left: 0px;
          max-width: 100%;
          overflow: hidden;
          object-fit: cover;
          z-index: 2;
        `}
        alt=""
        src="/appbar1@2x.png"
      />
    </div>
  );
};

export default MapMap;
