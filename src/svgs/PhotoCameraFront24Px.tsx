import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhotoCameraFront24Px = (
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
    <path d="m18 10.48 4-3.98v11l-4-3.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zm-2-.79V6H4v12h12zM10 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0 1c1.34 0 4 .67 4 2v1H6v-1c0-1.33 2.66-2 4-2" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhotoCameraFront24Px);
const Memo = memo(ForwardRef);
export default Memo;
