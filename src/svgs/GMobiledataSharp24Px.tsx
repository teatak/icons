import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGMobiledataSharp24Px = (
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
    <path d="M12 11v2h2v2H9V9h7V7H7v10h9v-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgGMobiledataSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
