import React, { useState } from "react";
import "./LatestView.css";
import PaginationButton from "../PaginationButton/PaginationButton";

function LatestView() {
  function onClickPaginationButton() {}

  return (
    <section id="latest-view" className="view">
      <span>LATEST VIEW</span>
      <span className="pagination-navigation">
        <PaginationButton
          label="<-"
          className="forward"
          clickCallback={onClickPaginationButton}
        />
        <span>Current page: 1</span>
        <PaginationButton
          label="->"
          className="back"
          clickCallback={onClickPaginationButton}
        />
      </span>
    </section>
  );
}

export default LatestView;
