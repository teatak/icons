import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubdirectoryArrowRightRounded24Px = (
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
    <path d="m18.29 15.71-4.58 4.58c-.39.39-1.03.39-1.42 0s-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42s1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42" />
  </svg>
);
const ForwardRef = forwardRef(SvgSubdirectoryArrowRightRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
