import { useMemo } from "react";

// Body imports (01-15)
import Body01 from "../../../static/assets/website/otter-pass/Body/01-Body.png";
import Body02 from "../../../static/assets/website/otter-pass/Body/02-Body.png";
import Body03 from "../../../static/assets/website/otter-pass/Body/03-Body.png";
import Body04 from "../../../static/assets/website/otter-pass/Body/04-Body.png";
import Body05 from "../../../static/assets/website/otter-pass/Body/05-Body.png";
import Body06 from "../../../static/assets/website/otter-pass/Body/06-Body.png";
import Body07 from "../../../static/assets/website/otter-pass/Body/07-Body.png";
import Body08 from "../../../static/assets/website/otter-pass/Body/08-Body.png";
import Body09 from "../../../static/assets/website/otter-pass/Body/09-Body.png";
import Body10 from "../../../static/assets/website/otter-pass/Body/10-Body.png";
import Body11 from "../../../static/assets/website/otter-pass/Body/11-Body.png";
import Body12 from "../../../static/assets/website/otter-pass/Body/12-Body.png";
import Body13 from "../../../static/assets/website/otter-pass/Body/13-Body.png";
import Body14 from "../../../static/assets/website/otter-pass/Body/14-Body.png";
import Body15 from "../../../static/assets/website/otter-pass/Body/15-Body.png";

// Head imports (01-10)
import Head01 from "../../../static/assets/website/otter-pass/Head/01-Head.png";
import Head02 from "../../../static/assets/website/otter-pass/Head/02-Head.png";
import Head03 from "../../../static/assets/website/otter-pass/Head/03-Head.png";
import Head04 from "../../../static/assets/website/otter-pass/Head/04-Head.png";
import Head05 from "../../../static/assets/website/otter-pass/Head/05-Head.png";
import Head06 from "../../../static/assets/website/otter-pass/Head/06-Head.png";
import Head07 from "../../../static/assets/website/otter-pass/Head/07-Head.png";
import Head08 from "../../../static/assets/website/otter-pass/Head/08-Head.png";
import Head09 from "../../../static/assets/website/otter-pass/Head/09-Head.png";
import Head10 from "../../../static/assets/website/otter-pass/Head/10-Head.png";

// Headgear imports (01-21)
import Headgear01 from "../../../static/assets/website/otter-pass/Headgear/01-Headgear.png";
import Headgear02 from "../../../static/assets/website/otter-pass/Headgear/02-Headgear.png";
import Headgear03 from "../../../static/assets/website/otter-pass/Headgear/03-Headgear.png";
import Headgear04 from "../../../static/assets/website/otter-pass/Headgear/04-Headgear.png";
import Headgear05 from "../../../static/assets/website/otter-pass/Headgear/05-Headgear.png";
import Headgear06 from "../../../static/assets/website/otter-pass/Headgear/06-Headgear.png";
import Headgear07 from "../../../static/assets/website/otter-pass/Headgear/07-Headgear.png";
import Headgear08 from "../../../static/assets/website/otter-pass/Headgear/08-Headgear.png";
import Headgear09 from "../../../static/assets/website/otter-pass/Headgear/09-Headgear.png";
import Headgear10 from "../../../static/assets/website/otter-pass/Headgear/10-Headgear.png";
import Headgear11 from "../../../static/assets/website/otter-pass/Headgear/11-Headgear.png";
import Headgear12 from "../../../static/assets/website/otter-pass/Headgear/12-Headgear.png";
import Headgear13 from "../../../static/assets/website/otter-pass/Headgear/13-Headgear.png";
import Headgear14 from "../../../static/assets/website/otter-pass/Headgear/14-Headgear.png";
import Headgear15 from "../../../static/assets/website/otter-pass/Headgear/15-Headgear.png";
import Headgear16 from "../../../static/assets/website/otter-pass/Headgear/16-Headgear.png";
import Headgear17 from "../../../static/assets/website/otter-pass/Headgear/17-Headgear.png";
import Headgear18 from "../../../static/assets/website/otter-pass/Headgear/18-Headgear.png";
import Headgear19 from "../../../static/assets/website/otter-pass/Headgear/19-Headgear.png";
import Headgear20 from "../../../static/assets/website/otter-pass/Headgear/20-Headgear.png";
import Headgear21 from "../../../static/assets/website/otter-pass/Headgear/21-Headgear.png";

