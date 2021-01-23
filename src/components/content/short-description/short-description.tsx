import React from "react";
import { useGlobalState } from "../../../state/state";

export function ShortDescription() {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
      <div>shortDescription Information Content</div>
      <div>
        <input
          type="text"
          value={state.shortDescriptionForm?.description || ''}
          onChange={(ev: {target: {value: string}}) =>
            dispatch({ shortDescriptionForm: { description: ev.target.value } })
          }
        />
      </div>
    </div>
  );
}
