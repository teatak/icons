import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgElderlyRounded24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.03 7.5c-1.57.01-2.94-.9-3.6-2.21l-.79-1.67c-.17-.35-.44-.65-.8-.85a2 2 0 0 0-1.94-.03v-.01l-4.39 2.5C6.39 9.08 6 9.74 6 10.46V13c0 .55.45 1 1 1s1-.45 1-1v-2.54l1.5-.85C9.18 10.71 9 11.85 9 13v5.33L7 21c-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2l2.04-2.72c.23-.31.37-.69.4-1.08l.18-2.94L13 18v4c0 .55.45 1 1 1s1-.45 1-1v-4.87c0-.41-.13-.81-.36-1.15l-1.6-2.29v-.01c-.11-1.16.07-2.32.46-3.4a6.02 6.02 0 0 0 3.51 2.52v.2c0 .28.22.5.5.5s.49-.22.49-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.82-.66-1.51-1.47-1.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgElderlyRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
