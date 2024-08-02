import React from "react";

  //the {props.articleText} tells react to place the value of prop.articleText represent withing the <div>
/*
function ParentComponent() {
  passing prop to ChildComponent
  return <ChildComponent text="Hello!" number={2} />;
}

function ChildComponent(props) {
   using the values of the text and number props
  return (
    <div>
      {props.text} {props.number}
    </div>
  );
}*/


function BlogContent(props) {
  return <div id="blog-content">
    {props.articleText}</div>; 
}

export default BlogContent;
