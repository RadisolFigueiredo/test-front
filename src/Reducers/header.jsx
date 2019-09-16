export default function headerActive(state = ['SACOLA'], action) {

  switch (action.type) {
    case 'HEADER_ACTIVE':
      return [...state, {
        color: action.color,
      }]
    default:
      return state;
  }
}

// {
//   headerActive: ['PAGAMENTO', 'CONFIRMAÇÃO'],
// }
