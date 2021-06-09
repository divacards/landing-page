import React from 'react';
import { CustomRadioGroup } from "../../components/Custom";
import { withCheck } from "../../util";

const SuiteItem = ({value, label, state = [], onChange}) => {
    const checked = value in state;
    switch (value) {
    case "s": return <span className={withCheck("icon-spades w-4 m-auto", checked)} onClick={e => onChange(value)}/>;
    case "h": return <span className={withCheck("icon-hearts w-4 m-auto", checked)} onClick={e => onChange(value)}/>;
    case "c": return <span className={withCheck("icon-clubs w-4 m-auto", checked)} onClick={e => onChange(value)}/>;
    case "d": return <span className={withCheck("icon-diamonds w-4 m-auto", checked)} onClick={e => onChange(value)}/>;
    case "j": return <span className={withCheck("icon-joker w-4 m-auto", checked)} onClick={e => onChange(value)}/>;
    default: return null;
    }
};

const SuiteFilters = ({opts, state, onChange}) => {
    return (
        <CustomRadioGroup
          id="suite-select"
          instanceid="suite-select"
          items={opts}
          state={state}
          onChange={onChange}
          Child={SuiteItem}
        />
    );
};

export default SuiteFilters;
