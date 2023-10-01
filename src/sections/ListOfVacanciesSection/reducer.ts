export type FormState = {
    name: string,
    phone: string,
    surname: string,
    email: string,

}

export const defaultFormSelectorValue = {
    label: 'Choose a vacancy',
    value: ''
}

export const initialFormState: FormState = {
    name: '',
    phone: '',
    surname: '',
    email: '',
}

export type InputFields = keyof Omit<FormState, 'vacancy'>

type ChangeInput = {
    type: 'changeInput',
    payload: {
        field: InputFields,
        value: string,
    }
}

type ChangeSelect = {
    type: 'changeSelect',
    payload: {
        value: string,
        label: string,
    }
}

type Action = ChangeInput | ChangeSelect;

export function formReducer(state: FormState, action: Action) {
    switch (action.type) {
        case 'changeInput': {
            const {field, value} = action.payload
            return {...state, [field]: value}
        }
        case 'changeSelect': {
            return {...state, vacancy: action.payload}
        }
        default: {
            return state;
        }
    }
}
