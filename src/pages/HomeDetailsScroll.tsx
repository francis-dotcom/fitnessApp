import { FunctionComponent } from "react";
import Item1 from "../components/Item1";
import Item from "../components/Item";
import { css } from "@emotion/css";
import Item3 from "../components/Item3";

const HomeDetailsScroll: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 812px;
        position: relative;
        background-color: var(--colors-white-100);
        overflow: hidden;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        font-size: var(--paragraph-03-size);
        color: var(--colors-black-100);
        font-family: var(--headline-05);
      `}
    >
      <Item1 propPosition="absolute" propTop="703px" propLeft="24px" />
      <Item
        icon="/icon-12@2x.png"
        dumbbellPlaceholder="235"
        treadmill="Treadmill"
        propPosition="absolute"
        propTop="703px"
        propLeft="160px"
      />
      <Item
        icon="/icons--bold--rope1@2x.png"
        dumbbellPlaceholder="432"
        treadmill="Rope"
        propPosition="absolute"
        propTop="703px"
        propLeft="296px"
      />
      <div
        className={css`
          position: absolute;
          top: 551px;
          left: 24px;
          height: 112px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            align-self: stretch;
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
              align-self: stretch;
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
              align-self: stretch;
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
      <div
        className={css`
          position: absolute;
          top: 495px;
          left: 242px;
          width: 109px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
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
          Points
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 467px;
          left: 242px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          width: 109px;
        `}
      >
        1248
      </b>
      <div
        className={css`
          position: absolute;
          top: 495px;
          left: 133px;
          width: 109px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
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
          Steps
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 467px;
          left: 133px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          width: 109px;
        `}
      >
        9832
      </b>
      <div
        className={css`
          position: absolute;
          top: 495px;
          left: 24px;
          width: 109px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
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
          Distance
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 467px;
          left: 24px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          width: 109px;
        `}
      >
        7580 m
      </b>
      <div
        className={css`
          position: absolute;
          top: 409px;
          left: 24px;
          font-size: var(--headline-05-size);
          line-height: 26px;
          color: var(--color-gray-100);
          display: inline-block;
          width: 327px;
        `}
      >{`Total Kilocalories `}</div>
      <b
        className={css`
          position: absolute;
          top: 359px;
          left: 24px;
          font-size: var(--headline-01-size);
          line-height: 46px;
          display: inline-block;
          width: 327px;
        `}
      >
        1 883 Kcal
      </b>
      <div
        className={css`
          position: absolute;
          top: 299px;
          left: 24px;
          width: 327px;
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
      <div
        className={css`
          position: absolute;
          top: 295px;
          left: 132px;
          width: 111px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-9xs);
          box-sizing: border-box;
          white-space: nowrap;
          z-index: 1;
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
      <h2
        className={css`
          margin: 0;
          position: absolute;
          top: 221px;
          left: 24px;
          font-size: var(--headline-02-size);
          line-height: 34px;
          font-weight: 700;
          font-family: inherit;
          display: inline-block;
          width: 327px;
        `}
      >
        Your Activities
      </h2>
      <div
        className={css`
          position: absolute;
          top: 187px;
          left: 24px;
          font-size: var(--headline-05-size);
          line-height: 26px;
          color: var(--color-gray-100);
          display: inline-block;
          width: 327px;
        `}
      >
        Today, 8 Jul
      </div>
      <img
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 375px;
          height: 187px;
          z-index: 1;
        `}
        alt=""
        src="/user.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 707px;
          left: 0px;
          width: 375px;
          height: 105px;
          object-fit: cover;
          z-index: 1;
        `}
        alt=""
        src="/appbar@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: rgba(4, 4, 21, 0.2);
          width: 100%;
          height: 100%;
          mix-blend-mode: normal;
          z-index: 2;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 80px;
          left: 0px;
          width: 375px;
          height: 732px;
          z-index: 3;
        `}
        alt=""
        src="/base.svg"
      />
      <Item3
        avatars2="/avatars--2@2x.png"
        alfredOwen="Linh Nguyen"
        workouts="680 Calories"
        h20Min="4.1k Steps"
      />
      <Item3
        avatars2="/avatar1@2x.png"
        alfredOwen="Alfred Owen"
        workouts="400 Calories "
        h20Min="2.1k Steps"
        propTop="670px"
      />
      <img
        className={css`
          position: absolute;
          top: 620px;
          left: 327px;
          width: 24px;
          height: 24px;
          object-fit: cover;
          z-index: 4;
        `}
        loading="lazy"
        alt=""
        src="/icon-11@2x.png"
      />
      <b
        className={css`
          position: absolute;
          top: 618px;
          left: 24px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          text-align: left;
          width: 287px;
          z-index: 4;
        `}
      >
        Friends Activity
      </b>
      <div
        className={css`
          position: absolute;
          top: 144px;
          left: 255px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          z-index: 4;
          text-align: left;
          font-size: var(--headline-05-size);
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-6xs) var(--padding-base);
            position: relative;
            gap: 7px;
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
              border-radius: var(--br-base);
              border: 1.5px solid var(--colors-gray-40);
              box-sizing: border-box;
              opacity: 0.4;
              mix-blend-mode: normal;
            `}
          />
          <div
            className={css`
              position: relative;
              line-height: 26px;
              display: inline-block;
              min-width: 37px;
              z-index: 1;
            `}
          >
            Daily
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-10xs) 0px 0px;
            `}
          >
            <img
              className={css`
                width: 20px;
                height: 20px;
                position: relative;
                z-index: 1;
              `}
              alt=""
              src="/icon-right.svg"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 168px;
          left: 96px;
          width: 107px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
          z-index: 4;
          text-align: left;
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
          1 240 Steps
        </div>
      </div>
      <a
        className={css`
          text-decoration: none;
          position: absolute;
          top: 136px;
          left: 96px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          font-weight: 700;
          color: inherit;
          text-align: left;
          display: inline-block;
          width: 107px;
          z-index: 4;
        `}
      >
        Steps
      </a>
      <div
        className={css`
          position: absolute;
          top: 136px;
          left: 24px;
          width: 56px;
          height: 56px;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          className={css`
            width: 100%;
            height: 100%;
            z-index: 4;
            object-fit: contain;
            position: absolute;
            left: 0px;
            top: 7px;
            transform: scale(1.25);
          `}
          loading="lazy"
          alt=""
          src="/icon-31@2x.png"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 554px;
          left: 242px;
          width: 109px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
          z-index: 4;
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
          Kilometers
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 526px;
          left: 242px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          width: 109px;
          z-index: 5;
        `}
      >
        4.84
      </b>
      <div
        className={css`
          position: absolute;
          top: 532px;
          left: 320px;
          box-shadow: 0px 4px 8px rgba(241, 82, 35, 0.4);
          border-radius: var(--br-3xs);
          background-color: var(--colors-orange-100);
          width: 12px;
          height: 12px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          z-index: 6;
        `}
      >
        <div
          className={css`
            height: 12px;
            width: 12px;
            position: relative;
            box-shadow: 0px 4px 8px rgba(241, 82, 35, 0.4);
            border-radius: var(--br-3xs);
            background-color: var(--colors-orange-100);
            display: none;
            z-index: 0;
          `}
        />
        <img
          className={css`
            height: 6px;
            width: 8px;
            position: absolute;
            margin: 0 !important;
            bottom: 2px;
            left: calc(50% - 4px);
            border-radius: var(--br-12xs);
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/triangle.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 554px;
          left: 133px;
          width: 109px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
          z-index: 6;
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
          Time
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 526px;
          left: 133px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          width: 109px;
          white-space: nowrap;
          z-index: 7;
        `}
      >
        24:06
      </b>
      <div
        className={css`
          position: absolute;
          top: 532px;
          left: 216px;
          box-shadow: 0px 4px 8px rgba(241, 82, 35, 0.4);
          border-radius: var(--br-3xs);
          background-color: var(--colors-orange-100);
          width: 12px;
          height: 12px;
          z-index: 8;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            box-shadow: 0px 4px 8px rgba(241, 82, 35, 0.4);
            border-radius: var(--br-3xs);
            background-color: var(--colors-orange-100);
            display: none;
          `}
        />
        <img
          className={css`
            position: absolute;
            height: 50%;
            width: 66.67%;
            top: 33.33%;
            right: 16.67%;
            bottom: 16.67%;
            left: 16.67%;
            border-radius: var(--br-12xs);
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/triangle.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 554px;
          left: 24px;
          width: 109px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          opacity: 0.6;
          mix-blend-mode: normal;
          z-index: 8;
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
          Calories
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 526px;
          left: 24px;
          font-size: var(--headline-04-size);
          line-height: 28px;
          display: inline-block;
          width: 109px;
          z-index: 9;
        `}
      >
        480
      </b>
      <div
        className={css`
          position: absolute;
          top: 532px;
          left: 99px;
          box-shadow: 0px 4px 8px rgba(101, 207, 88, 0.4);
          border-radius: var(--br-3xs);
          background-color: var(--colors-green-100);
          width: 12px;
          height: 12px;
          z-index: 10;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            box-shadow: 0px 4px 8px rgba(101, 207, 88, 0.4);
            border-radius: var(--br-3xs);
            background-color: var(--colors-green-100);
            display: none;
          `}
        />
        <img
          className={css`
            position: absolute;
            height: 50%;
            width: 66.67%;
            top: 16.67%;
            right: 16.67%;
            bottom: 33.33%;
            left: 16.67%;
            border-radius: var(--br-12xs);
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/triangle-2.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 318px;
          left: 0px;
          width: 375px;
          height: 176px;
          z-index: 4;
        `}
        alt=""
        src="/chart.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 468px;
          left: 24px;
          font-size: var(--headline-05-size);
          line-height: 26px;
          color: var(--color-gray-100);
          display: inline-block;
          width: 327px;
          z-index: 5;
        `}
      >{`Total Kilocalories `}</div>
      <b
        className={css`
          position: absolute;
          top: 418px;
          left: 24px;
          font-size: var(--headline-01-size);
          line-height: 46px;
          display: inline-block;
          width: 327px;
          z-index: 5;
        `}
      >
        4880
      </b>
      <div
        className={css`
          position: absolute;
          top: 426px;
          left: 233px;
          box-shadow: 0px 8px 24px rgba(101, 207, 88, 0.4);
          border-radius: var(--br-3xs);
          background-color: var(--colors-green-100);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-11xs) var(--padding-7xs);
          z-index: 6;
          text-align: left;
          font-size: var(--paragraph-04-size);
          color: var(--colors-white-100);
        `}
      >
        <div
          className={css`
            height: 20px;
            width: 45px;
            position: relative;
            box-shadow: 0px 8px 24px rgba(101, 207, 88, 0.4);
            border-radius: var(--br-3xs);
            background-color: var(--colors-green-100);
            display: none;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-9xs) 0px 0px;
            `}
          >
            <img
              className={css`
                width: 8px;
                height: 6px;
                position: relative;
                border-radius: var(--br-12xs);
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/triangle-2.svg"
            />
          </div>
          <b
            className={css`
              position: relative;
              line-height: 16px;
              display: inline-block;
              min-width: 24px;
              z-index: 1;
            `}
          >
            14%
          </b>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 232px;
          left: 24px;
          line-height: 24px;
          color: var(--color-gray-100);
          text-align: left;
          display: inline-block;
          width: 37.4px;
          min-width: 37.4px;
          z-index: 4;
        `}
      >
        Today
      </div>
      <h2
        className={css`
          margin: 0;
          position: absolute;
          top: 260px;
          left: 24px;
          font-size: var(--headline-02-size);
          line-height: 34px;
          font-weight: 700;
          font-family: inherit;
          text-align: left;
          display: inline-block;
          width: 327px;
          z-index: 4;
        `}
      >
        Thu, 08 July
      </h2>
    </div>
  );
};

export default HomeDetailsScroll;