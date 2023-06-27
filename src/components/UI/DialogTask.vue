<template>
    <div class='dialog' v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
        <slot></slot>
    </div>
</div>
 </template>
 
 <script>
    export default{
        name:'dialog-task',
        props:{
            show:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            hideDialog(){
                this.$emit("update:show", false)
            }
        }
    }
 
 </script>
 
 <style>
 .dialog{ 
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
 }
 .dialog__content{
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
 }
 </style>