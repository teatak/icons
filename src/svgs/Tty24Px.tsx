import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTty24Px = (
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
    <path d="M14 4h2v2h-2zm-1 3h2v2h-2zm-2-3h2v2h-2zm7 5h-2V7h2zm1-3h-2V4h2zm2 3h-2V7h2zm1-3h-2V4h2zm-7.38 8.38L12.1 16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52c.24-.24.34-.58.28-.9L8.16 3.8c-.09-.46-.5-.8-.98-.8H3.03c-.56 0-1.03.47-1 1.03.17 2.89 1.02 5.6 2.4 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.23 7.97 2.4.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.99.99 0 0 0-.91.27M14 10h2v2h-2zm-3 0h2v2h-2zm8 2h-2v-2h2zm3 0h-2v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTty24Px);
const Memo = memo(ForwardRef);
export default Memo;
