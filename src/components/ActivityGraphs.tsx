import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type ActivityGraphsType = {
  className?: string;
};

const ActivityGraphs: FunctionComponent<ActivityGraphsType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-5xl) var(--padding-5xs) 0px;
          box-sizing: border-box;
          max-width: 100%;
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
          max-width: 100%;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            padding: 0px var(--padding-5xl) 0px 0px;
            box-sizing: border-box;
            position: relative;
            gap: var(--gap-lgi);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              height: 112px;
              width: 4px;
              position: relative;
              border-radius: var(--br-10xs-5);
              background-color: var(--color-tomato-200);
              mix-blend-mode: normal;
            `}
          />
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-9xl);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 48px;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--color-tomato-200);
                mix-blend-mode: normal;
              `}
            />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-14xl);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 36px;
                position: relative;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: var(--br-10xs-5);
                  background-color: var(--colors-orange-100);
                  width: 4px;
                  height: 20px;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 24px;
                  left: 0px;
                  border-radius: var(--br-10xs-5);
                  background-color: var(--colors-light-purple-100);
                  width: 4px;
                  height: 12px;
                `}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-3xl);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 31px;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--color-tomato-200);
                mix-blend-mode: normal;
              `}
            />
          </div>
          <div
            className={css`
              height: 112px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 46px;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--colors-green-100);
              `}
            />
            <div
              className={css`
                width: 4px;
                flex: 1;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--colors-light-purple-100);
              `}
            />
          </div>
          <div
            className={css`
              height: 79px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-4xl);
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                width: 4px;
                flex: 1;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--color-tomato-200);
                mix-blend-mode: normal;
              `}
            />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-mini);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 44px;
                position: relative;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: var(--br-10xs-5);
                  background-color: var(--color-tomato-200);
                  width: 4px;
                  height: 20px;
                  mix-blend-mode: normal;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 24px;
                  left: 0px;
                  border-radius: var(--br-10xs-5);
                  background-color: var(--color-tomato-200);
                  width: 4px;
                  height: 20px;
                  mix-blend-mode: normal;
                `}
              />
            </div>
          </div>
          <div
            className={css`
              height: 40px;
              width: 4px;
              position: relative;
              border-radius: var(--br-10xs-5);
              background-color: var(--colors-light-purple-100);
            `}
          />
          <div
            className={css`
              height: 112px;
              width: 4px;
              position: relative;
              border-radius: var(--br-10xs-5);
              background-color: var(--colors-green-100);
            `}
          />
          <div
            className={css`
              height: 74px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-3xs);
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                width: 4px;
                flex: 1;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--colors-orange-100);
              `}
            />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-5xl);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 44px;
                position: relative;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: var(--br-10xs-5);
                  background-color: var(--color-tomato-200);
                  width: 4px;
                  height: 16px;
                  mix-blend-mode: normal;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 20px;
                  left: 0px;
                  border-radius: var(--br-10xs-5);
                  background-color: var(--color-tomato-200);
                  width: 4px;
                  height: 24px;
                  mix-blend-mode: normal;
                `}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-5xs);
            `}
          >
            <div
              className={css`
                width: 4px;
                height: 30px;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--color-tomato-200);
                mix-blend-mode: normal;
              `}
            />
          </div>
          <div
            className={css`
              height: 112px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                width: 4px;
                flex: 1;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--colors-orange-100);
              `}
            />
            <div
              className={css`
                width: 4px;
                height: 40px;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--colors-light-purple-100);
              `}
            />
          </div>
          <div
            className={css`
              height: 84px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-9xl);
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                width: 4px;
                flex: 1;
                position: relative;
                border-radius: var(--br-10xs-5);
                background-color: var(--color-tomato-200);
                mix-blend-mode: normal;
              `}
            />
          </div>
          <div
            className={css`
              height: 32px;
              width: 4px;
              position: absolute;
              margin: 0 !important;
              right: 0px;
              bottom: 6px;
              border-radius: var(--br-10xs-5);
              background-color: var(--color-tomato-200);
              mix-blend-mode: normal;
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityGraphs;
