<template>
   <div v-if="tasks && tasks.length > 0">
      <h2>Список задач</h2>
      <div class="task-container" v-for="task in tasks" :key="task.id">
         <div>
            <div class="task"><strong>Задача:</strong>{{ task.title }}</div>
            <div class="task">{{ task.discription }}</div>
         </div>
         <div class="btn-container">
            <my-button @click="removeTask(task.id)">Удалить</my-button>
            <my-button @click="isEditing(task)">Редактировать</my-button>
         </div>
         
      </div>
   </div>
   <h2 v-else style="color:red">Задач нет</h2>

   <dialog-task v-model:show="dialogVisible">
      <h3>Редактирование задачи</h3>
      <input 
         v-model="editingTask.title"
         type="text" 
         placeholder=editingTask.title>
       <input 
         v-model="editingTask.discription"
         type="text" 
         placeholder=editingTask.discription>
      <my-button @click="updateTask(editingTask)">Сохранить изменения</my-button>
      <my-button @click="closeUpdate">Закрыть</my-button>
   </dialog-task>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
import DialogTask from '@/components/UI/DialogTask';
import { mapState, mapActions } from 'vuex';
export default{
   components:{
        MyButton, DialogTask
    },
    computed: {
      ...mapState( ['tasks'])
   },
   data() {
      return {
      editingTask: null,
      dialogVisible: false
    };
  },
  methods: {
    ...mapActions( ['removeTask', 'updateTask']),
    isEditing(task) {
      this.dialogVisible = true;
      this.editingTask = { ...task };
    },
    closeUpdate(){
      this.dialogVisible = false;
    }
  },
}

</script>

<style>
.task-container{
   margin-bottom: 10px;
   padding: 10px;
   border-radius: 5px;
   border: 2px solid red;
}
.task{
   
   padding-bottom: 10px;
}
.btn-container{
   display: flex;
   justify-content: center;
}
</style>