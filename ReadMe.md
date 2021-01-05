## Installation

    npm i vue-cli-plugin-windowhistorybuttons

## Initialization

You can initialize it in  vue js entry point (e.g App.js, main.js)

    Import controls from 'vue-cli-plugin-windowhistorybuttons'
    Import Vue from 'vue'

    Vue.use(controls)

## Use in Template


<template>

    <!-- Our Plugin component -->
    <window-control-buttons
        :type = "String"
        :design = "Array"
        :icon = "Array"
        :css = "Object"
    >
    </window-control-buttons>
    <!-- Our Plugin Component -->
    
</template>


1. Type is a string that take either of these values:

        a. previous
        b. next

2. Design takes an array of bootstrap or tailwind classes

        e.g ['btn', 'btn-sm', 'btn-outline-primary', 'py-4']

3. Icon takes an array of font awesome classes 

        e.g ['fa', 'fa-box', 'fa-back', 'fa-reply', 'fa-2x']

4. Css takes an object of manual css style 

        e.g #myBtn{
            'height': 20px,
            'width': 1rem,
            'padding': .5rem
        }

Alternatively, you can use two way data binding to pass in data
e.g

    <template>
        <div>
            <!-- Our Component -->
            <window-control-buttons
                :type = "config.type"
                :design = "config.design"
                :icon = "config.icon"
                :css = "config.css"
            >

            </window-control-buttons>
            <!-- Our Component ends -->
        </div>
    </template>
    <script>
        data(){
            return{
                config:{
                    type: 'previous',
                    design: ['btn', 'btn-sm', 'btn-outline-primary', 'py-4'],
                    icon: ['fa', 'fa-box', 'fa-back', 'fa-reply', 'fa-2x'],
                    css: {
                            'height': 20px,
                            'width': 1rem,
                            'padding': .5rem
                        }
                }
            }
        }
    </script>

## End Note
Thank you for using this plugin

It is free and easy to use

You can follow me on github @codeDeeAi

Thanks  