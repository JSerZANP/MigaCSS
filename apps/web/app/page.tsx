"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { $ } from "migacss";
import { ReactNode } from "react";

export default function Page() {
  return (
    <$.div $display="flex" $flexDirection="column" $gap="16px">
      <Inner>
        <$.h1
          $fontSize={"24px"}
          $fontWeight={800}
          $textAlign="center"
          $padding={"50px"}
        >
          migaCSS - Make Inline Great Again
        </$.h1>
      </Inner>
      <Inner>
        <i>still WIP.</i>
        <$.h2 $fontSize="20px" $fontWeight={"500"} $margin={"1em 0"}>
          Why?
        </$.h2>
        <$.p $lineHeight="1.5">
          I really want to spend less effort in styling. And don&lsquo;t want to
          spend too much time understanding the unncessary abstractions.
        </$.p>
      </Inner>
      <Inner>
        <$.h2 $fontSize="20px" $fontWeight={"500"} $margin={"1em 0"}>
          How?
        </$.h2>
        <$.p $lineHeight="1.5">
          migaCSS provides a bunch of tools that you can easily pick up and use,
          for progressive adoption.
        </$.p>
      </Inner>
      <Inner>
        <$.h2 $fontSize="20px" $fontWeight={"500"} $margin={"1em 0"}>
          $
        </$.h2>
        <$.p $lineHeight="1.5">
          <b>$</b> might be the easiest way to{" "}
          <a href="https://chakra-ui.com/docs/styled-system/style-props">
            Style Props
          </a>
          , give it a try!
        </$.p>
        <Sandpack
          template="react"
          theme="auto"
          options={{ showConsoleButton: true }}
          customSetup={{
            dependencies: {
              migacss: "^0.0.6",
            },
          }}
          files={{
            "App.js": `import { $ } from 'migacss';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <$.div $padding="12px">
      <$.button $color="#fff" $backgroundColor="#000"
        onClick={() => setCount(count => count + 1)}
      >click me {count}</$.button>
    </$.div>
  );
}`,
          }}
        />
      </Inner>
      <Inner>
        <$.h3 $fontSize="16px" $fontWeight={"500"} $margin={"1em 0"}>
          Caveat
        </$.h3>
        <$.p>TODO: caveat.</$.p>
      </Inner>
      <Inner>
        <$.h2 $fontSize="20px" $fontWeight={"500"} $margin={"1em 0"}>
          More tools
        </$.h2>
        <$.p>on their way.</$.p>
      </Inner>
    </$.div>
  );
}

function Inner({ children }: { children: ReactNode }) {
  return (
    <$.div $maxWidth={900} $margin="auto auto" $width="100%">
      {children}
    </$.div>
  );
}
