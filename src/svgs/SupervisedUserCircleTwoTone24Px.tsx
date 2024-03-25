import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSupervisedUserCircleTwoTone24Px = (
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
    <circle cx={9.5} cy={10} r={1} opacity={0.3} />
    <path
      d="M11.5 17.21c0-1.88 2.98-2.7 4.5-2.7.88 0 2.24.27 3.24.87.48-1.02.75-2.16.75-3.37 0-4.41-3.59-8-8-8s-8 3.59-8 8c0 1.23.29 2.39.78 3.43 1.34-.98 3.43-1.43 4.73-1.43.44 0 .97.05 1.53.16-.63.57-1.06 1.22-1.3 1.86-.08 0-.15-.01-.23-.01-1.38 0-2.98.57-3.66 1.11a7.94 7.94 0 0 0 5.66 2.86zM16 9c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2c-.01-1.11.89-2 2-2m-6.5 4c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"
      opacity={0.3}
    />
    <path d="M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6.5 2c1.11 0 2-.89 2-2s-.89-2-2-2-2.01.89-2 2c0 1.11.89 2 2 2M11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10M5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86A9 9 0 0 0 9.5 14c-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78a7.94 7.94 0 0 1-5.66-2.86" />
  </svg>
);
const ForwardRef = forwardRef(SvgSupervisedUserCircleTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
