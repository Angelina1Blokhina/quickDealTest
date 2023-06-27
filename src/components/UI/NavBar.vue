<template>
    <div class="navbar">
        <router-link to="/" class="link">Главная страница</router-link>
        <router-link to="/tasks" class="link">Задачи</router-link>
    </div>
 </template>
 
 <script>




 
 </script>
 
 <style>
 .navbar{
    height: 50px;
    background-color: red;
    box-shadow: 2px 2px 4px grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
 }
 .link{
    font-size: x-large;
    color: #fff;
    text-decoration: none;
 }
 </style>