export type { CardSectionProps, CardContentsProps } from "./base";
export { baseChartValues } from "./base";

import {
  BaseCardCenter,
  BaseCardFooter,
  type CardContentsProps,
  MaxScoreCardCenter,
} from "./base";
import { DdrCardFooter } from "./ddr";
import { ItgCardFooter } from "./itg";
import { MaimaiCardFooter } from "./maimai";
import { DonkeyKongaCardCenter } from "./donkeykonga";
import { FiveKeyCardFooter } from "./5key";

export function getContentVariants(
  cardType: string | undefined,
): CardContentsProps {
  switch (cardType) {
    case "ddr":
      return {
        CenterContent: MaxScoreCardCenter,
        FooterContent: DdrCardFooter,
      };
    case "itg":
      return {
        CenterContent: BaseCardCenter,
        FooterContent: ItgCardFooter,
      };
    case "maimai":
      return {
        CenterContent: BaseCardCenter,
        FooterContent: MaimaiCardFooter,
      };
    case "donkeykonga":
      return {
        CenterContent: DonkeyKongaCardCenter,
        FooterContent: BaseCardFooter,
      };
    case "5key":
      return {
        CenterContent: BaseCardCenter,
        FooterContent: FiveKeyCardFooter,
      };
    default:
      return {
        CenterContent: BaseCardCenter,
        FooterContent: BaseCardFooter,
      };
  }
}
