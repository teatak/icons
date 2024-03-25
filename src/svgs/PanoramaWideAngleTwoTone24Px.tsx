import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPanoramaWideAngleTwoTone24Px = (
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
      d="M12 6c-2.45 0-4.71.2-7.29.64A21 21 0 0 0 4 12a21 21 0 0 0 .71 5.36c2.58.44 4.84.64 7.29.64s4.71-.2 7.29-.64A21 21 0 0 0 20 12a21 21 0 0 0-.71-5.36C16.71 6.2 14.45 6 12 6"
      opacity={0.3}
    />
    <path d="m21.13 5.78-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4s-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22m-1.84 11.58c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64A21 21 0 0 1 4 12a21 21 0 0 1 .71-5.36C7.29 6.2 9.55 6 12 6s4.71.2 7.29.64A21 21 0 0 1 20 12a21 21 0 0 1-.71 5.36" />
  </svg>
);
const ForwardRef = forwardRef(SvgPanoramaWideAngleTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
