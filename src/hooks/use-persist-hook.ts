import { useSignal } from '@preact/signals';
import { type StateUpdater, useEffect } from 'preact/hooks';
import store from 'store2';

import { compressObject, uncompressObject } from '@/utils';

type StorageType = 'local' | 'session';

const usePersistState = <S>({
    storageKey,
    initialState,
    storageType = 'local',
    compress = true,
}: {
    storageKey: string;
    initialState?: any;
    storageType?: StorageType;
    compress?: boolean;
}): [S, StateUpdater<S>] => {
    const _state = useSignal(initialState);

    useEffect(() => processState, []);

    /**
     * @returns void
     * @description
     * This function is used to process state from storage
     * and set it to state
     *
     */
    const processState = (): void => {
        const storageInBrowser = store[storageType].get(storageKey);
        if (Boolean(storageInBrowser)) {
            const data = uncompressObject(storageInBrowser, compress);
            _state.value = data;
        }
    };

    /**
     * @param newState new state to set
     * @returns void
     *
     * @description
     * This function is used to set state to storage
     * and set it to state
     *
     */
    const setState = (newState: any): void => {
        const data = compressObject(newState, compress);
        store[storageType].set(storageKey, data);

        _state.value = newState;
    };

    return [_state.value, setState];
};

export { usePersistState };
