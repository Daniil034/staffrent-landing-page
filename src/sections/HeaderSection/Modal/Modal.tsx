import {ReactNode} from "react";

type Props = {
    children: ReactNode
};

export function Modal(props: Props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
