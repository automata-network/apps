/// <reference types="react" />
declare const Chart: {
    Doughnut: import("react").MemoExoticComponent<({ className, size, values }: import("./types").DoughnutProps) => import("react").ReactElement<import("./types").DoughnutProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>>;
    HorizBar: import("react").MemoExoticComponent<({ aspectRatio, className, max, showLabels, values }: import("./types").HorizBarProps) => import("react").ReactElement<import("./types").HorizBarProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null>;
    Line: import("react").MemoExoticComponent<({ className, colors, labels, legends, values }: import("./types").LineProps) => import("react").ReactElement<import("./types").LineProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null>;
};
export default Chart;
