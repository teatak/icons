import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWcTwoTone24Px = (
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
    <path fill="none" d="M.01 0h24v24h-24z" />
    <path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22zM18 22v-6h3l-2.54-7.63A2.01 2.01 0 0 0 16.56 7h-.12a2 2 0 0 0-1.9 1.37L12 16h3v6zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgWcTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
