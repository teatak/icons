import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubdirectoryArrowRightTwoTone24Px = (
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
    <path fill="none" d="M24 24H0V0h24z" opacity={0.87} />
    <path d="m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSubdirectoryArrowRightTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
