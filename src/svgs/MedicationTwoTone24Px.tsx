import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMedicationTwoTone24Px = (
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
    <path
      d="M7 19h10V8H7zm1-7h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15H8z"
      opacity={0.3}
    />
    <path d="M6 3h12v2H6zM17 6H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 13H7V8h10z" />
    <path d="M10.5 17.5h3V15H16v-3h-2.5V9.5h-3V12H8v3h2.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMedicationTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
