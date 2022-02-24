import React from "react";
import LayoutHeader from "../Component/LayoutHeader";
import ChesBox from "../Component/ChesBox";
import Page from "../Layout/Page";

export default function ChestShop() {
  return (
    <>
      <Page>
        <LayoutHeader PageTitle="Chest Shop" filtdisableClass="d-none" />
        <ChesBox />
      </Page>
    </>
  );
}
