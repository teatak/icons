import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgManageAccountsTwoTone24Px = (
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
    <circle cx={10} cy={8} r={2} opacity={0.3} />
    <path
      d="M10 16c0-.34.03-.67.08-.99-.03-.01-.05-.01-.08-.01-1.97 0-3.9.53-5.59 1.54-.25.14-.41.46-.41.81V18h6.29c-.19-.63-.29-1.3-.29-2"
      opacity={0.3}
    />
    <path d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M20.83 12.63l-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1c.03-.21.06-.41.06-.63s-.03-.42-.06-.63l1.14-1zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgManageAccountsTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
