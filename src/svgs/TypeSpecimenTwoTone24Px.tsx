import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTypeSpecimenTwoTone24Px = (
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
    <path d="M14.04 7.17h-.08l-1.31 3.72h2.69z" opacity={0.3} />
    <path
      d="M8 16h12V4H8zm5.2-10.5h1.61l3.38 9h-1.56l-.8-2.3H12.2l-.82 2.3H9.81z"
      opacity={0.3}
    />
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z" />
    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12z" />
    <path d="M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56zm1.77-5.03h.08l1.31 3.72h-2.69z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTypeSpecimenTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
