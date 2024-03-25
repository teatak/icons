import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWcSharp24Px = (
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
    <path d="M5.5 22v-7.5H4V7h7v7.5H9.5V22zM18 22v-6h3l-3-9h-3l-3 9h3v6zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgWcSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
