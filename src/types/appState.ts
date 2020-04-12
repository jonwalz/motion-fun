import * as React from "react";
export type CardData = CardType[];

export interface CardType {
  backgroundColor: string;
  id: string;
  value: string;
  component: React.ReactNode | null;
}
