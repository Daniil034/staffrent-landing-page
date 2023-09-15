// @flow
import * as React from 'react';
import {FaqHeader} from "../../sections/FaqHeader/FaqHeader";
import {FaqListSection} from "../../sections/FaqListSection/FaqListSection";

type Props = {};

export function FaqPage(props: Props) {
    return (
        <div>
            <FaqHeader/>
            <FaqListSection/>
        </div>
    );
}
