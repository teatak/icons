import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFaceRetouchingNaturalTwoTone24Px = (
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
      d="M10.66 4.12c2.55 4.23 7.03 3.87 7.18 3.86l-.57-1.25L12.4 4.5l.85-.39C12.84 4.04 12.43 4 12 4c-.46 0-.91.05-1.34.12M8.08 5.03a8.05 8.05 0 0 0-3.66 4.44 8.05 8.05 0 0 0 3.66-4.44"
      opacity={0.3}
    />
    <path d="M19.89 10.75c.07.41.11.82.11 1.25 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55 3.38 4.14 7.97 3.73 8.99 3.61l-.89-1.93c-.13.01-4.62.38-7.18-3.86 1.01-.16 1.71-.15 2.59-.01l2.12-.97.64-.29A9.6 9.6 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.43-.3-2.78-.84-4.01zM8.08 5.03a8.05 8.05 0 0 1-3.66 4.44 8.05 8.05 0 0 1 3.66-4.44" />
    <circle cx={9} cy={13} r={1.25} />
    <circle cx={15} cy={13} r={1.25} />
    <path d="M20.6 3.4 19.5 1l-1.1 2.4L16 4.5l2.4 1.1L19.5 8l1.1-2.4L23 4.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFaceRetouchingNaturalTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
