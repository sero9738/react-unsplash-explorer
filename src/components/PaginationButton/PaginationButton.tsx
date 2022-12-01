import clsx from "clsx";
import React from "react";
import "./PaginationButton.css";

interface PaginationButtonProps {
    label: string;
    className: string;
    clickCallback: () => any;
}

function PaginationButton({label, className, clickCallback}: PaginationButtonProps){
    return (
        <button className={clsx("btn", className)} onClick={clickCallback}>
            {label}
        </button>
    );
}

export default PaginationButton;