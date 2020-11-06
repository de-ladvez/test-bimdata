import {
    ADD_CARD,
    CARD_MOVE_TO_SOME_COLUMN_DND,
    ADD_COLUMN
} from '../action/cards';

const cardsState = [
    {
        id: '1',
        name: 'Наряды',
        cards: [
            {
                name: 'Установка плит под фундамент',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
            },
            {
                name: 'Земельные работы по установке площадки по устанвке плит для несущей стены',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'},
        ],
    },
    {
        id: '2',
        name: 'В работе',
        cards: [
            {
                name: 'Установка плит под фундамент',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                name: 'Установка плит под фундамент',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
        ]
    },
    {
        id: '3',
        name: 'Приемка',
        cards: [
            {
                name: 'Земельные работы по установке площадки по устанвке плит для несущей стены',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                name: 'Установка плит под фундамент',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
        ],
    },
    {
        id: '4',
        name: 'Завершено',
        cards: [
            {
                name: 'Установка плит под фундамент',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                name: 'Установка плит под фундамент',
                description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
        ],
    }

];

function cards(state = cardsState, action) {
    switch (action && action.type) {
        case ADD_COLUMN:
            state.push({
                id: (state.length+1).toString(),
                name: action.data.name,
                cards: []
            });

            return [...state];
        case CARD_MOVE_TO_SOME_COLUMN_DND:
            const {source, destination} = action.data;
            const getList = (id) => state.find(item => item.id === id);

            if (!destination) {
                return state;
            }

            let mathCloseColumn = source.droppableId - destination.droppableId;

            if(-2 >=  mathCloseColumn || mathCloseColumn >= 2) {
                return state;
            }

            const firstArray = getList(source.droppableId).cards;
            const secondArray = source.droppableId != destination.droppableId ? getList(destination.droppableId).cards : undefined;
            const [removed] = firstArray.splice(source.index, 1);

            (secondArray || firstArray).splice(destination.index, 0, removed);

            state.forEach(item => {
                item.cards = item.id === destination.droppableId ? firstArray : item.cards;
            });

            if (secondArray) {
                state.forEach(item => {
                    item.cards = item.id === destination.droppableId ? secondArray : item.cards;
                });
            }

            return [...state];
        case ADD_CARD:
            state.forEach(item => {
                    if (item.id === action.data.id) {
                        item.cards.push({
                            name: 'Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet'
                        });
                    }
                });
            return [...state];
        default:
            return state;
    }
}

export default cards;