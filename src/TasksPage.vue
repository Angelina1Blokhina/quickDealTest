<template>
   <h2>Задачи</h2>
   <my-button @click="showDialog">Создать новую задачу</my-button>
   
   <dialog-task v-model:show="dialogVisible" @close="closeDialog">
     <task-form
        @create="createTask"
        @close="closeDialog"/>
   </dialog-task>
   
    <tasks-list :tasks="tasks"
     @remove="removeTask"
     @update="updateTask"/>
</template>

<script>
import TaskForm from '@/components/TaskForm';
import TasksList from '@/components/TasksList';
import DialogTask from '@/components/UI/DialogTask';
import MyButton from '@/components/UI/MyButton'
import { mapActions, mapState } from 'vuex';
export default{
    components:{
        TaskForm, TasksList,  DialogTask, MyButton
    },
    data() {
    return {
      dialogVisible: false,
    }
    },
    computed: {
        ...mapState(['tasks']),
    },
    methods: {
        ...mapActions( ['createTask', 'loadTasks', 'removeTask', 'updateTask']),
        showDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        },
    },
    
    mounted() {
        this.loadTasks();
    },
}


</script>

<style>
input{
    margin: 10px;
    padding: 10px;
    resize: vertical;
}

</style>