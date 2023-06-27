<template>
    <form @submit.prevent>
        <h4>Создание задачи</h4>
        <input 
            v-model="task.title"
            type="text" 
            placeholder="Название задачи"
        >
        <input 
            v-model="task.discription"
            type="text" 
            placeholder="Описание задачи">
    </form>

    <my-button @click="createNewTask"> Создать новую задачу</my-button>
 </template>
 
 <script>
 import MyButton from '@/components/UI/MyButton';
 import { mapActions } from 'vuex';

 export default{
    components:{
        MyButton
    },
     data(){
        return{
            task:{
                title:'',
                discription:''
            }
        }
        
    },
    methods: {
        ...mapActions( ['createTask']),
        createNewTask() {
            this.task.id = Date.now();
            console.log("HHH",this.task.title)
            this.createTask(this.task);
            this.task = {
                title: '',
                discription: '',
            };
            this.$emit('close');
        },
    }

 }
 
 </script>
 
 <style>
 
 </style>