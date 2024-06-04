import React from 'react'
import classnames from "classnames"

export const createSvg = (...path: any) => {
    return React.memo(React.forwardRef((props: React.SVGAttributes<SVGElement>, ref: any) => {
        const { className, viewBox, ...rest } = props;
        const classNames = classnames(
            'tui-icon',
            className,
        ); return <svg className={classNames} viewBox={viewBox ? viewBox : "0 0 24 24"} {...rest} >
            {...path}
        </svg>
    }))
}
