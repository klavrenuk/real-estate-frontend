<script lang="ts" setup>
import { ref } from 'vue'

const phone = ref<string | number>('')

const login = () => {
  console.log('login')
}
</script>

<template>
    <div>
        <div>
            <h3>Введите номер телефона</h3>
            <p>Чтобы войти или зарегистрироваться</p>
        </div>

        <form @submit.prevent="login">
            <input class="input" type="tel" placeholder="+7 (999) 999-99-99" v-model="phone" />
            <div>
                <button class="button w-full" type="submit" @click.prevent="login">Продолжить</button>
            </div>
        </form>
    </div>
</template>
