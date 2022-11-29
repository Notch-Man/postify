import React from "react";
import noJournalFound from "../../assets/journal-x.svg";

const NoPostFound = () => {
  return (
    <div className="text-center">
      <img src={noJournalFound} alt="no journal found" width={100} />
      <h2 className="mt-2 text-muted">No Posts Found!</h2>
    </div>
  );
};

export default NoPostFound;
