import React from "react";
export default function Bootstrap() {
  return (
    <>
      <h1 className="bg-success">Hello I am meet desai</h1>
      <button className="btn bg-black text-white me-5">click here</button>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <div class="btn-group d-sm-grid" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">
          Left
        </button>
        <button type="button" class="btn btn-primary">
          Middle
        </button>
        <button type="button" class="btn btn-primary">
          Right
        </button>
      </div>
    </>
  );
}
