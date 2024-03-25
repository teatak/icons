import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWifiFindTwoTone24Px = (
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
    <path d="M22.59 10.39 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98L12 21l1.41-1.42L2.93 9.08C5.45 7.16 8.59 6 12 6c4.13 0 7.88 1.68 10.59 4.39" />
    <path d="m23 18.59-2.56-2.56c.35-.59.56-1.28.56-2.03 0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20zM15 14c0-1.12.88-2 2-2s2 .88 2 2-.88 2-2 2-2-.88-2-2" />
    <path
      d="M22.59 10.39A14.94 14.94 0 0 0 12 6C8.59 6 5.45 7.16 2.93 9.08l2.26 2.26 8.24 8.24.46-.46C12.15 18.09 11 16.21 11 14c0-1.62.62-3.13 1.75-4.25S15.38 8 17 8c2.21 0 4.09 1.15 5.13 2.89l.49-.49-.02-.02z"
      opacity={0.3}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWifiFindTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
