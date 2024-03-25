import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocalMoviesOutlined24Px = (
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
    <path d="M14 5v14h-4V5zm6-2h-2v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2zm-4 6V7h2v2zM6 9V7h2v2zm10 4v-2h2v2zM6 13v-2h2v2zm10 4v-2h2v2zM6 17v-2h2v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocalMoviesOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
