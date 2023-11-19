import React from "react";

const DBoardTopLeftCard = () => {
  return (
    <>
      <h1 id="firstRow">Upcoming Classes</h1>
      <section className="flex gap-3 firstSection" id="secondRow">
        <article className="flex-auto" id="firstArticle">
          <h2>Class #</h2>
          <p>1451</p>
          <p>2472</p>
          <p>9871</p>
          <p>1461</p>
        </article>
        <article className="flex-auto">
          <h2>Class Name</h2>
          <p>Interaction Design Studio 1</p>
          <p>Programming Usable Interfaces</p>
          <p>Software Structures for User Interfaces</p>
          <p>Interaction Design Studio 2</p>
        </article>
        <article className="flex-auto" id="thirdArticle">
          <h2>Time</h2>
          <p>9am - 12pm</p>
          <p>1pm - 2:30pm</p>
          <p>3pm - 4:50pm</p>
          <p>9am - 12pm</p>
        </article>
      </section>
    </>
  );
};

export default DBoardTopLeftCard;
