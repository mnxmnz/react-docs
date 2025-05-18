interface State {
  selectedId: number;
  message: string;
}

export type Action =
  | { type: 'changed_selection'; contactId: number }
  | { type: 'edited_message'; message: string }
  | { type: 'sent_message' };

export const initialState: State = {
  selectedId: 0,
  message: '',
};

export function messengerReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'sent_message': {
      return {
        ...state,
        message: '',
      };
    }
    default: {
      throw Error('Unknown action: ' + (action as any).type);
    }
  }
}
