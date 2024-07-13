import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import ActivityGraphs from "../components/ActivityGraphs";
import ActivityIcons from "../components/ActivityIcons";

const HomeHome: FunctionComponent = () => {
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
        line-height: normal;
        letter-spacing: normal;
      `}
    >
      <img
        className={css`
          align-self: stretch;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          z-index: 1;
        `}
        alt=""
        src="/user.svg"
      />
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 40px var(--padding-5xl);
          box-sizing: border-box;
          gap: var(--gap-13xl);
          max-width: 100%;
          text-align: center;
          font-size: var(--headline-05-size);
          color: var(--colors-black-100);
          font-family: var(--headline-05);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-5xl) var(--padding-5xs) 0px;
            gap: 8px;
            color: var(--color-gray-100);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 26px;
            `}
          >
            Today, 8 Jul
          </div>
          <h2
            className={css`
              margin: 0;
              align-self: stretch;
              position: relative;
              font-size: var(--headline-02-size);
              line-height: 34px;
              font-weight: 700;
              font-family: inherit;
              color: var(--colors-black-100);
            `}
          >
            Your Activities
          </h2>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-5xl) 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
            font-size: var(--paragraph-03-size);
          `}
        >
          <div
            className={css`
              width: 327px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-9xs) 0px 0px;
              box-sizing: border-box;
              max-width: 100%;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                opacity: 0.4;
                mix-blend-mode: normal;
                gap: var(--gap-xl);
              `}
            >
              <div
                className={css`
                  width: 96px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-xs);
                `}
              >
                <b
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  5
                </b>
                <b
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  6
                </b>
                <b
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  7
                </b>
              </div>
              <div
                className={css`
                  width: 96px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-xs);
                `}
              >
                <b
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  9
                </b>
                <b
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  10
                </b>
                <b
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  11
                </b>
              </div>
            </div>
          </div>
          <div
            className={css`
              width: 111px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-9xs);
              box-sizing: border-box;
              position: relative;
              white-space: nowrap;
              z-index: 1;
              margin-left: -219px;
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
                background-color: var(--color-tomato-100);
                mix-blend-mode: normal;
              `}
            />
            <b
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
                z-index: 1;
              `}
            >
              Today, 8 Jul
            </b>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-5xl) 0px 0px;
            gap: var(--gap-9xs);
            font-size: var(--headline-01-size);
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 46px;
            `}
          >
            1 883 Kcal
          </b>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--headline-05-size);
              line-height: 26px;
              color: var(--color-gray-100);
            `}
          >{`Total Kilocalories `}</div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-5xl) 0px 0px;
            font-size: var(--headline-04-size);
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
              row-gap: 20px;
            `}
          >
            <b
              className={css`
                flex: 1;
                position: relative;
                line-height: 28px;
                display: inline-block;
                min-width: 48px;
              `}
            >
              7580 m
            </b>
            <b
              className={css`
                flex: 1;
                position: relative;
                line-height: 28px;
                display: inline-block;
                min-width: 48px;
              `}
            >
              9832
            </b>
            <b
              className={css`
                flex: 1;
                position: relative;
                line-height: 28px;
                display: inline-block;
                min-width: 48px;
              `}
            >
              1248
            </b>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
              row-gap: 20px;
              font-size: var(--paragraph-03-size);
              color: var(--color-gray-100);
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                opacity: 0.6;
                mix-blend-mode: normal;
                min-width: 82px;
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
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                opacity: 0.6;
                mix-blend-mode: normal;
                min-width: 82px;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 24px;
                `}
              >
                Steps
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                opacity: 0.6;
                mix-blend-mode: normal;
                min-width: 82px;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 24px;
                `}
              >
                Points
              </div>
            </div>
          </div>
        </div>
        <ActivityGraphs />
        <ActivityIcons />
      </section>
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

export default HomeHome;