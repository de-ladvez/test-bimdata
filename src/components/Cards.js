import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core';
import {Draggable} from 'react-beautiful-dnd';
import {openPopup} from '../action/popup';

const useStyles = makeStyles({
    sticker: {
        background: 'red'
    },
    card: {
        background: '#fafbfd',
        boxShadow: '0 0 3px rgba(0,0,0,0.3)',
        borderRadius: '3px',
        marginBottom: '5px',
    },
    cardName: {
        padding: '9px',
        textAlign: 'left'
    },
    bottomNav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 9px 9px'
    },
    cardStatuses: {
        width: '70%',
        height: 15,
        borderRadius: 4,
        background: '#d8d8d8',
        alignSelf: 'flex-end'
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: '50%',
        background: '#d8d8d8',
        alignSelf: 'bottom'

    }
});

const Cards = function ({data, idPrefix, openPopup}) {
    const style = useStyles();

    const handlerOpenPopup = data => {
       openPopup(data);
    };

    return (
        <>
            {
                data.map((itemChild, index) => (
                    <Draggable key={`${idPrefix}_${index}`}
                               draggableId={`${idPrefix}_${index}`}
                               index={index}>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                                 className={style.card}
                                 onClick={()=> handlerOpenPopup(itemChild)}
                            >
                                <div className={style.cardName}>
                                    {itemChild.name}
                                </div>
                                <div className={style.bottomNav}>
                                    <div className={style.cardStatuses}></div>
                                    <div className={style.avatar}></div>
                                </div>
                            </div>
                        )}
                    </Draggable>
                ))
            }
        </>);
};

const mapStateToProps = state => ({
    cards: state.cards
});
const mapDispatchToProps = dispatch => ({
    openPopup: data => dispatch(openPopup(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);

// export default Cards;