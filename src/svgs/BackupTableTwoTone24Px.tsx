import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBackupTableTwoTone24Px = (
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
    <path d="M11 11h5v5h-5zM4 11h5v5H4zM4 4h12v5H4z" opacity={0.3} />
    <path d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z" />
    <path d="M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBackupTableTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
