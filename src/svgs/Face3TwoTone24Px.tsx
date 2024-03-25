import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFace3TwoTone24Px = (
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
      d="M16.5 8c.73 0 1.41-.25 1.99-.65-1.27-1.77-3.23-3-5.49-3.28v.43C13 6.43 14.57 8 16.5 8M11 4.5v-.43a7.96 7.96 0 0 0-5.49 3.28c.58.4 1.26.65 1.99.65C9.43 8 11 6.43 11 4.5M2.75 15.8 2.19 22H12c-4.18 0-7.75-2.56-9.25-6.2M12 22h9.81l-.56-6.2C19.75 19.44 16.18 22 12 22"
      opacity={0.3}
    />
    <circle cx={9} cy={13} r={1.25} />
    <circle cx={15} cy={13} r={1.25} />
    <path d="M22.91 11.96C22.39 6.32 17.66 2 12 2S1.61 6.32 1.09 11.96l-.9 9.86c-.1 1.17.82 2.18 2 2.18h19.62c1.18 0 2.1-1.01 1.99-2.18zM13 4.07c2.26.28 4.22 1.51 5.49 3.28-.58.4-1.26.65-1.99.65C14.57 8 13 6.43 13 4.5zm-2 0v.43C11 6.43 9.43 8 7.5 8c-.73 0-1.41-.25-1.99-.65 1.27-1.77 3.23-3 5.49-3.28M4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87M12 22H2.19l.56-6.2C4.25 19.44 7.82 22 12 22s7.75-2.56 9.25-6.2l.56 6.2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFace3TwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
