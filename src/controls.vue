<template>
    <div>
        <button id="myBtn" v-if="type == 'previous'" type="button" :class="design" :style="css" @click.prevent="goBack"><i :class="icon"></i></button>
        <button id="myBtn" v-if="type == 'next'" type="button" :class="design" :style="css"  @click.prevent="goForward"><i :class="icon"></i></button>
    </div>
</template>
<script>
export default {
    name:'controls',
    props:{
        type:String,
        design:Array,
        icon:Array,
        css:Object,
    },
    components:{

    },
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            window.history.back()
        },
        goForward(){
            window.history.forward()
        }
    }
    
}
</script>
