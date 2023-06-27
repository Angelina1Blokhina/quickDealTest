import {createStore} from 'vuex'

export default createStore({
    
    state: () => ({
        tasks: []
    }),

    mutations:{
        setTask(state, tasks){
            state.tasks=tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        removeTask(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
        updateTask(state, updatedTask) {
            const index = state.tasks.findIndex(task => task.id === updatedTask.id);
            if (index !== -1) {
              state.tasks.splice(index, 1, updatedTask);
            }
        },
    },
    actions: {
        loadTasks({ commit }) {
          const savedTasks = localStorage.getItem('tasks');
          if (savedTasks) {
            commit('setTask', JSON.parse(savedTasks));
          }
        },
        saveTasks({ state }) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        createTask({ commit, dispatch }, task) {
            commit('addTask', task);
            dispatch('saveTasks');
        },
        removeTask({ commit, dispatch }, taskId) {
            commit('removeTask', taskId);
            dispatch('saveTasks');
        },
        updateTask({ commit, dispatch }, updatedTask) {
            commit('updateTask', updatedTask);
            dispatch('saveTasks');
        },
    },
    namespaced: true
    
})
