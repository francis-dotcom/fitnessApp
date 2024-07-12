import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { css } from "@emotion/css";
import Card from "../components/Card";
import FrameComponent from "../components/FrameComponent";

const HomeScroll: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--colors-white-100);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 60px 0px 0px;
        box-sizing: border-box;
        gap: 40px;
        line-height: normal;
        letter-spacing: normal;
      `}
    >
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 0px var(--padding-5xl);
          box-sizing: border-box;
          max-width: 100%;
          text-align: left;
          font-size: var(--headline-04-size);
          color: var(--colors-black-100);
          font-family: var(--paragraph-03);
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-5xl);
            max-width: 100%;
          `}
        >
          <FrameComponent1 />
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-base);
              `}
            >
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 28px;
                  display: inline-block;
                  min-width: 52px;
                `}
              >
                My Plan
              </b>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: var(--padding-11xs) 0px 0px;
                `}
              >
                <img
                  className={css`
                    width: 24px;
                    height: 24px;
                    position: relative;
                    object-fit: cover;
                  `}
                  loading="lazy"
                  alt=""
                  src="/icon-11@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                width: 287px;
                position: relative;
                font-size: var(--paragraph-03-size);
                line-height: 24px;
                color: var(--color-gray-100);
                display: inline-block;
              `}
            >
              July, 2021
            </div>
          </div>
          <Card />
        </div>
      </section>
      <FrameComponent />
      <img
        className={css`
          align-self: stretch;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/appbar@2x.png"
      />
    </div>
  );
};

export default HomeScroll;
