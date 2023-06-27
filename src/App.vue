<template>
    <div class="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
 </template>
 
 <script>
import NavBar from '@/components/UI/NavBar';
export default{
    components:{
        NavBar
    }
}
 </script>
 
 <style>
 
 </style>