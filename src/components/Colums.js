import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {
    addCard,
    addColumn,
    cardMoveToSomeColumnDnd
} from '../action/cards';
import {Container, Grid, Button, TextField } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Cards from './Cards';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';


const useStyles = makeStyles({
    container: {
        paddingTop: '20px'
    },
    columsRow: {
        overflow: 'auto',
        paddingBottom: '30px'
    },
    colums: {
        fontSize: '12px',
        maxWidth: '200px',
        minWidth: '150px',
        margin: '0 5px 0'
    },
    columsHead: {
        background: '#f3f4f6',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 6px',
        marginBottom: '8px',
        fontWeight: 600,
        '& span': {
            lineHeight: '12px',
        },
        '&:hover div': {
            display: 'block'
        }
    },
    columsBody: {
        background: '#f3f4f6',
        borderRadius: '4px',
        padding: '5px 9px'


    },
    buttonAddCards: {
        display: 'none',
        lineHeight: '12px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    statusColumn: {
        display: 'inline-block',
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#78d5a6',
        marginRight: 7
    },
    addColumnRow: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '15px 10px',
        background: '#f3f4f6',
        marginBottom: 30,
    },
});

const Colums = function ({addCard, cardMoveToSomeColumnDnd, addColumn, cards}) {
    const style = useStyles();
    const [nameNewColumn, setNameNewColumn] = useState('');

    const onDragEnd = (result) => {
        cardMoveToSomeColumnDnd(result);
    };

    const handlerAddColum = () => {
        if(nameNewColumn) {
            addColumn({name: nameNewColumn});
        }
        setNameNewColumn('');
    };

    const handlerAddCard = (id) => {
        addCard({id});
    };

    return (
        <Container className={style.container}>
            <div className={style.addColumnRow}>
                <TextField id="outlined-basic" label="Введите имя колонки" variant="outlined" value={nameNewColumn} onChange={e => setNameNewColumn(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={handlerAddColum}>
                    Создать новую колонку
                </Button>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Grid container justify='space-between' wrap="nowrap" className={style.columsRow}>
                    {cards.map(item => (
                            <Grid item={true} sm={3} xs={12} key={item.id} className={style.colums}>
                                <div className={style.columsHead}>
                                    <span>
                                        <span className={style.statusColumn}></span>
                                        {item.name}
                                        </span>
                                    <div className={style.buttonAddCards} onClick={() => handlerAddCard(item.id)}>+</div>
                                </div>

                                <Droppable droppableId={item.id}>
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={style.columsBody}
                                        >
                                            <Cards data={item.cards} idPrefix={item.id}/>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </Grid>
                        )
                    )}
                </Grid>
            </DragDropContext>

        </Container>
    );
};

const mapStateToProps = state => ({
    cards: state.cards
});

const mapDispatchToProps = dispatch => ({
    addCard: data => dispatch(addCard(data)),
    cardMoveToSomeColumnDnd: data => dispatch(cardMoveToSomeColumnDnd(data)),
    addColumn: data => dispatch(addColumn(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Colums);
