import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRingVolumeSharp24Px = (
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
    <path d="m21.16 6.26-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55M11 2h2v5h-2zM6.4 9.81 7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55M0 17.39l3.68 3.68 3.92-3.11v-3.37c2.85-.93 5.94-.93 8.8 0v3.38l3.91 3.1L24 17.39c-6.41-7.19-17.59-7.19-24 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgRingVolumeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