// Accessory imports (01-19)
import Accessory01 from "../../../static/assets/website/otter-pass/Accessory/01-Accessory.png";
import Accessory02 from "../../../static/assets/website/otter-pass/Accessory/02-Accessory.png";
import Accessory03 from "../../../static/assets/website/otter-pass/Accessory/03-Accessory.png";
import Accessory04 from "../../../static/assets/website/otter-pass/Accessory/04-Accessory.png";
import Accessory05 from "../../../static/assets/website/otter-pass/Accessory/05-Accessory.png";
import Accessory06 from "../../../static/assets/website/otter-pass/Accessory/06-Accessory.png";
import Accessory07 from "../../../static/assets/website/otter-pass/Accessory/07-Accessory.png";
import Accessory08 from "../../../static/assets/website/otter-pass/Accessory/08-Accessory.png";
import Accessory09 from "../../../static/assets/website/otter-pass/Accessory/09-Accessory.png";
import Accessory10 from "../../../static/assets/website/otter-pass/Accessory/10-Accessory.png";
import Accessory11 from "../../../static/assets/website/otter-pass/Accessory/11-Accessory.png";
import Accessory12 from "../../../static/assets/website/otter-pass/Accessory/12-Accessory.png";
import Accessory13 from "../../../static/assets/website/otter-pass/Accessory/13-Accessory.png";
import Accessory14 from "../../../static/assets/website/otter-pass/Accessory/14-Accessory.png";
import Accessory15 from "../../../static/assets/website/otter-pass/Accessory/15-Accessory.png";
import Accessory16 from "../../../static/assets/website/otter-pass/Accessory/16-Accessory.png";
import Accessory17 from "../../../static/assets/website/otter-pass/Accessory/17-Accessory.png";
import Accessory18 from "../../../static/assets/website/otter-pass/Accessory/18-Accessory.png";
import Accessory19 from "../../../static/assets/website/otter-pass/Accessory/19-Accessory.png";

const BODY_ASSETS: Record<string, string> = {
  "01": Body01, "02": Body02, "03": Body03, "04": Body04, "05": Body05,
  "06": Body06, "07": Body07, "08": Body08, "09": Body09, "10": Body10,
  "11": Body11, "12": Body12, "13": Body13, "14": Body14, "15": Body15,
};

const HEAD_ASSETS: Record<string, string> = {
  "01": Head01, "02": Head02, "03": Head03, "04": Head04, "05": Head05,
  "06": Head06, "07": Head07, "08": Head08, "09": Head09, "10": Head10,
};

const HEADGEAR_ASSETS: Record<string, string> = {
  "01": Headgear01, "02": Headgear02, "03": Headgear03, "04": Headgear04, "05": Headgear05,
  "06": Headgear06, "07": Headgear07, "08": Headgear08, "09": Headgear09, "10": Headgear10,
  "11": Headgear11, "12": Headgear12, "13": Headgear13, "14": Headgear14, "15": Headgear15,
  "16": Headgear16, "17": Headgear17, "18": Headgear18, "19": Headgear19, "20": Headgear20,
  "21": Headgear21,
};

const ACCESSORY_ASSETS: Record<string, string> = {
  "01": Accessory01, "02": Accessory02, "03": Accessory03, "04": Accessory04, "05": Accessory05,
  "06": Accessory06, "07": Accessory07, "08": Accessory08, "09": Accessory09, "10": Accessory10,
  "11": Accessory11, "12": Accessory12, "13": Accessory13, "14": Accessory14, "15": Accessory15,
  "16": Accessory16, "17": Accessory17, "18": Accessory18, "19": Accessory19,
};

type OtterTraits = {
  body: string;
  head: string;
  headgear: string;
  accessory: string;
};

type OtterCharacterProps = {
  characterId: string;
  width?: number;
  height?: number;
};

const parseCharacterId = (characterId: string): OtterTraits | null => {
  if (!characterId) return null;

  const parts = characterId.split("-");
  if (parts.length < 5) return null;

  return {
    body: parts[1],
    head: parts[2],
    headgear: parts[3],
    accessory: parts[4],
  };
};

export const OtterCharacter = ({ characterId, width, height }: OtterCharacterProps) => {
  const traits = parseCharacterId(characterId);

  const assets = useMemo(() => {
    if (!traits) return null;

    return {
      body: BODY_ASSETS[traits.body],
      head: HEAD_ASSETS[traits.head],
      headgear: HEADGEAR_ASSETS[traits.headgear],
      accessory: ACCESSORY_ASSETS[traits.accessory],
    };
  }, [traits]);

  if (!traits || !assets) {
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Invalid Character
      </div>
    );
  }

  const imgStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {assets.body && (
        <img src={assets.body} alt="Body" style={{ ...imgStyle, zIndex: 1 }} />
      )}
      {assets.head && (
        <img src={assets.head} alt="Head" style={{ ...imgStyle, zIndex: 2 }} />
      )}
      {assets.headgear && (
        <img src={assets.headgear} alt="Headgear" style={{ ...imgStyle, zIndex: 3 }} />
      )}
      {assets.accessory && (
        <img src={assets.accessory} alt="Accessory" style={{ ...imgStyle, zIndex: 4 }} />
      )}
    </div>
  );
};

export const generateRandomCharacterId = (): string => {
  const randomPad = (max: number) => String(Math.floor(Math.random() * max) + 1).padStart(2, "0");

  const body = randomPad(15);
  const head = randomPad(10);
  const headgear = randomPad(21);
  const accessory = randomPad(19);

  return `99-${body}-${head}-${headgear}-${accessory}`;
};

export { parseCharacterId };
