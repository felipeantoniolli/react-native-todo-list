import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toogleTodo, setEditingTodo } from '../actions';

const TodoList = ({
        todos,
        dispatchToogleTodo,
        dispatchSetEditingTodo
    }) => (
    <View>
        {todos.map(todo => (
            <TodoListItem 
                key={todo.id}
                todo={todo}
                onPressTodo={() => dispatchToogleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
            />)
        )}
    </View>
);

const styles = StyleSheet.create({
    
});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
};

export default connect(
    mapStateToProps,
    {
        dispatchToogleTodo: toogleTodo,
        dispatchSetEditingTodo: setEditingTodo
    }
)(TodoList);