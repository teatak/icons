import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPanoramaVerticalSharp24Px = (
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
    <path d="M17.46 4c-.77 2.6-1.16 5.28-1.16 8s.39 5.41 1.16 8H6.55c.77-2.6 1.16-5.28 1.16-8s-.39-5.41-1.16-8zm2.78-2H3.77s.26.77.3.88C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.04.11-.3.88-.3.88h16.47s-.26-.77-.3-.88c-1.09-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.3-.88.3-.88" />
  </svg>
);
const ForwardRef = forwardRef(SvgPanoramaVerticalSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
