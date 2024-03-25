import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTempleHindu24Px = (
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
    <path d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTempleHindu24Px);
const Memo = memo(ForwardRef);
export default Memo;
