import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlumbingTwoTone24Px = (
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
    <path d="m19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54a3.01 3.01 0 0 0 0-4.25M5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13" />
    <path d="m15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01a1.49 1.49 0 0 0 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0L16.45 12a.996.996 0 1 0 1.41-1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlumbingTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
