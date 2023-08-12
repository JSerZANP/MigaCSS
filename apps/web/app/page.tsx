"use client";
import { $ } from "migacss";
import { useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref}>
      <$.div $padding={"20px"} $display="flex" $gap="10px" ref={ref}>
        <$.button $color="red" $background={"blue"}>
          click me
        </$.button>
        <$.button $color="red" $background={"blue"}>
          click me
        </$.button>
      </$.div>
    </div>
  );
}
