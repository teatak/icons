import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPianoTwoTone24Px = (
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
      d="M14 14.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z"
      opacity={0.3}
    />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPianoTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
