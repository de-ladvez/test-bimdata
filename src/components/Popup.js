import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {closePopup} from '../action/popup'

const useStyles = makeStyles({
    popupRow: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        textAlign: 'left'
    },
    popupBackground: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, .3)',

    },
    popupWindow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minHeight: '200px',
        minWidth: '300px',
        padding: '10px 5px',
        background: '#e2e3e5',
        borderRadius: '4px',
        maxWidth: '50%'
    },
    popupName: {
        padding: '0 18px 10px 5px',
        marginBottom: '10px',
        borderBottom: '1px solid #333',
        display: 'flex',
        justifyContent: 'space-between'
    },
    popupDescription: {
        padding: '0 5px ',
    },
    closeIcon: {
        width: '15px',
        height: '15px',
        position:'absolute',
        cursor: 'pointer',
        top: '11px',
        right: '5px',
        '&:after': {
            content: '""',
            position:'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '1px',
            background: '#333',
            transform: 'rotate(45deg)'
        },
        '&:before': {
            content: '""',
            position:'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '1px',
            background: '#333',
            transform: 'rotate(-45deg)'
        }
    }
});

const Popup = function ({closePopup, popup}) {
    const style = useStyles();

    const isContent = (data) => {
        return !!data && !!Object.keys(data).length;
    };

    const handlerClosePopup = () => {
        closePopup();
    };

    return (
        <>
            {isContent(popup) &&
            <div className={style.popupRow}>
                <div className={style.popupBackground} onClick={handlerClosePopup}></div>
                <div className={style.popupWindow}>
                    <div className={style.popupName}>
                        <span>{popup.name}</span>
                        <div className={style.closeIcon} onClick={handlerClosePopup}></div>
                    </div>
                    <div className={style.popupDescription}>{popup.description}</div>
                </div>
            </div>
            }
        </>
    );
};


const mapStateToProps = state => ({
    popup: state.popup
});

const mapDispatchToProps = dispatch => ({
    closePopup: () => dispatch(closePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);