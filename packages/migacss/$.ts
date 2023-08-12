import React, { forwardRef } from "react";
import { createElement, ComponentProps } from "react";

type PrefixedCSSProperties = {
  [P in keyof React.CSSProperties as P extends string
    ? `$${P}`
    : never]: React.CSSProperties[P];
};

type Miga = {
  [K in keyof React.ReactHTML]: React.FunctionComponent<
    React.HTMLProps<K> & PrefixedCSSProperties & { children: React.ReactNode }
  >;
};

const $_: any = new Proxy(
  {},
  {
    get<T extends keyof React.ReactHTML>(
      target: unknown,
      prop: T,
      receiver: unknown
    ) {
      // prop is expected to be intrinsic HTML
      if (typeof prop !== "string") {
        throw new Error("only intrinsic html tag is allowed in migaCSS");
      }

      return forwardRef<T, ComponentProps<Miga[T]>>(function $(props, ref) {
        // 1. `style` is allowed
        // 2. `s-` prefixed are styles
        const style: React.CSSProperties = {};
        const finalProps: any = {};
        // @ts-ignore
        Object.entries(props).forEach(([key, value]) => {
          if (key.startsWith("$")) {
            // @ts-ignore
            style[key.slice(1)] = value;
          } else {
            finalProps[key] = value;
          }
        });

        if (props.style) {
          Object.assign(style, props.style);
        }
        return createElement(prop, {
          ...finalProps,
          style,
          ref,
        });
      });
    },
  }
);

export const $ = $_ as Miga;
