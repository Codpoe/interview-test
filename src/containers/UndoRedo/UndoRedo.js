import React from 'react';
import { connect } from 'react-redux';
import { undo, redo } from '../../action.js';
import './UndoRedo.css';

const UndoRedo = ({ handleUndo, handleRedo, canUndo, canRedo }) => {
    return (
        <div className="undo-redo">
            <button className={`${!canUndo ? 'disabled' : ''}`}
                onClick={handleUndo}
                disabled={!canUndo}>
                UNDO
            </button>
            <button className={`${!canRedo ? 'disabled' : ''}`}
                onClick={handleRedo}
                disabled={!canRedo}>
                REDO
            </button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        canUndo: state.past.length > 0,
        canRedo: state.future.length > 0
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleUndo() {
            dispatch(undo());
        },
        handleRedo() {
            dispatch(redo());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);